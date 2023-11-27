const Header = () => {
  return (
    <header className='main-header'>
      <div className='main-header__logo'>Logo</div>
      <nav>
        <ul className='main-header__ul'>
          <li className='main-header__li'>Register</li>
          <li className='main-header__li main-header__my-cards'>My Cards</li>
        </ul>
      </nav>
    </header>

  )
}

export default Header
