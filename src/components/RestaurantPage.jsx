import React from 'react'
import RestaurantDetails from './RestaurantContent/RestaurantDetails'
import RestaurantAbout from './RestaurantContent/RestaurantAbout'
import Gallery from './RestaurantContent/Gallery'
import Findus from './RestaurantContent/Findus'
import Newsletter from './RestaurantContent/Newsletter'

const RestaurantPage = () => {
  return (
    <div>
        <RestaurantDetails />
        <RestaurantAbout />
        <Gallery />
        <Findus />
        <Newsletter />
    </div>
  )
}

export default RestaurantPage