import mainIcon from "../assets/main-icon.png"

const Form = (props) => {
  return (
    <form onSubmit={props.handleClickBtnTop} className="formRegister flex flex-col w-full md:w-3/6 gap-3  bg-white p-4  md:p-16 rounded-xl shadow-md">
      <img className="w-20 mx-auto mb-5" src={mainIcon} alt="anchor" />
      <input onChange={props.valueUserName} value={props.username} type="text" placeholder="Username" className="p-3 border-b-2 border-color-800 outline-none shadow
      " />
      <input onChange={props.valuePassword} value={props.password} type="password" placeholder="Password" className="p-3 border-b-2 border-color-800 outline-none shadow" />
      <button type="submit"
        onClick={props.handleClickBtnTop}
        className="font-bold bg-cyan-600 p-3 text-white shadow rounded-full">
        {props.btnTop}
      </button>
      <button
        type="button"
        onClick={() => props.handleClickBtnBot()}
        className="font-bold border-2 p-3 border-cyan-600 shadow text-cyan-600 rounded-full">
        {props.btnBot}
      </button>
    </form>
  )
}

export default Form