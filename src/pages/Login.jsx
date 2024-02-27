import useForm from '../hooks/useForm'
import NoSidebarHeader from '../components/NoSidebarHeader'
import { onLogin } from '../services/auth'

const Login = () => {
  const { handleForm, form } = useForm()


  return (
    <>
      <NoSidebarHeader />
      <form onSubmit={(e) => onLogin(e, form)} className='auth'>
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
