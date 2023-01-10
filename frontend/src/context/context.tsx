import {createContext, useReducer, useState} from 'react'


export const BookstoreContext = createContext<any>(undefined)

const BookstoreContextProvider = (props:any) => {

    const [totalCart, setCart] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as any) : [])

    const addToCart = (item:any) =>{  
       let totalCartClone = totalCart
        
       const findingItem = totalCartClone.find((x:any) => x._id === item._id)
       
       if(!findingItem || undefined){
          totalCartClone.push(item)
          localStorage.setItem('cartItems', JSON.stringify(totalCartClone))
          setCart(JSON.parse(localStorage.getItem('cartItems') as any))
       }
    }

    const deleteItem = (item:any) => {

       let totalCartClone = totalCart
       let totalCartCloneResult = totalCartClone.filter((book:any) => {
          return book._id !== item._id
        })
        console.log(totalCartCloneResult)
        localStorage.setItem('cartItems', JSON.stringify(totalCartCloneResult))
        setCart(JSON.parse(localStorage.getItem('cartItems') as any))
      }
      
    
    const value = {totalCart, setCart, addToCart, deleteItem}
    return(
        <BookstoreContext.Provider value={value}>
            {props.children}
        </BookstoreContext.Provider>
    )

}

export default BookstoreContextProvider;


