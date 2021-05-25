import React from 'react';

import './Card.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


function Card({ CompanyName, src,location, title, description,tag1,tag2,tag3 }) {
    return (
        <div className='card'>
           
            <div className="card__info">
                <div ><img className="right_img" src={src} alt="companylogo" width="96" height="65" float="left" />
                    <br />
                    <div className="cardHeader"><h5> {CompanyName} </h5><h2>{location}</h2> </div>  </div>
                <h3>{title}</h3>
                <div className="container">
                    <h6> <span>{tag1}</span> &nbsp;&nbsp;&nbsp;
                 <span>{tag2}</span>  &nbsp;&nbsp;&nbsp;
              <span>{tag3}</span></h6></div>
            <div className="descripStyle">
                <CardContent>
                        <Typography variant="body2" gutterBottom>
                        {description}
          </Typography></CardContent>
                </div>
                <Popup trigger={<button className="buttonStyle" style={{ fontSize: '16px',
                    fontFamily: "Montserrat", fontWeight: "bold", backgroundColor: "rgb(88, 127, 206)",color:"white", borderRadius: "2px", width: "190px",padding: "5px",justifyContent:"flex-end"}}>
                    Refer me</button>}>
                    <form>
                        <label>
                            JobTitle:<input type="text" />
                        </label>
                        <label>
                            Resume [Google drive URL] : <input type="text"/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </Popup>
            </div>
            
            
          
        </div>
    )

}

export default Card