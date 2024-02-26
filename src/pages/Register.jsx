import NoSidebarHeader from '../components/NoSidebarHeader'
import useForm from '../hooks/useForm'
import { onRegister } from '../services/auth'
import { useState } from 'react'

const Register = () => {
  const { handleForm, form } = useForm()

const [errorMsg, setErrorMsg] = useState('')
  const checkPassword = () => {
    console.log(form)
    if (form.password !== form.repeatpassword) {
      setErrorMsg('Both passwords bust he identical')
      throw new Error('Both passwords bust he identical')
    } else {
      setErrorMsg('')
    }
  }

  return (
    <>
      <NoSidebarHeader />
      <p>{errorMsg}</p>
      <form onSubmit={(e) => onRegister(e, form, checkPassword)} className='auth'>
        <div className='auth__input-container'>
          <label className='auth__label'>Username</label>
          <input onChange={handleForm} name='username' className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Email</label>
          <input onChange={handleForm} name='email' className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Password</label>
          <input onChange={handleForm} name='password' type='password' className='auth__input' />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label'>Repeat Password</label>
          <input onChange={handleForm} className='auth__input' name='repeatpassword' type='password'/>
        </div>
        <button className='auth__button'>Register</button>
      </form>
    </>
  )
}

export default Register
