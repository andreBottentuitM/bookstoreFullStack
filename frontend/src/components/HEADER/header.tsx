import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Drawer from "@mui/material/Drawer";
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "../HEADER/style.css";
import "@fontsource/raleway";

const pages = [
  "Literatura Russa",
  "Literatura Brasileira",
  "Literatura Americana",
  "Literatura Francesa",
];

export const Header = (props: any) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      fontSize:'16px',
      transition: theme.transitions.create("width"),
      width: "70vw",
      [theme.breakpoints.up("md")]: {
        width: "19ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState(false);

  const toggleDrawer =
  ( open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open)
    }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerLeft = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#fdd900",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "5px 2px 5px rgb(186, 184, 184)",
        }}
      >
        <a href="/">
          <img
            src={'/images/logo.png'}
            width={55}
            alt="Decow's Bookstore"
            title="Decow's Bookstore"
          />
        </a>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {pages.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center", fontFamily: "Raleway", fontSize:"18px" }}>
            <Link style={{textDecoration: 'none', color:'black'}} to={`/livros/${item.replace(' ', '-').toLowerCase()}`}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

 const list = 
 <Box role="presentation" sx={{width:'300px',backgroundColor: "#fdd900",boxShadow: "5px 2px 5px rgb(186, 184, 184)"}} onClick={toggleDrawer( false)} onKeyDown={toggleDrawer( false)}>
  <Box sx={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
  <ImportContactsOutlinedIcon sx={{fontSize:"40px"}}/>
  <h1 className="title">Seus Livros</h1>
  <ArrowForwardOutlinedIcon sx={{fontSize:"40px"}}/>
  </Box>
 </Box>
 

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fdd900", fontFamily: "Raleway", paddingBottom:'0rem'}}
    >
      <Container disableGutters={true} maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ marginLeft: "30px" }}>
                <a href="/">
                  <img
                    src='/images/logo.png'
                    width={80}
                    alt="Decow's Bookstore"
                    title="Decow's Bookstore"
                  />
                </a>
              </Box>
              <Box
                sx={{
                  marginRight: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Search>
                  <form method="GET" action="/search">
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "black", fontSize:'22px' }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    name="q"
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  </form>
                </Search>
                <Box
                  sx={{
                    backgroundColor: "black",
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    position: "relative",
                    bottom: "19px",
                    left: "60px",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    0
                  </Box>
                </Box>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer( true)}
                color="default"
              >
                <ShoppingCartIcon
                  className="cartIcon"
                  sx={{ color: "black", fontSize: "30px" }}
                />
                </IconButton>
                <Link to={'/login'}>
                <PersonIcon
                  className="personIcon"
                  sx={{ color: "black", fontSize: "30px" }}
                />
                </Link>
              </Box>
            </Box>
            <nav
              style={{
                backgroundColor: "#f1edaf",
                width: "100%"
              }}
            >
              <List
                className="flex-literatura"
                sx={{
                  display: "flex",
                  listStyle: "none",
                  color: "#4c4b4b",
                  fontSize: "20px",
                }}
              >
                {pages.map((item, index) => (

                  <ListItem
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginLeft: "-10px",
                      fontSize:'1.8rem'
                    }}
                    key={index}
                    disablePadding
                  >
                    <Link to={`/livros/${item.replace(' ', '-').toLowerCase()}`}>{item}</Link>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              alignItems: "center",
              flexDirection:'column'
            }}
          >
            <Box sx={{display:'flex', alignItems:"center",  width:'100%'}}>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="default"
              >
                <MenuIcon sx={{fontSize:'20px'}}/>
              </IconButton>
              <Box component="nav">
                <Drawer
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: "250px",
                      backgroundColor: "rgb(250, 243, 243)",
                    },
                  }}
                >
                  {drawerLeft}
                </Drawer>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent:'center',
                width:'100%',
                position:'relative',
                left:'35px'  
              }}
            >
              <img src={'/images/logo.png'} width={80} alt="" />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                marginRight: "10px",
                alignItems:'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: "black",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  position: "relative",
                  bottom: "15px",
                  left: "47px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  0
                </Box>
              </Box>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer( true)}
                color="default"
              >
              <ShoppingCartIcon
                className="cartIcon"
                sx={{ color: "black", fontSize: "30px" }}
              />
              </IconButton>
              <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer( false)}
          >
            {list}
          </Drawer>
          <Link to={'/login'}>
              <PersonIcon
                className="personIcon"
                sx={{ color: "black", fontSize: "30px" }}
              />
              </Link>
            </Box>
            </Box>
            <Box
              sx={{
                display: { sm: "flex", md: "none" },
                margin: "0 auto",
                padding: "10px 0",
              }}
            >
              <Search>
              <form method="GET" action="/search">
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "black" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  name="q"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
                </form>
              </Search>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
            }
