import {Header} from '../../components/HEADER/header'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import useApi from '../../helpers/bookstoreApi' 
import {useState,useEffect} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export const Livros = () => {

   
    let lectureType = useParams()
    const api = useApi()
    const [lecture, setLecture] = useState<any>( lectureType.id !== null ? lectureType.id : '')
    const [bookList, setBookList] = useState<any>([])
   
    const getLectures = async () => {
        const json = await api.getLecture({value:lecture} as any)
        setBookList(json.lectureTypeDB)
    }
    

    useEffect(()=> {
        getLectures()
     }, [lecture])

     useEffect(() => {
        setLecture(lectureType.id)
     }, [lectureType])

   
    return (
       <>
        <Header />
        <main>
        <div className="flex-container-books" id="books">
        {bookList.map((i:any,k:any) => {
            return(
                <section key={k}>
                <article>
               <div className="flex-book">
                   <img src={i.image} alt={i.name}/>
                   <div className="flex-content-book">
                       <p>{i.name}</p>
                       <p>Autor: {i.author}</p>
                       <p>Formato: {i.format}</p>
                       <p>POR: <span className='price'>R${i.price.toFixed(2)}</span></p>
                       <button className='button'>
                       <ShoppingCartIcon className="cart"/>
                           Carrinho</button>
                   </div>
               </div>
            </article>
            </section>
            )
            
        })}
        </div>
        </main>
        </>
    )
}