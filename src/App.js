import React from 'react';
import { Nav, Navbar, Button, Container, NavLink } from 'react-bootstrap';
import './App.css';

function App() {
  const image = [
    {
      section1: 'bg-showcase-1.jpg',
      descriptiontitle1: 'Fully Responsive Design',
      details1:
        'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it s a phone, tablet or desktop the page will behave responsively!',
    },
    {
      section2: 'bg-showcase-2.jpg',
      descriptiontitle2: 'Updated For Bootstrap 5',
      details2:
        'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    },
    {
      section3: 'bg-showcase-3.jpg',
      descriptiontitle3: 'Easy to Use & Customize',
      details3:
        'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    },

    {
      person: 'testimonials-1.jpg',
      personName: 'Margaret E.',
      personReview: '"This is fantastic! Thanks so much guys!"',
    },
    {
      person: 'testimonials-2.jpg',
      personName: 'Fred S.',
      personReview:
        '"Bootstrap is amazing. I ve been using it to create lots of super nice landing pages."',
    },
    {
      person: 'testimonials-3.jpg',
      personName: 'Sarah W.',
      personReview: '"Thanks so much for making these free resources available to us!"',
    },
  ];

  const secondetails = [
    {
      title: 'Fully Responsive',
      desc: 'This theme will look great on any device, no matter the size!',
    },
    {
      title: 'Bootstrap 5',
      desc: 'Featuring the latest build of the new Bootstrap 5 framework!',
    },
    {
      title: 'Easy to Use',
      desc: 'Ready to use with your own content, or customize the source files!',
    },
  ];

  const section1 = image.find((img) => img.section1)?.section1;
  const descriptiontitle1 = image.find((img) => img.descriptiontitle1)?.descriptiontitle1;
  const details1 = image.find((img) => img.details1)?.details1;

  const section2 = image.find((img) => img.section2)?.section2;
  const descriptiontitle2 = image.find((img) => img.descriptiontitle2)?.descriptiontitle2;
  const details2 = image.find((img) => img.details2)?.details2;

  const section3 = image.find((img) => img.section3)?.section3;
  const descriptiontitle3 = image.find((img) => img.descriptiontitle3)?.descriptiontitle3;
  const details3 = image.find((img) => img.details3)?.details3;

  const persons = image.filter((img) => img.person).map((img) => ({
    person: img.person,
    personName: img.personName,
    personReview: img.personReview,
  }));

  return (
    <>
      <div className="App">
        <Navbar className="App-header">
          <Container className="brand">
            <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Nav className="Nav-first">
              <Button className="new-user">Sign Up</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="image">
        <img src="bg-masthead.jpg" className="bg-image" alt="Background" />
        <div className="overlay">
          <h1 className="overlay-text">Generate more leads with a professional landing page!</h1>
          <input type="text" className="input-field" placeholder="Enter your email" />
          <Button className="btn-signup">Sign Up</Button>
        </div>
      </div>

      <div className="second-section">
        <Container className="note-container">
          <ol>
            {secondetails.map((detail, index) => (
              <div key={index}>
                <ul className="detail">
                  <p className="p0">{detail.title}</p>
                  <p className="p1">{detail.desc}</p>
                </ul>
              </div>
            ))}
          </ol>
        </Container>
      </div>

      <div className="image-section">
        <Container className="container-mobile">
          <div className="section1-image">
            {section1 && (
              <>
                <img src={section1} alt="Section 1" className="image1" />
                {descriptiontitle1 && <h2 className="heading1">{descriptiontitle1}</h2>}
                {details1 && <p className="note1">{details1}</p>}
              </>
            )}
          </div>
        </Container>

        <Container className="codeImage">
          <div className="section2-image">
            {section2 && (
              <>
                <img src={section2} alt="Section 2" className="image2" />
                {descriptiontitle2 && <h2 className="heading2">{descriptiontitle2}</h2>}
                {details2 && <p className="note2">{details2}</p>}
              </>
            )}
          </div>
        </Container>

        <Container className="lapImage">
          <div className="section2-image">
            {section3 && (
              <>
                <img src={section3} alt="Section 3" className="image3" />
                {descriptiontitle3 && <h2 className="heading3">{descriptiontitle3}</h2>}
                {details3 && <p className="note3">{details3}</p>}
              </>
            )}
          </div>
        </Container>

        <Container className="person-details">
          <>
            <h1 className="Review">What people are saying...</h1>
            <div className="person-gallery">
              {persons.map((personObj, idx) => (
                <div key={idx} className="person-block">
                  <img src={personObj.person} alt={`person ${idx + 1}`} className="person-image" />
                  <h2>{personObj.personName}</h2>
                  <p className='note-person'>{personObj.personReview}</p>
                </div>
              ))}
            </div>
          </>
        </Container>
        <Container className='image-container2'>
  <img src="bg-masthead.jpg" className="bg-image1" alt="Background" />
  <div className='overlay1'>
    <h1 className="overlay-text1">Ready to get started? Sign up now!</h1>
    <button className="overlay-button">Sign up</button>
    <input type="text" className="input-field1" placeholder="Enter your email" />
  </div>
</Container>

<Container className='last-container'>


        <NavLink className='navlink'>
          <ul className='ul1'>
            <li className='li1'>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Contact</a>
            <a href="#" className="link">Terms of use</a>
            <a href="#" className="link">PrivacyPolicy</a>
            </li>
          </ul>
          
        </NavLink>
  <h4 className='label'>© Your Website 2023. All Rights Reserved.</h4>

</Container>

      </div>
    </>
  );
}

export default App;
 