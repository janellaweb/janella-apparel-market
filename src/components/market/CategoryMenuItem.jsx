import './CategoryMenuItem.css'

function CategoryMenuItem({
  categoryName,
  isSelected,
  onCategoryClick
}) {
  return (
    <button
      onClick={() => onCategoryClick(categoryName)}
      style={{
        backgroundColor: isSelected ? 'black' : 'white',
        color: isSelected ? 'white' : 'black',
        margin: '5px',
        padding: '10px',
        border: '1px solid black',
        cursor: 'pointer'
      }}
    >
      {categoryName}
    </button>
  )
}

export default CategoryMenuItem