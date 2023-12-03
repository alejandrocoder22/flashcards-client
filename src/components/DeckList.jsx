import { Link } from 'react-router-dom'

Link
const DeckList = ({ deck }) => {
  return (
    <Link to={`/deck/${deck.deck_id}`} key={deck.deck_id}> <p className='home__card'>{deck.deck_name}</p></Link>
  )
}

export default DeckList
