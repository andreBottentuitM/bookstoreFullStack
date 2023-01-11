import {createContext, useEffect, useState} from 'react'


export const BookstoreContext = createContext<any>(undefined)

const BookstoreContextProvider = (props:any) => {

    const [totalCart, setCart] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as any) : [])
    const [totalValueCart, setTotalValue] = useState(0)

    
    useEffect(()=>{
      let valueTotalBooks = 0
    totalCart.forEach((book:any, indice:number)=> {
      valueTotalBooks += book.quantityAtCart * book.price
        })
        setTotalValue(valueTotalBooks)
    }, [totalCart])
    console.log(totalValueCart)

      

    const addToCart = (item:any) =>{  
       let totalCartClone = totalCart
        
       const findingItem = totalCartClone.find((x:any) => x._id === item._id)
       
       if(!findingItem || undefined){
        let cloneBook = item
        cloneBook.quantityAtCart = 1
          totalCartClone.push(cloneBook)
          localStorage.setItem('cartItems', JSON.stringify(totalCartClone))
          setCart(JSON.parse(localStorage.getItem('cartItems') as any))
       }
    }

    const deleteItem = (item:any) => {

       let totalCartClone = totalCart
       let totalCartCloneResult = totalCartClone.filter((book:any) => {
          return book._id !== item._id
        })
        localStorage.setItem('cartItems', JSON.stringify(totalCartCloneResult))
        setCart(JSON.parse(localStorage.getItem('cartItems') as any))
      }
      
    
    const value = {totalCart, setCart, addToCart, deleteItem, totalValueCart}
    return(
        <BookstoreContext.Provider value={value}>
            {props.children}
        </BookstoreContext.Provider>
    )

}

export default BookstoreContextProvider;


