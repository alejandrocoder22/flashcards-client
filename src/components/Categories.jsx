import { categories } from '../data/categories'
import Category from './Category'

const Categories = () => {
  return (
    <>
      {categories.map(category => <Category key={category.name} category={category} />)}
    </>
  )
}

export default Categories
