import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import useAuthStore from '../store/Store'
import { format } from 'date-fns'
import deleteIcon from "../assets/delete-icon.png"

const Comment = (props) => {

  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const authStore = useAuthStore()

  const formData = new FormData()
  formData.append('description', comment)
  formData.append("publication", props.idPublication)
  formData.append("user", authStore?.user?.user_id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/publications/comment/`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authStore?.token?.access}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        setComment("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/publications/comment/`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setComments(result)
      })
  }, [comments])

  const handleDelete = async (idComment) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este comentario");

    if (confirmDelete) {
      try {
        const url = `${process.env.REACT_APP_API_URL}/api/publications/comment/${idComment}/`;
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authToken'))?.access}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className='my-5'>

        <h4 className='text-2xl mb-5 font-bold'>Comments</h4>

        {comments && comments.map((value, key) => {
          const newDate = format(new Date(value.date), "yyyy-MM-dd 'at' HH:mm")
          return (
            value.publication === props.idPublication && (
              <div className='mb-8 flex gap-4 justify-between' key={key}>
                <div className='flex gap-4'>
                  <img className="w-7 h-7 rounded-full" src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256" alt="User avatar" />
                  <div>
                    <span className="font-medium capitalize mr-4">{value.user.username}</span>
                    <span className='text-xs'>{newDate}</span>
                    <div dangerouslySetInnerHTML={{ __html: value.description }} />
                  </div>
                </div>
                {value.user.id === authStore?.user?.user_id &&
                  <img onClick={() => handleDelete(value.id)} className='w-5 h-5 cursor-pointer' src={deleteIcon} alt="delete" />
                }
              </div>
            )
          );

        })}
      </div>
      {authStore?.user?.user_id &&
        <form onSubmit={handleSubmit} className='my-10 '>
          <ReactQuill theme="snow" value={comment} onChange={setComment} />
          <button type="submit" className='my-2 bg-cyan-600 text-white py-2 px-12'>Send</button>
        </form>
      }
    </>
  )
}

export default Comment