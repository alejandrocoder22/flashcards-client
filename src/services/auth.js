export const onRegister = async (e, form, checkPassword) => {
  e.preventDefault()
  checkPassword()
  const petition = fetch(import.meta.env.VITE_BASE_URL + 'api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  const response = await petition.json()

  console.log(response)
}


  export const onLogin = (e, form) => {
    e.preventDefault()
    fetch(import.meta.env.VITE_BASE_URL + 'api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
  }