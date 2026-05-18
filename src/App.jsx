import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import ProductsPage from './components/market/ProductsPage'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ProductsPage showCategories={false} />} />
        <Route path="/products" element={<ProductsPage showCategories={true} />} />
      </Routes>
    </>
  )
}

export default App