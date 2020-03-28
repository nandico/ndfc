import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RestaurantThumb from "../RestaurantThumb"
import LocationFilter from "../LocationFilter"

import styles from "./styles.module.scss"

const RestaurantList = ({ restaurants = [], city, state, locations }) => (
  <div className={styles.container}>
    <div className={styles.citys}>
      <LocationFilter locations={locations} city={city} state={state} />
      <a href="#">
        {city}, {state}
      </a>
      <p className={styles.subtitle}>
        {restaurants.length} lugares que não vamos deixar fechar
      </p>
    </div>

    <div className={styles.list}>
      {restaurants.map(restaurant => {
        const { id, data } = restaurant.node

        return <RestaurantThumb key={id} data={data} />
      })}
    </div>
  </div>
)

export default RestaurantList
