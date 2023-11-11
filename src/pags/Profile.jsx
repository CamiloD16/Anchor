import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Publication from '../components/Publication'

const Profile = () => {

  const idProfile = useParams()?.id

  const [user, setUser] = useState([])
  const [publication, setPublication] = useState([])

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/users/user/${idProfile}/?format=json`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setUser(result)
      })
  }, [])

  useEffect(() =>{
    const url = `${process.env.REACT_APP_API_URL}/api/publications/publication/?format=json`
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
      setPublication(result)
    })
  },[])

  return (
    <div className="h-full bg-gray-200 p-8 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img src="https://images.pexels.com/photos/355808/pexels-photo-355808.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full rounded-tl-lg rounded-tr-lg" alt='' />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256" className="w-40 border-4 border-white rounded-full" alt='' />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl capitalize">{user.username}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
          <p className="text-sm text-gray-500">New York, USA</p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center xl:justify-start my-0 mx-auto max-w-screen-xl gap-8 py-5 lg:px-8'>
          {publication && publication.map((value,key) => {
            return(
              value.user.id == idProfile &&
                <Publication
                  key={key}
                  title={value.title}
                  image={value.image}
                  username={value.user.username}
                  language={value.language}
                  date={value.date}
                  publicationId={value.id}
                />
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile