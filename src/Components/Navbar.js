//Imports; Some of which coming from mui and react-icons.
import React, { useState } from 'react'
import Logo from "../Assets/logo.png"
import {BsCart3} from "react-icons/bs"
import { IoMdMenu } from "react-icons/io";

import {
    Box, Drawer,List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from"@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

//Handles the navbar section of the landing page.
export const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    // Array to hold the data for the menu, with each menu selection's name and icon.
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>,
            link: "/"
        },
        {
            text: "About",
            icon: <InfoIcon/>,
            link: "#about"
        },
        {
            text: "Reviews",
            icon: <CommentRoundedIcon/>,
            link: "#reviews"
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>,
            link: "#contact"
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon/>,
            link: ""
        },
        {
            text: "Book now",
            icon: <EditCalendarIcon/>,
            link: ""
        },
    ]
  return (
    <nav>
        {/*Displays the logo with the site's name directly next to it*/}
        <div href = "/" className = "navbar-logo-container">
            <img src = {Logo} alt = "Olivia Kitchen Logo" />
            <h1>Olivia's Kitchen</h1>
        </div>
        {/*Each of the navbar selections*/}
        <div className = "navbar-links-container">
            <a href ="/">Home</a>
            <a href ="#about">About</a>
            <a href ="#reviews">Reviews</a>
            <a href ="#contact">Contact</a>
            <a href =""><BsCart3 className = "navbar-cart-icon" /></a>
            <button className ="primary-button">Book Now</button>
        </div>
        {/*If the screensize is small, the menu bar will change, allowing a drawer to open with menu options*/}
        <div className = "navbar-menu-container">
            <IoMdMenu onClick = { ()=> setOpenMenu(true)}/>
        </div>
        <Drawer open = {openMenu} onClose= {()=> setOpenMenu(false)} anchor = "right">
            <Box 
                sx={{width: 250}}
                role= "presentation"
                onClick = {() => setOpenMenu (false)}
                onKeyDown = {() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key = {item.text} disablepadding>
                            <ListItemButton href = {item.link}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary = {item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

