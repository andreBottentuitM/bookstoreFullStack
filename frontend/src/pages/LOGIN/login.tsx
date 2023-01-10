import {HeaderLogin} from '../../components/HEADER-LOGIN/headerLogin'
import { ThemeProvider  } from '@mui/material/styles';
import {theme} from '../../components/theme'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import '../LOGIN/style.css'




export const Login = () => {

    return(
        <>
        <HeaderLogin />
        <main>
        <section className="login-box">
            <h2>Login</h2>
            <form  autoComplete="off" action="">
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
          fullWidth
          color='primary'
          
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
          size='small'   
          id="outlined-size-small"
          label="Insira seu password"
          type="password"
          variant="standard"
        />
        </ThemeProvider>
                </div>
                <div className="button-form">
                    <a href="#" id="submit">Entrar</a>
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