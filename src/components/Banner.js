import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';

import { useHistory } from "react-router-dom";

function Banner() {
    // eslint-disable-next-line
     const history = useHistory();
    const [showSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search/>}

                
            </div>
            <div className='banner__info'>
            
              <h3>Are You Looking To Hire Developers On Contract?</h3>
              <h5>Post a contract job and hire top candidates.</h5>
              
            
                <Button onClick={() => window.location.href='https://calendly.com/pairsession'} variant='outlined'>Post Jobs</Button>
            </div>
        </div>
    )
}

export default Banner