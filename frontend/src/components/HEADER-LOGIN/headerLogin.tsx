import {Link} from 'react-router-dom'
import '../HEADER-LOGIN/style.css'

export const HeaderLogin = () => {

    return(
        <header>
       <Link to={'/'}><img src="/images/logo.png" alt="Decow's Bookstore"/></Link>
         <Link to={'/'} className="back">Voltar</Link>
     </header>
    )
}