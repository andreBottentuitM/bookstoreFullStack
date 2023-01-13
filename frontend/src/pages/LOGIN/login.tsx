import {HeaderLogin} from '../../components/HEADER-LOGIN/headerLogin'
import {useState} from 'react'
import useApi from '../../helpers/bookstoreApi' 
import { ThemeProvider  } from '@mui/material/styles';
import {theme} from '../../components/theme'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import '../LOGIN/style.css'



export const Login = () => {

    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setDisabled(true)
        setError('')
 
       const json = await api.login(email,password)

      /* 
       if(json.error) {
         setError(json.error)
       } else {
        
         doLogin(json.token, rememberPassword)
         window.location.href = '/'
       }
 */
       setDisabled(false)
     }


    return(
        <>
        <HeaderLogin />
        <main>
        <section className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off" >
                <div className="user-box">
                    <EmailIcon className="icon-login" sx={{fontSize:"25px"}}/>
                    <ThemeProvider theme={theme}>
                    <TextField
          sx={{width:{sm:'100%',xs:"70vw"}}}  
          className="textfield"
          InputLabelProps={{className:'textfield__label'}}
          InputProps={{className:'textfield__input'}}
          size='small'   
          id="outlined-size-small"
          label="Insira seu email"
          type="email"
          variant="standard"
          disabled={disabled}
          fullWidth
          color='primary'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          
        />
        </ThemeProvider>
                    
                </div>
                    <div className="user-box">
                    <LockIcon className="icon-password" sx={{fontSize:"25px"}}/>
                    <ThemeProvider theme={theme}>
                    <TextField      
                    sx={{width:{sm:'100%',xs:"70vw"}}}  
          className="textfield"
          InputLabelProps={{className:'textfield__label'}}
          InputProps={{className:'textfield__input'}}
          fullWidth         
          disabled={disabled}
          size='small'   
          id="outlined-size-small"
          label="Insira seu password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        </ThemeProvider>
                </div>
                <div className="button-form">
                    <button id="submit" disabled={disabled}>Entrar</button>
                    <div id="register">Não possui login?
                        <Link to={'/signin'}>Cadastra-se</Link>
                    </div>
                </div>
            </form>
        </section>
    </main>
        </>
    )
}