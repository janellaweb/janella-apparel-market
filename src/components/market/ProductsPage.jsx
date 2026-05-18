import { useEffect, useState } from 'react'
import { loadCategories } from '../../services/marketService'

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
      <p>Loading categories from our market service...</p>
    </main>
  )
}

export default ProductsPage