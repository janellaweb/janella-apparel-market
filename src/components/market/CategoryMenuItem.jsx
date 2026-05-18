import './CategoryMenuItem.css'

function CategoryMenuItem({
  categoryName,
  isSelected,
  onCategoryClick
}) {
  const isWideCard = categoryName === 'Bags' || categoryName === 'Socks'

  return (
    <button
      className={`category-card ${isSelected ? 'selected' : ''} ${
        isWideCard ? 'wide' : 'small'
      }`}
      onClick={() => onCategoryClick(categoryName)}
    >
      <div>
        <h3>{categoryName}</h3>
        <p>Explore {categoryName.toLowerCase()} collection</p>
      </div>

      <div className="category-image-placeholder">
        Image will go here
      </div>
    </button>
  )
}

export default CategoryMenuItem