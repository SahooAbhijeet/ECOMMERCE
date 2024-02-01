import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Slider from './Slider'
import Buttons from './Buttons'
import FilteredProducts from './FilteredProducts'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/filteredProducts/:type",
          element: <FilteredProducts />
      },
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
        <Navbar />
        <Slider />
        <Buttons />
    </div>
  )
}

export default Body