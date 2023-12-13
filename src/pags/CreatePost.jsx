import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/Store'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const authStore = useAuthStore()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [languages, setLanguages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const fileInputRef = useRef(null)

  const handlePublication = async (e) => {
    e.preventDefault()

    const url = `${process.env.REACT_APP_API_URL}/api/publications/publication/?format=json`

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('user', authStore.user.user_id)
    formData.append('language', selectedLanguage)

    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      formData.append('image', fileInputRef.current.files[0])
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authToken'))?.access}`,
        },
        body: formData,
      })

      const responseData = await response.json()

      if (response.status === 200 || response.status === 201) {
        navigate(`/publication/${responseData.id}`)
      } else {
        alert('Algo salió mal')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/publications/language/?format=json`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setLanguages(result)
      })
  }, [])

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-5 md:px-28 lg:px-64 py-20 min-h-screen'>
        <form onSubmit={handlePublication} className='flex flex-col gap-2 shadow-lg rounded p-8 bg-white'>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className='py-2 px-4 outline-none mb-2 shadow border border-gray-300 text-gray-500'
            type='text'
            name='title'
            placeholder='Title'
            required
          />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className='py-2 px-4 outline-none mb-2 shadow border border-gray-300 text-gray-500'
            name='language'
            required
          >
            <option value='' disabled>
              Choose a language
            </option>
            {languages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.language}
              </option>
            ))}
          </select>
          <ReactQuill theme="snow" value={description} onChange={setDescription} required />
          <div className='mb-2'>
            <label className='block mb-2 text-sm font-medium' htmlFor='file_input'>
              Upload Image
            </label>
            <input ref={fileInputRef} className='block w-full text-sm placeholder-gray-400 rounded-lg cursor-pointer bg-gray-50 focus:outline-none py-2' id='file_input' type='file' required />
          </div>
          <button className='bg-cyan-600 p-3 font-bold text-white' type='submit'>
            Create post
          </button>
        </form>
      </div>
    </>
  )
}

export default CreatePost
