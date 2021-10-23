import React from 'react'
import './Header.css'
//import SearchIcon from "@material-ui/icons/Search";
//import LanguageIcon from "@material-ui/icons/Language"; <LanguageIcon />
//import FacebookIcon from '@material-ui/icons/Facebook'; <FacebookIcon/>
//import LinkedInIcon from '@material-ui/icons/LinkedIn'; <LinkedInIcon/>
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; <ExpandMoreIcon />
//import { Avatar } from "@material-ui/core";


function Header() {
    return (
    
    <div>
        
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar w-nav">
            <div class="container w-container"><a class="w-nav-brand"><div class="logo"></div></a></div></div>
        
        <div class="section"><div class="container-7 w-container">

        <center><div>
                <img src="https://media.giphy.com/media/4pBcyhQxYQGvzYx7oU/giphy.gif" alt=""/>
                <center><div class="column-2 w-col w-col-7"><br/>
                <h1 class="title">Are You Looking To Hire Developers On Contract?</h1>
                <div class="subtitle">Post a contract job alongside an MVP proposal and hire the top candidates on contract.</div>
                </div></center><br/>
            
                <div className='header__right'><a href="" target="_blank" class="button secondary w-button">Post Here</a></div>
                <br/>
                <div className='header__right'><a href="https://docs.google.com/forms/d/e/1FAIpQLSd2LuULoU-mlbOHOn567osjWnNk-barrcsItVLe9Xt7l3GERw/viewform" target="_blank" class="button secondary w-button">Your Feedback</a></div>
                    
                </div></center>
            </div>
        </div>
</div>
    )
}



export default Header
  
