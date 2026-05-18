import shoesImage from '../../assets/shoes.webp'
import hoodieImage from '../../assets/hoodie.webp'
import shirtImage from '../../assets/shirt.webp'
import bagImage from '../../assets/bag.webp'
import socksImage from '../../assets/socks.webp'

import './CategoryMenuItem.css'

function CategoryMenuItem({
  category,
  isSelected,
  onCategoryClick
}) {
  const isWideCard =
    category.name === 'Bags' ||
    category.name === 'Socks'

  let categoryImage = ''

  if (category.name === 'Shoes') {
    categoryImage = shoesImage
  } else if (category.name === 'Hoodies') {
    categoryImage = hoodieImage
  } else if (category.name === 'Shirts') {
    categoryImage = shirtImage
  } else if (category.name === 'Bags') {
    categoryImage = bagImage
  } else if (category.name === 'Socks') {
    categoryImage = socksImage
  }

  return (
    <button
      className={`category-card ${
        isSelected ? 'selected' : ''
      } ${isWideCard ? 'wide' : 'small'}`}
      onClick={() => onCategoryClick(category.name)}
    >
      <div>
        <h3>{category.name}</h3>

        {isSelected && (
          <p>{category.description}</p>
        )}
      </div>

      <div className="category-image-container">
        <img
          src={categoryImage}
          alt={category.name}
          className="category-image"
        />
      </div>
    </button>
  )
}

export default CategoryMenuItem