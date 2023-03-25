import React from 'react'
import s from './index.module.css'
import { clothes } from '../../data/clothes'
import ClothesItem from '../ClothesItem'

export default function ClothesContainer() {

  

  return (
    <div>
        {
        clothes.map(el => <ClothesItem key={el.id} {...el} />)
        }
    </div>
  )
}
