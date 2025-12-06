import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Piano from '../public/Piano.jpg'
import guitar from '../public/guitar.jpg'
import Flute from '../public/Flute.jpg'
import Tabla from '../public/Tabla.jpg'
import Trumpet from '../public/Trumpet.jpg'
import Accordion from '../public/Accordion.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home2 from '../public/Home2.png';

function Home() {
  return (
    <section id='home'>
      <div>
        <main className="px-3">
        </main>
      </div>
    </section>
  )
}
function Achievements() {
  return (
    <section id='achievements'>
      <div className='container'>
        <div className="row mb-4">
          <div className="col-12 about">ABOUT US AND OUR ACHIEVEMENTS</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-lg-5 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="card_image1.png" alt="Info about the owner." />
                </div>
                <div className="flip-card-back">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus delectus et itaque placeat, officia nemo praesentium ad ratione quia molestiae, doloremque ea illo nihil earum sunt sequi! Est, facere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-5 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="card_image2.png" alt="Info about the achievements." />
                </div>
                <div className="flip-card-back">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in quod cum voluptates. Aliquam, dolorem voluptas praesentium ipsam ex, dolor laudantium hic deserunt pariatur omnis fugiat unde rem itaque labore!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Instruments() {
  return (
    <section id='instruments'>
      <div>
        <div className="album py-5" id="Instruments" style={{ backgroundColor: '#fb8074' }}>
          <div className="container" >
            <div className="row instruments">INSTRUMENTS</div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src='Piano.jpg' className="card-img-top" alt="Piano" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/Piano.jpg" target='_blank' >view</Link>
                      </div>
                      <small className="text-body-secondary">Paino</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src='guitar.jpg' className="card-img-top" alt="Guitar" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/guitar.jpg" target='_blank' >view</Link>
                      </div>
                      <small className="text-body-secondary">Guitar</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src="Flute.jpg" alt="Flute Image" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/Flute.jpg" target='_blank' >view</Link>
                      </div>
                      <small className="text-body-secondary">Flute</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src="Tabla.jpg" alt="Tabla" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/Tabla.jpg" target='_blank' >view</Link>
                      </div>
                      <small className="text-body-secondary">Tabla</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src="Trumpet.jpg" alt="Trumpet Image" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/Trumpet.jpg" target='_blank' >view</Link>

                      </div>
                      <small className="text-body-secondary">Trumpet</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg> */}
                  <img src="Accordion.jpg" alt="Accordion Image" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to="../public/Accordion.jpg" target='_blank' >view</Link>

                      </div>
                      <small className="text-body-secondary">Accordion</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id='faq'>
      <div className='container'>
        <div className="row faq">FREQUENTLY ASKED QUESTIONS...</div>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: '#FFEFDA', border: '2px solid brown' }}>
                Accordion Item 1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{ backgroundColor: "#ecb283" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
          <br />
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: '#FFEFDA', border: '2px solid brown' }}>
                Accordion Item 2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{ backgroundColor: "#ecb283" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
          <br />
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: '#FFEFDA', border: '2px solid brown' }}>
                Accordion Item 3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{ backgroundColor: "#ecb283" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

function Feedback() {
  return (
    <section id='feedback'>
      <div className="container" style={{ paddingBottom: "50px" }}>
        <div className="row feedback">FEEDBACK</div>
        <div className="row">
          <div className="col-sm-5">
            <img src="feedback.png" alt="Feedback image" style={{ height: '550px', width: "100%", borderRadius: '20px' }} />
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-5">
            <div className="container" style={{ border: "10px solid #FFEFDA", borderRadius: "20px" }} >
              <form style={{ padding: '20px' }} >
                <div className="input">
                  <label >Enter Your Name :</label>
                  <input type="text" className="form-control" style={{ backgroundColor: "#FFEFDA" }} />
                </div>
                <div className="input">
                  <label >Enter Your Age :</label>
                  <input type="number" className="form-control" style={{ backgroundColor: "#FFEFDA" }} />
                </div>
                <div className="row"><label>Select Your Gender :</label></div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ backgroundColor: "#FFEFDA" }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1" >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ backgroundColor: "#FFEFDA" }}  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ backgroundColor: "#FFEFDA" }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Other
                  </label>
                </div>
                <label>Mention your Reviews :</label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: '100px', backgroundColor: '#FFEFDA' }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2"></label>
                </div><br />
                <button type="submit" className="btn" style={{ backgroundColor: '#FFEFDA', color:'#FB8074' }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

function Footer() {
  return (
    <section id='footer'>
      <div className='footers'>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ backgroundColor: '#fb8074' }}>
          <div className="col-md-4 d-flex align-items-center">
            {/* <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <svg className="bi" width="30" height="24" aria-hidden="true">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a> */}
            <span className="mb-3 mb-md-0 text-light">&copy; 2025 Company, Inc - created by DRASHTI JARIWALA</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Instagram"><svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#instagram"></use></svg></a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Facebook"
              ><svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use></svg
                ></a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  )
}

function App() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="navbar navbar-dark"
        aria-label="Dark offcanvas navbar"
        style={{ backgroundColor: '#fb8074' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: '#FFEFDA', fontFamily: 'Playfair Display', fontSize: '40px' }}>MUSIC🎼</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDark"
            aria-controls="offcanvasNavbarDark"
            aria-label="Toggle navigation"
            style={{ color: '#FFEFDA' }}
          >
            <span className="navbar-toggler-icon" style={{ color: '#FFEFDA' }} ></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ backgroundColor: '#fb8074', color: '#FFEFDA' }}
            tabIndex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/#home" className='nav-item nav-link active' style={{ color: '#FFEFDA' }} onClick={() => scrollToSection("home")}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/#achievements" className="nav-link" style={{ color: '#FFEFDA' }} onClick={() => scrollToSection("achievements")}> Us and Our Achievements</Link>
                </li>
                <li className="nav-item">
                  <Link to="/#instruments" className="nav-link" style={{ color: '#FFEFDA' }} onClick={() => scrollToSection("instruments")}> Instruments </Link>
                </li>
                <li className="nav-item"><Link to="/#faq" className="nav-link" style={{ color: '#FFEFDA' }} onClick={() => scrollToSection("faq")}>FAQs </Link></li>
                <li className="nav-item"><Link to="/#feedback" className="nav-link" style={{ color: '#FFEFDA' }} onClick={() => scrollToSection("feedback")}>Feedback </Link></li>
              </ul>
            </div>
          </div>
        </div >
      </nav >
      <div>

        {/* <Routes>
          <Route path="/#home" element={<Home />} />
          <Route path="/#achievements" element={<Achievements />} />
          <Route path="/Intruments" element={<Instruments />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes> */}

        <Home />
        <Achievements />
        <Instruments />
        <FAQ />
        <Feedback />
        <Footer />
      </div>
    </>
  )
}

export default App;
