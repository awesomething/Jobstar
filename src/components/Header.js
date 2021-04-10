import React from 'react';
import './Header.css'
//import JobListMain from './JobListMain/JobListMain'
//import About from './About/About'
//import JobPageNav from '../JobPageNav/JobPageNav'
//import JobListMain from '../JobListMain/JobListMain'
import { Link } from 'react-router-dom';

//import AddCategory from '../AddCategory/AddCategory'
//import AddJob from '../AddJob/AddJob'
//import SearchIcon from "@material-ui/icons/Search";
//import LanguageIcon from "@material-ui/icons/Language"; <LanguageIcon />
//import FacebookIcon from '@material-ui/icons/Facebook'; <FacebookIcon/>
//import LinkedInIcon from '@material-ui/icons/LinkedIn'; <LinkedInIcon/>
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; <ExpandMoreIcon />
//import { Avatar } from "@material-ui/core";


function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <center><h2>JobStar</h2></center>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                
            </div>

            <div className='header__right'>
                
                
            </div>
        </div>
    )

    
  }

export default Header
  /*  return (
        <div className='header'>
            <Link to='/'>
                <center><h2>JobStar</h2></center>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                
            </div>

            <div className='header__right'>
                
                
            </div>
        </div>
    )
}
  <Link to={"/category/:categoryid"} activeStyle={{color: 'red'}} target="_blank" rel="noopener noreferrer" 
            className="btn btn-primary">Post Jobs</Link> */

  

