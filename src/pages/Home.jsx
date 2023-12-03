import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DeckList from '../components/DeckList'

const getPublicCardsByTopic = async (setDecks) => {
  const response = await fetch('http://localhost:3001/api/decks?pagination=0&topic=Science')
  const data = await response.json()
  setDecks(data.decks)
}

const Home = () => {
  const [decks, setDecks] = useState([])
  useEffect(() => {
    getPublicCardsByTopic(setDecks)
  }, [])
  return (
    <div className='home'>
      <Sidebar />
      <section className='home__cards-container'>
        <Header />
        <h2>Community topic flashcards</h2>
        <div className='home__cards'>
          {
            decks.map(deck => <DeckList key={deck.deck_id} deck={deck} />)
          }
        </div>
      </section>
    </div>
  )
}

export default Home
