import { useState } from 'react'
import CategoryMenuItem from './CategoryMenuItem'
import './CategoryMenu.css'

function CategoryMenu({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleCategoryClick(categoryName) {
    setSelectedCategory(categoryName)
    onCategorySelect(categoryName)
  }

  return (
    <section className="category-section">
        <div className="category-header">
        <h2>Shop by Category</h2>
        <p>Find your perfect style</p>
        </div>

        <div className="category-grid">
        {categories.map((category) => (
            <CategoryMenuItem
            key={category.name}
            categoryName={category.name}
            isSelected={selectedCategory === category.name}
            onCategoryClick={handleCategoryClick}
            />
        ))}
        </div>
    </section>
    )
}

export default CategoryMenu