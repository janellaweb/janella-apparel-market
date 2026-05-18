import { useEffect, useState } from 'react'
import { loadCategories } from '../../services/marketService'
import CategoryMenu from './CategoryMenu'
import './ProductsPage.css'

function ProductsPage() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCategories().then((data) => {
      setCategories(data)
      setIsLoading(false)
    })
  }, [])

  function handleCategorySelect(categoryName) {
    console.log('Selected category:', categoryName)
  }

  return (
    <main>
      <h2>Janella Apparel Market</h2>

      {isLoading ? (
        <p>Loading categories...</p>
      ) : (
        <CategoryMenu
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      )}
    </main>
  )
}

export default ProductsPage