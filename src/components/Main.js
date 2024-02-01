import React from 'react'
import Navbar from './Navbar'
import NavigateButtons from './Buttons'
import Slider from './Slider'
import ProductCard from './ProductCard'
import Footer from './Footer'
import ProductSection from './ProductSection'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Slider />
        <NavigateButtons />
        <ProductSection />
        <ProductCard />
        <Footer />
    </div>
  )
}

export default Main