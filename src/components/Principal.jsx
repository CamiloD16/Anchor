import { useEffect, useState } from 'react'
import Publication from './Publication'
import { format } from 'date-fns'

const Principal = () => {

  const [search, setSearch] = useState('')
  const searcher = (e) => setSearch(e.target.value)

  const [publication, setPublication] = useState([])

  try {
    useEffect(() => {
      const url = `${process.env.REACT_APP_API_URL}/api/publications/publication/?format=json`
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setPublication(result)
        })
    }, [])
  } catch (error) {
    console.error(error)
  }

  const filteredPublications = !search ? publication : publication.filter((val) => val.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input className='shadow-md block w-11/12 md:w-5/12 py-3 px-10 outline-none mx-auto mb-5 rounded-3xl'  value={search} type='text' placeholder='Search...' onChange={searcher} />
      <section className='flex flex-wrap justify-center my-0 mx-auto max-w-screen-xl gap-3 py-5'>
      {filteredPublications.slice().reverse().map((publication, key) => {

        const formattedDateString = format(new Date(publication.date), "yyyy/MM/dd")

        return (
          <Publication
            key = {key}
            title = {publication.title}
            image = {publication.image}
            username = {publication.user.username}
            language = {publication.language}
            formattedDateString = {formattedDateString}
            publicationId = {publication.id}
          />
        )
      })}
      </section>
    </>
  )
}

export default Principal