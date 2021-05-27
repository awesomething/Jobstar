import React, { useState } from 'react';

import './Card.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_CPZ731a5PRuxvn8B5zubV");

function Card({ CompanyName, src,location, title, description,tag1,tag2,tag3,jobReffererMailId,jobReffererUsername}) {

    const [jobTitle, setJobTitle] = useState("");
    const [googleDriveLink, setGoogleDriveLink] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        sendEmail();
        alert("Your resume has been shared with the refferer,You can use the close button to close the window");
        console.log('You clicked submit.');
        setJobTitle("");
        setGoogleDriveLink("")

    }
    function sendEmail() {
        emailjs.send("service_8vld8cl", "template_m9uw4al",{
            ToName: jobReffererUsername,
            ToEmail: jobReffererMailId,
            jobTitle: jobTitle, 
            googleDriveLink: googleDriveLink
        });
    }
    const contentStyle = {
        maxWidth: "500px",
        width: "90%"
    };
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
                    Get Reffered</button>} contentStyle={contentStyle} modal>
                    {close => (
                        <div className="modal">
                            <div className="header"> Get Reffered Here </div>
                            <div className="content">
                                {" "}
                                <form onSubmit={handleSubmit} >
                                    <label>
                                        JobTitle:<input type="text" name="Jobtitle" onChange={e => setJobTitle(e.target.value)} value={jobTitle} required />
                                    </label>
                                    <label>
                                        Resume [Google drive URL] : <input type="text" onChange={e => setGoogleDriveLink(e.target.value)} value={googleDriveLink} required />
                                    </label>
                                    <button className="submitButton" >Submit</button>
                                    <button
                                        className="submitButton"
                                        onClick={() => {
                                            console.log("modal closed ");
                                            close();
                                        }}
                                    >
                                        Close
                             </button>
                                </form>
        </div>
                        </div>
                    )}
                </Popup>
            </div>
         </div>
      
    )

}

export default Card