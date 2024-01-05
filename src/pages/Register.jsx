import NoSidebarHeader from '../components/NoSidebarHeader'

const Register = () => {
  return (
    <>
      <NoSidebarHeader />
      <section className='auth'>
        <div className='auth__input-container'>
          <label className='auth__label'>Username</label>
          <input className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Email</label>
          <input className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Password</label>
          <input className='auth__input' />
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
