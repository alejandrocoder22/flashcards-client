export const onRegister = async (e, form) => {
  e.preventDefault()
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
