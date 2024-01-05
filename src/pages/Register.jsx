import NoSidebarHeader from '../components/NoSidebarHeader'
import useForm from '../hooks/useForm'

const Register = () => {
  const { handleForm, form } = useForm()

  return (
    <>
      <NoSidebarHeader />
      <section className='auth'>
        <div className='auth__input-container'>
          <label className='auth__label'>Username</label>
          <input onChange={handleForm} name="username" className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Email</label>
          <input onChange={handleForm} name="email" className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Password</label>
          <input onChange={handleForm} name="password"  className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Repeat Password</label>
          <input className='auth__input' />
        </div>

        <button className='auth__button'>Register</button>
      </section>
    </>
  )
}

export default Register
