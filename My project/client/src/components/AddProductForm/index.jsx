import React from 'react'
import { addProduct } from '../../async_action/add_product_req';
import { useDispatch } from 'react-redux';

export default function AddProductForm() {

    
  const dispatch = useDispatch();

  const submit = e => {
      e.preventDefault();
      const { title, price, image } = e.target;
      const new_product = {
        title: title.value,
        price: price.value,
        description: 'lorem ipsum set',
        image: image.value,
        category: 'electronic'
      }
      dispatch(addProduct(new_product));
      e.target.reset()
    }


  return (
    <div>
        <form onSubmit={submit}>
            <input type='text' placeholder='Title' name='title' />
            <input type='text' placeholder='Price' name='price' />
            <input type='text' placeholder='Image URL' name='image' />
        <button>Add product</button>
    </form>
    </div>
  )
}
