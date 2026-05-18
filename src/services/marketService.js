function loadCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Shoes',
          description: 'Step into everyday comfort with stylish shoes made for school, errands, and casual outfits.'
        },
        {
          name: 'Hoodies',
          description: 'Cozy hoodies for relaxed days, layering, and simple streetwear looks.'
        },
        {
          name: 'Shirts',
          description: 'Easy-to-style shirts that work well for casual, clean, and comfortable outfits.'
        },
        {
          name: 'Bags',
          description: 'Functional bags for carrying daily essentials while keeping your outfit polished.'
        },
        {
          name: 'Socks',
          description: 'Soft socks that add comfort, color, and personality to your everyday style.'
        }
      ])
    }, 2000)
  })
}

export { loadCategories }