import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkedInPage from './LinkedInLogin'
function Header() {
  return (
    <div className="header lg:px-24">
      <Link to="/" className="left-0">
        <center>
          <h2 className="text-blue-900 font-bold underline text-2xl	 ">
            JobStar
          </h2>
        </center>
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
          alt=""
        />
      </Link>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.jobstar.vercel.app//"
        rel="noopener noreferrer"
        target="_blank"
        className="mt pl-240"
      >
        <FacebookIcon />{" "}
      </a>
      {/* <a
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.jobster-awesomething.vercel.app//"
        class="fa fa-facebook"
        target="_blank"
        required
        rel="noopener noreferrer"
      >
        Facebook
      </a> */}
      <br />
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.jobstar.vercel.app//&title=Master%20the%20basics%20of%20Web%20Development%20in%204%20weeks.%20It's%20100%25%20free.&summary=Classvisa%20Open%20is%20a%204-weeks%20long,%20online%20programming%20course%20to%20get%20started%20with%20Web%20Development%20and%20learn%20to%20code%20by%20US%20based%20instructors.%0A%0AYep,%20it%20cost%20you%20no%20money.%20Limited%20number%20of%20seats%20to%20ensure%20a%20great%20class%20experience.%20We're%20looking%20out%20for%20highly%20motivated%20people%20outside%20the%20USA.%20Nigerians,%20Indians%20and%20more%20foreign%20students%20are%20welcome,%20because%20the%20best%20talents%20are%20everywhere.%20Over%2080%20people%20signed%20up%20in%20the%20last%20batch.%0A%0AApply-Next%20batch%3A%20January%204,%202021&source="
        target="_blank"
        rel="noopener noreferrer"
        className="mt pl-240"
      >
        <LinkedInIcon />{" "}
      </a>
      {/* <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.jobstar.vercel.app//&title=Master%20the%20basics%20of%20Web%20Development%20in%204%20weeks.%20It's%20100%25%20free.&summary=Classvisa%20Open%20is%20a%204-weeks%20long,%20online%20programming%20course%20to%20get%20started%20with%20Web%20Development%20and%20learn%20to%20code%20by%20US%20based%20instructors.%0A%0AYep,%20it%20cost%20you%20no%20money.%20Limited%20number%20of%20seats%20to%20ensure%20a%20great%20class%20experience.%20We're%20looking%20out%20for%20highly%20motivated%20people%20outside%20the%20USA.%20Nigerians,%20Indians%20and%20more%20foreign%20students%20are%20welcome,%20because%20the%20best%20talents%20are%20everywhere.%20Over%2080%20people%20signed%20up%20in%20the%20last%20batch.%0A%0AApply-Next%20batch%3A%20January%204,%202021&source="
        class="fa fa-linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a> */}
      <LinkedInPage></LinkedInPage>
    </div>
  );
}

export default Header;


/*import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
            <FacebookIcon /> <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.jobster-awesomething.vercel.app//" class="fa fa-facebook"
                target="_blank" required
                rel="noopener noreferrer">Facebook</a>
                <br/>
            <LinkedInIcon /> <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.jobster-awesomething.vercel.app//&title=Master%20the%20basics%20of%20Web%20Development%20in%204%20weeks.%20It's%20100%25%20free.&summary=Classvisa%20Open%20is%20a%204-weeks%20long,%20online%20programming%20course%20to%20get%20started%20with%20Web%20Development%20and%20learn%20to%20code%20by%20US%20based%20instructors.%0A%0AYep,%20it%20cost%20you%20no%20money.%20Limited%20number%20of%20seats%20to%20ensure%20a%20great%20class%20experience.%20We're%20looking%20out%20for%20highly%20motivated%20people%20outside%20the%20USA.%20Nigerians,%20Indians%20and%20more%20foreign%20students%20are%20welcome,%20because%20the%20best%20talents%20are%20everywhere.%20Over%2080%20people%20signed%20up%20in%20the%20last%20batch.%0A%0AApply-Next%20batch%3A%20January%204,%202021&source=" class="fa fa-linkedin"
                target="_blank"
                rel="noopener noreferrer">LinkedIn</a>

        </div>
    )


}

export default Header*/
