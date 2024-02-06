const Category = ({ category }) => {
  return (
    <div className='category'>
      <img  className='category__image' src={category.img} alt='' />
      <p className='category__p'>{category.name}</p>
    </div>
  )
}

export default Category
