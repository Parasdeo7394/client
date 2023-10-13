import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="profile_pick" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About me</h1>
                <p>I am mechanical engineering student.I did work in<u style={{color:"magenta"}}>1yr as Guest Lecturer</u> and<u style={{color:'blue'}}>2yrs in mechanical design field</u>as well as I am qualified Gate 3times as taking Mech Engg Subject.Now Iam very curious and willing to work in software field<u style={{color:'green'}}>as Full STACK DEVELOPER</u>.For this<u style={{color:'black'}}>I have done course in Guvi Geeks Network Pvt Ltd </u>.I am looking<u style={{color:'blue'}}>opportunity as fresher</u>.
                I have Figma,AdobeXd,Adobe illustrator,Adobe Photoshop,HTML5,Cascading Style Sheets (CSS),Bootstrap, JavaScript,React.js, Front-end Development,Node.js,Express.js,MySQL,MongoDB,SQL,Back-End Web Development,Web Development,Software Development skills.
                </p>
                    
            </div>
        </div>
      </div>
    </Jump>
    </>
  )
}

export default About