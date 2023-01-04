import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../FOOTER/style.css'

export const Footer = () => {
return(
    <footer>
    <div className="header-footer">
    <img className="logo-footer" src="./IMAGES/logo.png" alt="Decow's Bookstore logotipo" title="Decow's Bookstore"/>
    <ul className="list-footer">
            <li><a rel="noreferrer" title="Github" href="https://github.com/andreBottentuitM" target="_blank"><GitHubIcon sx={{fontSize: {xs:'30px', md:'45px'}}}/></a></li>
            <li><a rel="noreferrer"href="https://www.linkedin.com/in/andr%C3%A9-bottentuit-de-macedo/" target="_blank"><LinkedInIcon sx={{fontSize: {xs:'30px', md:'45px'}}}/></a></li>
            <li><a rel="noreferrer" href="https://www.instagram.com/andrebottentuit/" target="_blank"><InstagramIcon sx={{fontSize: {xs:'30px', md:'45px'}}}/></a></li>
        </ul> 
</div>
<div className="footer-information">
    <div>CONTATO: 
    <p>andre.bottentuit@gmail.com</p>
</div>
    <div>ENDEREÇO:
    <p>Recife - PE, BRASIL</p>
</div>
<div>Produced by André Bottentuit</div>
</div>
</footer>
)
   
}