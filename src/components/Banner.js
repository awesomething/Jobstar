import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
//import JobListMain from './JobListMain/JobListMain'
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search/>}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search"}
                </Button>
            </div>
            <div className='banner__info'>
            
              <h3>Are You Looking To Hire Developers On Contract?</h3>
              <h5>Post a contract job and hire top candidates.</h5>
              
            
                <Button onClick={() => history.push('/search')} variant='outlined'>Post Jobs</Button>
            </div>
        </div>
    )
}

export default Banner