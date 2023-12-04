
const Category = ({ category }) => {
  return (
    <div className="">
         <img src={category.img} alt="" />
        <p>{category.name}</p>
      </div>
  )
}

export default Category