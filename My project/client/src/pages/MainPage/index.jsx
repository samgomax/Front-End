import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css';
import { Link } from 'react-router-dom';


export default function MainPage() {


  return (
    <div className={s.main}>
      <div className={s.main_img} >

      <div>
        <span className={s.text1}>Sale</span> 
            <br />  
        <span className={s.text2}>New season</span>

        <div className={s.sale_btn} >Sale</div>
      </div>
     
      <img src={require('./image 1.png')} alt="main_color"  className={s.main_image1} />
      <img src={require('./image 2.png')} alt="main_color"  className={s.main_image2}/>
      </div>

      <h2>Catalog</h2>
      <Link>
        <div className={s.all_categories_btn}>All categories</div>
      </Link>

      <CategoriesContainer />
      <div className={s.green_square}>
        <span>5 % off
          <br /> on the first order</span>
      <img src={require('./image 4.png')} alt="main_color"  className={s.main_image4} />
      </div>

      <form className={s.form}>
        <input type="tel" pattern="+[0-9]{10}" placeholder="+(___)___-__-__" required />
        <button type="submit">Get discount</button>
      </form>

      <div className={s.contacts_img} >
      <img src={require('./Group 3357.png')} alt="main_color"  />
      </div>
    </div>
  )
}
