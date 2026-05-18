function CategoryMenu({ categories }) {
  return (
    <section>
      <h3>Shop by Category</h3>

      {categories.map((category) => (
        <p key={category.name}>{category.name}</p>
      ))}
    </section>
  )
}

export default CategoryMenu