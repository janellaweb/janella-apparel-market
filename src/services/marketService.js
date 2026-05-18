function loadCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Shoes' },
        { name: 'Hoodies' },
        { name: 'Shirts' },
        { name: 'Bags' },
        { name: 'Socks' }
      ])
    }, 2000)
  })
}

export { loadCategories }