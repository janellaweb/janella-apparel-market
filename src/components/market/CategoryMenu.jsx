import { useState } from 'react'
import CategoryMenuItem from './CategoryMenuItem'

function CategoryMenu({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleCategoryClick(categoryName) {
    setSelectedCategory(categoryName)
    onCategorySelect(categoryName)
  }

  return (
    <section>
      <h3>Shop by Category</h3>

      {categories.map((category) => (
        <CategoryMenuItem
          key={category.name}
          categoryName={category.name}
          isSelected={selectedCategory === category.name}
          onCategoryClick={handleCategoryClick}
        />
      ))}
    </section>
  )
}

export default CategoryMenu