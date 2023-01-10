import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "../HEADER/style.css";
import "@fontsource/raleway";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {theme} from '../theme'

import {useContext} from 'react'
import {BookstoreContext} from '../../context/context'

const pages = [
  "Literatura Russa",
  "Literatura Brasileira",
  "Literatura Americana",
  "Literatura Francesa",
];

export const Header = (props: any) => {

  const { totalCart, deleteItem } = useContext(BookstoreContext);
 
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
      fontSize: "16px",
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
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

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
            src={"/images/logo.png"}
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
            <ListItemButton
              sx={{
                textAlign: "center",
                fontFamily: "Raleway",
                fontSize: "18px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/livros/${item.replace(" ", "-").toLowerCase()}`}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const list = (
    <Box
      role="presentation"
      sx={{
        width:{xs:'100vw', sm:'300px'} ,
        boxShadow: "5px 2px 5px rgb(186, 184, 184)",
      }}
      
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fdd900",
        }}
      >
        <ImportContactsOutlinedIcon sx={{ fontSize: "40px" }} />
        <h1 className="title">Seus Livros</h1>
        <IconButton onClick={toggleDrawer(false)} sx={{color:'black'}}>
        <ArrowForwardOutlinedIcon  sx={{ fontSize: "40px" }} />
        </IconButton>
      </Box>
      <Box className="container-all-sections">
      {totalCart.map((item:any, k:number)=> {
        let quantity = []

        for(let i = 1; i <= item.quantity; i++){
          quantity.push(i)
        }

         return(
          <section className="style-books-cart">
            <img src={item.image} alt={item.name}/>
  <div className="flex-center-content-books-cart">
  <span className="name">{item.name}</span>
  <span className="priceCart">R$ {item.price.toFixed(2)}</span>
  <label className="flex-center-trash">Quantidade: 
  <ThemeProvider theme={theme}>
  <FormControl sx={{ m: 1, minWidth: 45}} size="small">
  <Select color='primary'
          sx={{fontSize:'14px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          //onChange={handleChange}
        >
          
    {quantity.map((number)=> {
      return (
        <MenuItem sx={{fontSize:'16px'}} value={number}>{number}</MenuItem>
      )
    })}
  </Select>
  </FormControl>
  </ThemeProvider>
  <IconButton onClick={() => deleteItem(item)} sx={{color:'black', left:'10px', top:'5px', position:'relative'}}><DeleteForeverIcon sx={{fontSize:"25px"}}/></IconButton> </label>
</div>
</section>

         )
      })}
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fdd900",
        fontFamily: "Raleway",
        paddingBottom: "0rem",
      }}
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
              <Box sx={{ marginLeft:'30px'}}>
                <a href="/">
                  <img
                    src="/images/logo.png"
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
                  alignItems: "end",
                  gap: "5px",
                }}
              >
                <Search>
                  <form method="GET" action="/search">
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: "black", fontSize: "22px" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      name="q"
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </form>
                </Search>
                <ThemeProvider theme={theme}>
                  <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                    <Badge
                      badgeContent={totalCart.length}
                      color="secondary"
                      showZero
                      sx={{
                        "& .MuiBadge-badge": {
                          fontSize: 12,
                          height: 20,
                          minWidth: 20,
                        },
                      }}
                    >
                      <ShoppingCartIcon
                        color="secondary"
                        sx={{
                          fontSize: "27px",
                          position: "relative",
                          top: "3px",
                        }}
                      />
                    </Badge>
                  </IconButton>
                </ThemeProvider>
                <Link to={"/login"}>
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
                width: "100%",
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
                      fontSize: "1.8rem",
                    }}
                    key={index}
                    disablePadding
                  >
                    <Link
                      to={`/livros/${item.replace(" ", "-").toLowerCase()}`}
                    >
                      {item}
                    </Link>
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
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="default"
                >
                  <MenuIcon sx={{ fontSize: "20px" }} />
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
                  justifyContent: "center",
                  width: "100%",
                  position: "relative",
                  left: {sm:"35px", xs:'0px'}
                }}
              >
                <img src={"/images/logo.png"} width={80} alt="" />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  
                  alignItems: "end",
                }}
              >
                <ThemeProvider theme={theme}>
                  <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                    <Badge
                      badgeContent={totalCart.length}
                      color="secondary"
                      showZero
                      sx={{
                        "& .MuiBadge-badge": {
                          fontSize: 12,
                          height: 20,
                          minWidth: 20,
                        },
                      }}
                    >
                      <ShoppingCartIcon
                        sx={{
                          fontSize: "27px",
                          position: "relative",
                          top: "3px",
                        }}
                        color="secondary"
                      />
                    </Badge>
                  </IconButton>
                </ThemeProvider>
                <Drawer
                  anchor={"right"}
                  open={state}
                 // onClose={toggleDrawer(false)}
                >
                  {list}
                </Drawer>
                <Link to={"/login"}>
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
};
