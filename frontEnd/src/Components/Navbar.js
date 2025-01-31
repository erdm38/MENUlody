import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logout_icon from "../Assets/logout_icon.png";
import Logo from "../Assets/logo.png";
import profile_image from "../Assets/profile_image.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import './Navbar.css';
import { RecipesContext } from '../context/RecipesContext';

const Navbar = ({ setShowLogin }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { token, setToken, user } = useContext(RecipesContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate('/');
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "/about"
    },
    {
      text: "Recipes",
      icon: <CommentRoundedIcon />,
      link: "/recipes"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact"
    },
  ];

  if (token) {
    menuOptions.push({
      text: "Profile",
      icon: <AccountCircleIcon />,
      link: "/profile"
    });
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.text}
          </Link>
        ))}
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="primary-button">Log In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={user?.profile_image || profile_image} alt="Profile" className="pp" />
            <ul className="nav-profile-dropdown">
              <li onClick={logout}>
                <img src={logout_icon} alt="Logout Icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
