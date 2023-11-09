const Publication = (props) => {

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }

  const truncatedText = truncateText(props.title, 43);

  return (
    <article className="bg-white py-6 rounded-xl w-full md:w-5/12 xl:w-3/12 flex flex-col justify-between shadow">
      <div className="flex justify-between items-center mb-5 text-gray-500 px-5">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center rounded">
          {props.language}
        </span>
        <span className="text-sm">{props.formattedDateString}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 px-5 text-justify">{truncatedText}<a href="#">{}</a></h2>

      <img className='w-full my-5 h-64' src={props.image} alt="" />
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <img className="w-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
          <span className="font-medium">
            {props.username}
          </span>
        </div>
        <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:underline">
          Read more
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      </div>
    </article>
  )
}

export default Publication