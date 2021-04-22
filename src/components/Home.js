import { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import './Home.css';
import Banner from './Banner';
//import alanBtn from '@alan-ai/alan-sdk-web';
import Card from './Card'


//const alanKey = 'c029afa04c02572367ff910e88b048342e956eca572e1d8b807a3e2338fdd0dc/stage';


function Home() {

  /*useEffect(() => {

    alanBtn({
      key: alanKey,

      onCommand: ({ command }) => {
        if (command === 'name') {
          alert('This code was executed')
        }
      }
    })
  }, [])
*/



  return (
    <div className="home-wrapper">


      <Banner />

      <div className='home__section'>

        <Card
          src="https://media.giphy.com/media/cYaAvC3JnTpiJv5ZxA/giphy.gif"
          title="Post Jobs and your offer"
          description="You would be able to post your jobs and website link you want developers to clone"
        />
        <Card
          src="https://media.giphy.com/media/CTkWFZ1IDvsfS/giphy.gif"
          title="Track Contributions Daily"
          description="Easily track how candidates contribute"
        />
        <Card
          src="https://media.giphy.com/media/ObWYXyjM30T6OUICdM/giphy.gif"
          title="Offer The Contract Job"
          description="In one to two weeks, you decide to offer the contract job to the top candidate"
        />
      </div>
      <hr />

      <div class="section-3">
        <div class="container-3 w-container">
          <h2 class="heading">How Does Trial Before You Hire Work</h2><p class="paragraph"></p>
          <div class="columns-2 w-row">
            <div class="column-3 w-col w-col-4">
              <img src="https://media.giphy.com/media/Q9383rfNGOs6k1hkaP/giphy.gif"
                width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, 
        (max-width: 991px) 233.3333282470703px, 304px" alt="" />
              <div class="h3">STEP 1 - Use non-traditional methods - like a dress rehearsal
    - where the final applicants work remotely to create a website clone. </div></div>

            <div class="column-3 w-col w-col-4"><img src="https://media.giphy.com/media/cNYPlsYn4DoYzHgoca/giphy.gif"
              width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px" alt="" />
              <div class="h3">STEP 2 - Fast-track your hiring process and onboard people based on proof of work.
  Devs would ship small features and fix bugs frequently, while communicating with you on video call.</div></div>

            <div class="column-3 w-col w-col-4"><img src="https://media.giphy.com/media/fYHEmYNQzl0mWjzdoA/giphy.gif"
              // eslint-disable-next-line 
              width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px" alt="" />

              <div class="h3">STEP 3 - You get to decide at an interview for fulltime offer or longterm contract. They might not be ready for the fulltime job just yet,
              until they have engaged in a contract job with you,
  </div></div>
          </div>

          <div class="div-block"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfdVBeCigNIYUGvsE6OZdalrAOgrErr1SKOFnSb4dfUKmXPgw/viewform"
            rel="noopener noreferrer" target="_blank" class="button w-button">
            Your Feedback</a></div></div>
        <div class="section-4"><div class="container-4 w-container"><h2 class="heading">FAQ (Click the Mic and Ask Questions Below)</h2><div class="card">

          <h3 class="question">Why Should We Hire Your Applicants?</h3><p class="answer"> You make diversity a priority by increasing the number of diverse hires in your pipeline.
          Applicants schedule an appointment and we select devs interested in your clone website and job you posted.
          Companies get to judge potential hires based on contributions. During this period, their communication and remote team work skills would be tested through frequent pair
  programming sessions before you offer them a contract job. This quality process saves you a lot of advert placement cost.</p></div>
          <div class="card">

            <h3 class="question">What Do I Need To Begin?</h3><p class="answer">Click “Contract Proposal Details” and submit details of your website choice you would like our applicants to work on. You will find a link to a Google document of clones, when filling the form. Optionally, one of your choices can be a project of your own website choice. In this case, you will email a sketch to us.
 </p></div>

          <div class="card"><h3 class="question">How Are You Different?</h3><p class="answer">Can you really trust a reference on a resume? The typical method of hiring for tech positions, based on degrees only is dead. If you choose from our MVP list, it would contain three key features for your chosen clone app.
  To confirm who is the right fit to get the contract job after the project, you would need to screen the top candidates based on proof of work. When you hire from us, you can and should skip the DS / Algorithm questions.</p></div>

          <div class="card"><h3 class="question">When I propose my Contract, what type of features should I expect developers to create? </h3><p class="answer">
            For EXAMPLE: If your app is a social media app that allows users to publicly share short tweets. It would incliude:
<ul>
              <li>Users can create, view, and edit tweets that are viewable by any other user</li>
              <li>Users have a private dashboard of other user's tweets and a public profile view of their own tweets</li>
              <li>Users can search for other users</li>
            </ul>
          </p></div>

          <div class="card"><h3 class="question">What Do I Need To Consider and How Do You Charge?</h3>
            <p class="answer">We highly encourage you to be patient as developers will make many mistakes along the way. Ask yourself

<p>What features of this site do I want developers to clone? Will these features show off things I want in my future website?
  Are these features self-explanatory and easy to understand? </p>


              <p>We charge you a month's salary for every hire. Once above has been considered,
  click <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYoaQDXvjBlA8VOkAIw05HPj4fJ10JZNBSyJ2nFMB6fAP5gw/viewform?gxids=7628" rel="noopener noreferrer">Join Here</a></p> </p></div>

        </div>

        </div>



      </div>

    </div>
  )

}


export default Home;

/*import { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import './Home.css';
import Banner from './Banner';
import alanBtn from '@alan-ai/alan-sdk-web';
import Card from './Card'


const alanKey = 'c029afa04c02572367ff910e88b048342e956eca572e1d8b807a3e2338fdd0dc/stage';


function Home() {

  useEffect(() => {

    alanBtn({
      key: alanKey,

      onCommand: ({ command }) => {
        if (command === 'name') {
          alert('This code was executed')
        }
      }
    })
  }, [])




  return (
    <div className="home-wrapper">


      <Banner />

      <div className='home__section'>

        <Card
          src="https://media.giphy.com/media/cYaAvC3JnTpiJv5ZxA/giphy.gif"
          title="Post Jobs and Website To Clone"
          description="You would be able to post your jobs and website link you want developers to clone"
        />
        <Card
          src="https://media.giphy.com/media/CTkWFZ1IDvsfS/giphy.gif"
          title="Track Contributions Daily"
          description="Easily track how candidates contribute"
        />
        <Card
          src="https://media.giphy.com/media/ObWYXyjM30T6OUICdM/giphy.gif"
          title="Offer The Contract Job"
          description="In one to two weeks, you decide to offer the contract job to the top candidate"
        />
      </div>
      <hr />

      <div class="section-3">
        <div class="container-3 w-container">
          <h2 class="heading">How Does Trial Before You Hire Work</h2><p class="paragraph"></p>
          <div class="columns-2 w-row">
            <div class="column-3 w-col w-col-4">
              <img src="https://media.giphy.com/media/Q9383rfNGOs6k1hkaP/giphy.gif"
                width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, 
        (max-width: 991px) 233.3333282470703px, 304px" alt="" />
              <div class="h3">STEP 1 - Use non-traditional methods - like a dress rehearsal
    - where the final applicants work remotely to create a website clone. </div></div>

            <div class="column-3 w-col w-col-4"><img src="https://media.giphy.com/media/cNYPlsYn4DoYzHgoca/giphy.gif"
              width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px" alt="" />
              <div class="h3">STEP 2 - Fast-track your hiring process and onboard people based on proof of work.
  Devs would ship small features and fix bugs frequently, while communicating with you on video call.</div></div>

            <div class="column-3 w-col w-col-4"><img src="https://media.giphy.com/media/fYHEmYNQzl0mWjzdoA/giphy.gif"
              // eslint-disable-next-line 
              width="368px" height="320px" sizes="(max-width: 479px) 88vw, (max-width: 767px) 368px, (max-width: 991px) 233.3333282470703px, 304px" alt="" />

              <div class="h3">STEP 3 - You get to decide at an interview for fulltime offer or longterm contract. They might not be ready for the fulltime job just yet,
              until they have engaged in a contract job with you,
  </div></div>
          </div>

          <div class="div-block"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfdVBeCigNIYUGvsE6OZdalrAOgrErr1SKOFnSb4dfUKmXPgw/viewform"
            rel="noopener noreferrer" target="_blank" class="button w-button">
            Your Feedback</a></div></div>
        <div class="section-4"><div class="container-4 w-container"><h2 class="heading">FAQ (Click the Mic and Ask Questions Below)</h2><div class="card">

          <h3 class="question">Why Should We Hire Your Applicants?</h3><p class="answer"> You make diversity a priority by increasing the number of diverse hires in your pipeline.
          Applicants schedule an appointment and we select devs interested in your clone website and job you posted.
          Companies get to judge potential hires based on contributions. During this period, their communication and remote team work skills would be tested through frequent pair
  programming sessions before you offer them a contract job. This quality process saves you a lot of advert placement cost.</p></div>
          <div class="card">

            <h3 class="question">What Do I Need To Begin?</h3><p class="answer">Click “Contract Proposal Details” and submit details of your website choice you would like our applicants to work on. You will find a link to a Google document of clones, when filling the form. Optionally, one of your choices can be a project of your own website choice. In this case, you will email a sketch to us.
 </p></div>

          <div class="card"><h3 class="question">How Are You Different?</h3><p class="answer">Can you really trust a reference on a resume? The typical method of hiring for tech positions, based on degrees only is dead. If you choose from our MVP list, it would contain three key features for your chosen clone app.
  To confirm who is the right fit to get the contract job after the project, you would need to screen the top candidates based on proof of work. When you hire from us, you can and should skip the DS / Algorithm questions.</p></div>

          <div class="card"><h3 class="question">When I propose my MVP Contract, what type of features should I expect developers to create? </h3><p class="answer">
            For EXAMPLE: If your app is a social media app that allows users to publicly share short tweets. It would incliude:
<ul>
              <li>Users can create, view, and edit tweets that are viewable by any other user</li>
              <li>Users have a private dashboard of other user's tweets and a public profile view of their own tweets</li>
              <li>Users can search for other users</li>
            </ul>
          </p></div>

          <div class="card"><h3 class="question">What Do I Need To Consider and How Do You Charge?</h3>
            <p class="answer">We highly encourage you to be patient as developers will make many mistakes along the way. Ask yourself

<p>What features of this site do I want developers to clone? Will these features show off things I want in my future website?
  Are these features self-explanatory and easy to understand? </p>


              <p>We charge you a month's salary for every hire. Once above has been considered,
  click <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYoaQDXvjBlA8VOkAIw05HPj4fJ10JZNBSyJ2nFMB6fAP5gw/viewform?gxids=7628" rel="noopener noreferrer">Join Here</a></p> </p></div>

        </div>

        </div>



      </div>

    </div>
  )

}


export default Home;*/