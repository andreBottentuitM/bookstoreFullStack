import {HeaderLogin} from '../../components/HEADER-LOGIN/headerLogin'
import '../SIGNIN/style.css'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ThemeProvider  } from '@mui/material/styles';
import {theme} from '../LOGIN/login'

export const Signin = () => {
 return (
    <>
    <HeaderLogin />
    <section className="container-registration">
            <h1>Criar Conta</h1>
            <form action="">
            <Grid container spacing={2} sx={{display:'flex', justifyContent:"center"}}>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}} id="standard-basic" placeholder="Nome Completo" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}} id="standard-basic" placeholder="CPF*" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField type="date" sx={{width:'100%'}} id="standard-basic"  variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField  sx={{width:'100%'}} id="standard-basic" placeholder="Telefone Celular" variant="standard"InputProps={{className:'textfield_input'}} />
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={10}>
        <ThemeProvider theme={theme}>
        <TextField type='email' sx={{width:'100%'}}  id="standard-basic" placeholder="Email" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Senha" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Confirmar Senha" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={10}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="CEP" variant="standard" InputProps={{className:'textfield_input'}}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Rua" variant="standard" InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Número da Residência" variant="standard" InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Complemento" variant="standard" InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Bairro" variant="standard"
          InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Cidade" variant="standard" InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
        <Grid item xs={10} sm={5}>
        <ThemeProvider theme={theme}>
        <TextField sx={{width:'100%'}}  id="standard-basic" placeholder="Estado" variant="standard" InputProps={{className:'textfield_input'}} disabled={true}/>
        </ThemeProvider>
        </Grid>
      </Grid>
      <button type="submit" className="submit">
                    CADASTRAR
                </button>
                </form>
            </section>
    </>
 )
}