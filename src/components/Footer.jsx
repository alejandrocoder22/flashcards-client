const dateToday = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className='main-footer'> Todos los derechos reservados &copy; {dateToday}</footer>
  )
}

export default Footer
