import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main-header'>
      <nav>
        <ul className='main-header__ul'>
          <Link to='/registrarse'>
            <li className='main-header__li'>Register</li>
          </Link>
          <Link to='/mis-tarjetas'>
            <li className='main-header__li main-header__my-cards'>My Cards</li>
          </Link>
        </ul>
      </nav>
    </header>

  )
}

export default Header
