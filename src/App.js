import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'



const alanKey = 'c029afa04c02572367ff910e88b048342e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
   
    useEffect(()=> {
        alanBtn({
            key: alanKey,
        
            onCommand: ({ command }) => {
                if(command === 'name'){
                        alert('This code was executed')
                }
            }
        })
    }, [])
    return (
    

    
    <div className="App">
        <center><img
                    
                    className="header__icon"
                    src="https://img1.wsimg.com/isteam/ip/0452b971-56e8-4de2-982c-36f7fc9d155b/rsz_screen_shot_2021-02-27_at_10508_pm-0001.jpg/:/"
                    alt=""
                
                />
            </center>
            
        <Header/>
        <center><h4>Jobstar - Building Your Portfolio Through Contract Jobs </h4></center>
       <Home/>
       <div><Footer/></div>
       
    </div>
   
    
    );
}

export default App;
