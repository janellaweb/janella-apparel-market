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
    <main className="products-page">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Janella&apos;s <br />
            <span>Apparel Market</span>
          </h1>

          <p>
            Trendy styles, everyday comfort. Discover your new favorites and
            express your unique style.
          </p>

          <button className="hero-button">SHOP NOW →</button>
        </div>

        <div className="hero-image">Your apparel image here</div>
      </section>

      {isLoading ? (
        <p className="loading">Loading categories...</p>
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