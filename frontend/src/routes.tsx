import  {Route, Routes}  from 'react-router-dom'
import {Login} from '../src/pages/LOGIN/login'
import {Signin} from '../src/pages/SIGNIN/signin'
import {Search} from '../src/pages/SEARCH/search'

import {Home} from '../src/pages/HOME/home'


export const RoutesGroup = () => {
    return(
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signin" element={<Signin/>}/>
             <Route path="/search" element={<Search/>}/>
        </Routes>
    )
}