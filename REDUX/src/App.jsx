import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"

const App = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const [ form , setForm ] = useState({
    email : '',
    password : ''
  })

  const handleInput = (e) => {
    const {name , value} = e.target
    setForm((prev) => ({
      ...prev, [name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = {
      token : 'dsfas',
      user : {
        name : 'Roberto',
        lastname : 'Fanara',
        email : 'r.fanara@gmail.com'
      }
    }
    dispatch(login(result))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={form.email} onInput={handleInput}/>
      <input type="password" name="password" value={form.password} onInput={handleInput}/>
      <button type="submit">SUBMIT</button>
    </form>
    <div>
      token : {auth.token}
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
    </>
  )
}

export default App