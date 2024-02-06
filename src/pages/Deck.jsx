import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Deck = () => {
  const [card, setCard] = useState([])
  const [pagination, setPagination] = useState(1)
  const [showAnswer, setShowAnswer] = useState(false)

  const getCardById = async () => {
    const userData = {
      username: 'amanda',
      password: '123456',
      email: 'amanda@gmail.com'
    }
    await fetch(import.meta.env.VITE_BASE_URL + 'api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const response = await fetch(import.meta.env.VITE_BASE_URL + 'api/decks/byId/1', {
      credentials: 'include'
    })
    const data = await response.json()
    setCard(data)
  }

  const onShowAnswer = () => setShowAnswer(true)
  const onNextCard = () => {
    setShowAnswer(false)
    if (pagination < card.length) setPagination(currentPagination => currentPagination + 1)
  }

  const onPreviousCard = () => {
    setShowAnswer(false)
    if (pagination > 1) setPagination(currentPagination => currentPagination - 1)
  }


  const isDisabledNext = () => {
    return pagination === card.length ? 'disabled' : ''
  }

  
  useEffect(() => {
    getCardById()
  }, [])
  return (
    <div className='deck'>
      <Sidebar />
      <section className='home__cards-container'>
        <Header />
        <p className='deck__card-counter'>Card {pagination} of {card.length}</p>
        <div className='deck__card'>
          <h2 className='deck__card-question'>{card?.[pagination - 1]?.question}</h2>
          <p className={`deck__card-answer ${showAnswer && 'show'}`}>{card?.[pagination]?.answer}</p>
          <button onClick={onShowAnswer} className='deck__button-response'>See response</button>
        <div onClick={onPreviousCard} className='deck__arrow-prev'>Prev</div>
        <div onClick={onNextCard} className={`deck__arrow-next ${isDisabledNext()}`} >Next</div>
        </div>
      </section>

    </div>
  )
}

export default Deck
