import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, SetItems] = useState([""])
    const [name, SetName] = useState('')
    const [quantity, SetQuantity] = useState('')

const handleSubmit = e => {
    e.preventDefault();

    if(!name || !quantity) return;
    
        const newItem = {

            name, quantity: parseInt(quantity),
        }

         SetItems((prevItems) => [...prevItems, newItem])
         SetName("")
         SetQuantity("")

}

  return (
    <div>
        <h1>Shopping List</h1>

        <form onSubmit={handleSubmit}>
            <input name ="name" type="text" placeholder="Item Name" value={name} onChange={e=> SetName(e.target.value)}/>
            <input name ="qty" type="number" placeholder="Quantity" value={quantity} onChange={e=> SetQuantity(e.target.value)}/>

            <button type="submit">Add Item</button>
        
        </form>


        <ul>
            {items.map((i,index) => (
                <li key={index}>{i.name} - Quantity:  {i.quantity}</li>
            ))}
        </ul>
        

    </div>
  )
}

export default ShoppingList