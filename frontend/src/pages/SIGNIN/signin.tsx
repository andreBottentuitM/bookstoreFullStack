import { HeaderLogin } from "../../components/HEADER-LOGIN/headerLogin";
import { useState, useEffect } from "react";
import "../SIGNIN/style.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../components/theme";
import { Masks } from "../../helpers/masks";
import {Loading} from '../../components/LOADING/loading'
import {Errors} from '../../helpers/validation'

export const Signin = () => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState("");
  const [numberResidence, setNumberResidence] = useState('')
  const [complement, setComplement] = useState('')
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("")
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [disabled, setDisabled] = useState(true)

  const [loading, setLoading] = useState(false)

  const [resultCep, setResultCep] = useState('')

  const [textName, setTextName] = useState('')
  const [textCpf, setTextCpf] = useState('')
  const [textDate, setTextDate] = useState('')
  const [textPhone, setTextPhone] = useState('')
  const [textEmail, setTextEmail] = useState('')
  const [textPassword, setTextPassword] = useState('')
  const [textConfirmPassword, setTextConfirmPassword] = useState('')
  

    const getCep  = (cepTyped:string)  =>  {
      let cepClone = Masks.cep(cepTyped)
      setCep(cepClone)
      
      if (cepClone.length === 9){
        
          setLoading(true)
        
        setTimeout( async () => {
        const apiUrl = `https://viacep.com.br/ws/${cepClone}/json/`;
        
        const response = await fetch(apiUrl);
        
        const data = await response.json();
        
       if(data.erro){

        setResultCep('CEP Incorreto.')

        setTimeout(()=> {
          setResultCep('')
        },1500)

        setCep('')
        setStreet('')
        setCity('')
        setNeighbourhood('')
        setState('')

        setDisabled(true)
        
       }else{
        setStreet(data.logradouro)
        setCity(data.localidade)
        setNeighbourhood(data.bairro)
        setState(data.uf)

        setDisabled(false)
        
      }
      setLoading(false)
      
      },2000)
      }
      
    }
  
  

  return (
    <>
      <HeaderLogin />
      <main>
        <section className="container-registration">
          <h1>Criar Conta</h1>
          <form action="">
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    error={textName ? true : false}
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    onChange={(e) => {
                       setName(e.target.value)
                    }}
                    onBlur={(e)=> {
                      let gettingValidation = Errors.validationName(e.target.value)
                      setTextName(gettingValidation)
                    }}
                    value={name}
                    placeholder="Nome Completo"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textName}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    error={textCpf ? true : false}
                    onChange={(e) => {
                      setCpf(Masks.cpf(e.target.value));
                    }}
                    onBlur={(e)=> {
                      let gettingValidation = Errors.validationCpf(e.target.value)
                      setTextCpf(gettingValidation)
                    }}
                    sx={{ width: "100%" }}
                    value={cpf}
                    id="standard-basic"
                    placeholder="CPF*"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textCpf}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    error={textDate ? true : false}
                    onChange={(e) => {
                      setDate(e.target.value)
                   }}
                    onBlur={(e)=> {
                      let gettingValidation = Errors.validationDate(e.target.value)
                      setTextDate(gettingValidation)
                    }}
                    type="date"
                    sx={{ width: "100%" }}
                    value={date}
                    id="standard-basic"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textDate}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                      error={textPhone ? true : false}
                      onChange={(e) => {
                      setPhone(Masks.phone(e.target.value));
                    }}
                      onBlur={(e)=> {
                      let gettingValidation = Errors.validationPhone(e.target.value)
                      setTextPhone(gettingValidation)
                    }}
                    sx={{ width: "100%" }}
                    value={phone}
                    id="standard-basic"
                    placeholder="Telefone Celular"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textPhone}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={10}>
                <ThemeProvider theme={theme}>
                  <TextField
                  error={textEmail? true : false}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                    onBlur={(e)=> {
                    let gettingValidation = Errors.validationEmail(e.target.value)
                    setTextEmail(gettingValidation)
                  }}
                    value={email}
                    type="email"
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="Email"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textEmail}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    error={textPassword ? true : false}
                    type='password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={(e)=> {
                      let gettingValidation = Errors.validationPassword(e.target.value)
                      setTextPassword(gettingValidation)
                    }}
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="Senha"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textPassword}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    error={textConfirmPassword ? true : false}
                    sx={{ width: "100%" }}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    onBlur={(e)=> {
                      let gettingValidation = Errors.validationConfirm(e.target.value, password)
                      setTextConfirmPassword(gettingValidation)
                    }}
                    value={confirmPassword}
                    type='password'
                    id="standard-basic"
                    placeholder="Confirmar Senha"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    FormHelperTextProps={{className:'helper_text'}}
                    helperText={textConfirmPassword}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={10}>
                <ThemeProvider theme={theme}>
                  <TextField
                    onChange={(e) => {
                      getCep(e.target.value)
                    }}
                    sx={{ width: "100%" }}
                    value={cep}
                    id="standard-basic"
                    placeholder="CEP"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                  />
                </ThemeProvider>
                {loading && <Loading/>}
                <div style={{color:'red', font:'bolder',margin:'2px 0 0'}}>{resultCep}</div>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="Rua"
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                    value={street}
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    value={numberResidence}
                    onChange={(e) => {
                      setNumberResidence(e.target.value);
                    }}
                    placeholder="Número da Residência"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    value={complement}
                    onChange={(e) => {
                      setComplement(e.target.value);
                    }}
                    placeholder="Complemento"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    value={neighbourhood}
                    onChange={(e) => {
                      setNeighbourhood(e.target.value);
                    }}
                    placeholder="Bairro"
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="Cidade"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
              <Grid item xs={10} sm={5}>
                <ThemeProvider theme={theme}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    placeholder="Estado"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    variant="standard"
                    InputProps={{ className: "textfield_input" }}
                    disabled={disabled}
                  />
                </ThemeProvider>
              </Grid>
            </Grid>
            <button type="submit" className="submit">
              CADASTRAR
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
