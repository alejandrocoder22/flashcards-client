const NoSidebarHeader = () => {
  return (
    <header className='main-header nosidebar'>
      <div className='main-header__logo black '>Logo</div>
      <nav>
        <ul className='main-header__ul'>
          <li className='main-header__li'>Register</li>
          <li className='main-header__li main-header__my-cards'>My Cards</li>
        </ul>
      </nav>
    </header>

  )
}

export default NoSidebarHeader
