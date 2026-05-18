import { useEffect, useState } from 'react'
import { loadCategories } from '../../services/marketService'
import CategoryMenu from './CategoryMenu'

function ProductsPage() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    loadCategories().then((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <main>
      <h2>Janella Apparel Market</h2>

      <CategoryMenu categories={categories} />
    </main>
  )
}

export default ProductsPage