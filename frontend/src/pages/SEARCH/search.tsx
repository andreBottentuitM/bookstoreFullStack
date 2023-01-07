import {useState, useEffect} from 'react'
import useApi from '../../helpers/bookstoreApi' 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Header} from '../../components/HEADER/header'
import {useLocation, useNavigate} from 'react-router-dom'

export const Search = () => {

const api = useApi()
const navigate = useNavigate()

const useQueryString = () => {
  return new URLSearchParams(useLocation().search)
}

const query = useQueryString()

const [q,setQ] = useState<string | null>( query.get('q') != null ? query.get('q') : '' )
const [loading, setLoading] = useState(false)
const [searchList, setSearchList] = useState<any>([])



const getAdsList = async () => {
    setLoading(true)
    if(q !== ''){
       const json = await api.getSearch({value:q} as any)
       setSearchList(json.searchName)
       setLoading(false)
    }else{
        navigate('/')
    }
   
  }

useEffect(()=> {
   
     getAdsList()
  }, [])

    return(
        <>
        <Header />
        <main>
        {loading && <div>CARREGANDO...</div>}
        {!loading && searchList.length === 0 && <div>Nada encontrado.</div>}
        <div className="flex-container-books" id="books">
        {searchList.map((i:any,k:any) => {
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