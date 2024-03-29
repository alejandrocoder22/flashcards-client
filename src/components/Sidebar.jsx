import { Link } from 'react-router-dom'
import Categories from './Categories'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Link to='/'>
        <header className='sidebar__logo'>LOGO</header>
      </Link>
      <Categories />
    </aside>

  )
}

export default Sidebar
