import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useAuthStore from "../store/Store"
import Comment from "../components/Comment"

const Publication = () => {

  const authStore = useAuthStore()

  const [publication, setPublication] = useState()
  const idPublication = useParams()?.id

  const navigate = useNavigate()

  try {
    useEffect(() => {
      const url = `${process.env.REACT_APP_API_URL}/api/publications/publication/${idPublication}/?format=json`
      fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setPublication(result)
      })
    }, [idPublication])
  } catch (error) {
    console.error(error)
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar esta publicación?");

    if (confirmDelete) {
      try {
        const url = `${process.env.REACT_APP_API_URL}/api/publications/publication/${idPublication}/?format=json`;
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authStore?.token?.access}`,
          },
        });

        if (response.status === 204) {
          alert("Post successfully deleted");
          navigate("/");
        } else {
          alert("Error, try it more later");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-20 lg:px-64 lg:py-24 min-h-screen">
        {authStore?.user?.username && authStore?.user?.username === publication?.user?.username && (
          <div className="flex justify-end">
            <button onClick={() => handleDelete()} className="align-right py-2 px-4 bg-red-600 text-white mb-4 rounded">Delete publication</button>
          </div>
        )}
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{publication?.title}</h1>
        <h3 className="mb-2">By: <span onClick={() => navigate(`/profile/${publication?.user?.id}`)} className="font-bold capitalize hover:text-cyan-600 cursor-pointer">{publication?.user?.username}</span> in <span className="font-bold">{publication?.date?.split('T')[0]}</span></h3>
        <h3 className="mb-8 text-xs">{publication?.language}</h3>
        <img className="mb-4 w-full max-w-screen-md mx-auto max-h-screen" src={publication?.image} alt="" />
        <div dangerouslySetInnerHTML={{ __html: publication?.description }} />
        <Comment
          idPublication = {publication?.id}
        />
      </div>
    </>
  )
}

export default Publication