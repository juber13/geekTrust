import React from 'react'

const product = (props) => {
 const {id , imageURL , name , price} = props.items;
  return (
    <div className='product'>
            <div className='product-info'>
                <img src={imageURL} alt="" style={{width: "100px"}}/>
                <p>{name}</p>
                <h5>{price}</h5>
                <button className='add-to-cart'>Add To Cart</button>
            </div>
      </div>
  )
}

export default product