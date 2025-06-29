import React from 'react'

const ShoppingList = ({items}) => {
  if (items.length ===0) {

    return <p>Список покупок пустой</p>
  }





  return (
		<ul>
      {items.map((products)=>(
        <li key={products.id}>{products.product} - {products.title}</li>
      ))}
			
		</ul>
	)
}

export default ShoppingList