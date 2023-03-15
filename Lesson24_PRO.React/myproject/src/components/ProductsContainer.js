import React from "react"
import { product } from "../data/product"
import Products from "./Products"

export default function ProductContainer() {


    return (
      <div>
        {
          product.map(el => <Products {...el} key={el.id} />)
        }
      </div>
    )
  }
  