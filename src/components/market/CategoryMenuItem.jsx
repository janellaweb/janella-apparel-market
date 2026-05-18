import shoesImage from '../../assets/shoes.webp'
import hoodieImage from '../../assets/hoodie.webp'
import shirtImage from '../../assets/shirt.webp'
import bagImage from '../../assets/bag.webp'
import socksImage from '../../assets/socks.webp'

import './CategoryMenuItem.css'

function CategoryMenuItem({
  categoryName,
  categoryDescription,
  isSelected,
  onCategoryClick
}) {
  const isWideCard =
    categoryName === 'Bags' ||
    categoryName === 'Socks'

  let categoryImage = ''

  if (categoryName === 'Shoes') {
    categoryImage = shoesImage
  } else if (categoryName === 'Hoodies') {
    categoryImage = hoodieImage
  } else if (categoryName === 'Shirts') {
    categoryImage = shirtImage
  } else if (categoryName === 'Bags') {
    categoryImage = bagImage
  } else if (categoryName === 'Socks') {
    categoryImage = socksImage
  }

  return (
    <button
      className={`category-card ${
        isSelected ? 'selected' : ''
      } ${isWideCard ? 'wide' : 'small'}`}
      onClick={() => onCategoryClick(categoryName)}
    >
      <div>
        <h3>{categoryName}</h3>

        {isSelected && (
          <p>{categoryDescription}</p>
        )}
      </div>

      <div className="category-image-container">
        <img
          src={categoryImage}
          alt={categoryName}
          className="category-image"
        />
      </div>
    </button>
  )
}

export default CategoryMenuItem