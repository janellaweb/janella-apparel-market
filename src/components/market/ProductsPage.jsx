import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadCategories } from '../../services/marketService'
import CategoryMenu from './CategoryMenu'
import './ProductsPage.css'
import heroImage from '../../assets/hero.webp'

function ProductsPage({ showCategories }) {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    loadCategories().then((data) => {
      setCategories(data)
      setIsLoading(false)
    })
  }, [])

  function handleCategorySelect(categoryName) {
    console.log('Selected category:', categoryName)
  }

  function handleShopNowClick() {
    navigate('/products')
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

          <button className="hero-button" onClick={handleShopNowClick}>
            SHOP NOW →
          </button>
        </div>

        <div className="hero-image">
            <img
                src={heroImage}
                alt="Fashion Hero"
                className="hero-photo"
            />
      </div>
      </section>

      {showCategories && (
        <>
          {isLoading ? (
            <p className="loading">Loading categories...</p>
          ) : (
            <CategoryMenu
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          )}
        </>
      )}
    </main>
  )
}

export default ProductsPage