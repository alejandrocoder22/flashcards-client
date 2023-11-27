import Header from '../components/Header'

const Home = () => {
  return (
    <div className='home'>
      <aside className='home__sidebar'>Aside</aside>
      <section className='home__cards-container'>
        <Header />
        <h2>Community topic flashcards</h2>
      </section>
    </div>
  )
}

export default Home
