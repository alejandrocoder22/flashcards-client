import useForm from '../hooks/useForm'
import NoSidebarHeader from '../components/NoSidebarHeader'

const Login = () => {

  const {handleForm, form} = useForm()


  const onLogin = (e) => {
    e.preventDefault()
    fetch(import.meta.env.VITE_BASE_URL + 'api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(form)
    })
  }
  return (
      <>
    <NoSidebarHeader/>
      <form onSubmit={onLogin} className='auth'>
        <div className='auth__input-container'>
          <label className='auth__label'>Username</label>
          <input onChange={handleForm} name='username' className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Password</label>
          <input onChange={handleForm} name='password' type='password' className='auth__input' />
        </div>
        <button className='auth__button'>Login</button>
      </form>
    </>
  )
}

export default Login
