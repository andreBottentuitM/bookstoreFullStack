import {useState, useEffect} from 'react'
import useApi from '../../helpers/bookstoreApi' 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Header} from '../../components/HEADER/header'
import {Countdown} from '../../components/COUNTDOWN/countdown'

import {useContext} from 'react'
import {BookstoreContext} from '../../context/context'

import '../HOME/style.css'

export const Home = () => {

    const { addToCart } = useContext(BookstoreContext);

    const api = useApi()

    const [bookList, setBooks] = useState<any>([])
   
    useEffect(()=> {
        const getBooks = async () => {
            const slist = await api.getBooks()
            
        
          setBooks(slist)
        }
        getBooks()
      },[])
    

    return (
        <>
        <Header />
        <main>
            <div className="flex-container-books" id="books">
            {bookList.map((i:any, k:number)=> {
               return (
                <div key={k}>
                {k === 0 && 
                    <section key={k} id="book-promotion">
                    <article>
                        <div className="flex-book-promotion">
                            <img src={i.image} alt="Guerra e paz"/>
                            <div className="flex-content-promotion-book">
                                <p className="promotion">PROMOÇÃO</p>
                                <p className="name">{i.name}</p>
                                <p>Autor: {i.author}</p>
                                <p>Formato: {i.format}</p>
                                <p>DE: <span id="old-price">R$67.99</span></p>
                                <p>POR: <span className="price">R${i.price.toFixed(2)}</span></p>
                                <button className='button' onClick ={() => {
                        addToCart(i)
                       }}>
                                <ShoppingCartIcon className="cart"/>
                                    Carrinho</button>
                            </div>
                        </div>
                    </article>
                  </section>
                }
                {k!== 0 && 
                <section>
                <article>
               <div className="flex-book">
                   <img src={i.image} alt={i.name}/>
                   <div className="flex-content-book">
                       <p>{i.name}</p>
                       <p>Autor: {i.author}</p>
                       <p>Formato: {i.format}</p>
                       <p>POR: <span className='price'>R${i.price.toFixed(2)}</span></p>
                       <button className='button' onClick ={() => {
                        addToCart(i)
                       }}>
                       <ShoppingCartIcon className="cart"/>
                           Carrinho</button>
                   </div>
               </div>
            </article>
            </section>
                }
               </div>
            )
            })}
        </div>
        </main>
        <Countdown />
        </>
    )
}