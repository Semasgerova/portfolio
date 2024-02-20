import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import chocolove from "./photo/chocolove.png"
import shopy from "./photo/shopy.png"
import watch from "./photo/watch.png"
import github from "./photo/github.png"
import yellowgo from "./photo/yellowGo.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeNumber, setActiveNumber] = useState("00");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
    if (number === "00") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (number === "01") {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    } else if (number === "02") {
      window.scrollTo({
        top: 1550,
        behavior: "smooth",
      });
    } else if (number === "03") {
      window.scrollTo({
        top: 2400,
        behavior: "smooth",
      });
    }else{
      window.scrollTo({
        top: 3500,
        behavior: "smooth",
      });
    }
  };

  const openGmail = () => {
    window.location.href = 'mailto:semaesgerova68@gmail.com?subject=Konu&body=Hello%20Sama';
  };

  return (
    <div className="home">
      <div className="main">
        <Container>
          <div className="left">
            <div className="social-media">
              <a href="https://github.com/Semasgerova">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/semasgerova/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="middle">
            <h1 data-aos="flip-left">
              <span>Sama</span> Asgarova
            </h1>
            <p>
              I'm a <span className="typewriter"></span>
            </p>
          </div>
          <div className="right">
            <div className="numbers">
              <span
                className={activeNumber === "00" ? "active" : ""}
                onClick={() => handleNumberClick("00")}
              >
                00
              </span>
              <span
                className={activeNumber === "01" ? "active" : ""}
                onClick={() => handleNumberClick("01")}
              >
                01
              </span>
              <span
                className={activeNumber === "02" ? "active" : ""}
                onClick={() => handleNumberClick("02")}
              >
                02
              </span>
              <span
                className={activeNumber === "03" ? "active" : ""}
                onClick={() => handleNumberClick("03")}
              >
                03
              </span>
              <span
                className={activeNumber === "04" ? "active" : ""}
                onClick={() => handleNumberClick("04")}
              >
                04
              </span>
            </div>
            <div className="line"></div>
          </div>
        </Container>
      </div>
      <div className="about">
        <Container>
          <Row className="h-100 m-0">
            <Col md={12} lg={6}>
              <div className="text">
                <h1 data-aos="flip-left">
                  About <span>Me</span>
                </h1>
                <p data-aos="flip-left">
                  Get to Know <span>me.</span>
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="txt">
                <h2 data-aos="fade-up">Welcome.</h2>
                <p data-aos="fade-up">
                  My name is Sama Asgarova, I'm a FrontEnd Developer based in
                  Baku, Azerbaijan. I have 1 year of experience in front-end
                  development, specializing in HTML, CSS, JavaScript, React,
                  TypeScript, and React Bootstrap. I enjoy assisting clients in
                  creating modern and user-friendly websites.
                </p>
                <p data-aos="fade-up">
                  Got any questions? <span  onClick={() => handleNumberClick("04")}>Contact me.</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="skills">
        <div className="top" data-aos="zoom-in">
          <p className="slogan">
            Creating intuitive interfaces, delighting users.
          </p>
          <h1>Skills</h1>
          <p>
            HTML, CSS, JS, building small and medium web applications with
            React, custom plugins, features, animations, and coding interactive
            layouts
          </p>
          <p>
            Visit my{" "}
            <a href="https://www.linkedin.com/in/semasgerova/">Linkedin</a> for
            more details.
          </p>
        </div>
        <div className="bottom">
          <div className="slider">
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
          </div>
          <div className="slider-two">
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
          </div>
          <div className="slider">
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
            <div className="box">HTML</div>
            <div className="box">CSS</div>
            <div className="box">Bootstrap</div>
            <div className="box">SASS</div>
            <div className="box">JS</div>
            <div className="box">React</div>
            <div className="box">TypeScript</div>
            <div className="box">Context Api</div>
            <div className="box">Firebase</div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container pt-3">
          <div className="top" data-aos="zoom-in">
            <h1>Projects</h1>
            <p className="mt-2">Some of My <span>Works</span></p>
          </div>
          <div className="bottom">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={chocolove} />
                <div className="text">
                  <h3>Chocolove</h3>
                  <p><a href="https://choco-love-8a3d.vercel.app/" className="me-3">Website <i className="fa-solid fa-globe"></i></a> <a href="https://github.com/Semasgerova/ChocoLove">Github <i class="fa-brands fa-github-alt"></i></a></p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <img src={shopy} />
                <div className="text">
                  <h3>Shopy</h3>
                  <p><a href="https://shofy-pi.vercel.app/" className="me-3">Website <i className="fa-solid fa-globe"></i></a> <a href="https://github.com/Semasgerova/e-commerce">Github <i class="fa-brands fa-github-alt"></i></a></p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <img src={yellowgo} />
                <div className="text">
                  <h3>Github</h3>
                  <p><a href="https://yellowgo.co/">Website <i className="fa-solid fa-globe"></i></a></p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <img src={watch} />
                <div className="text">
                  <h3>Watch</h3>
                  <p><a href="https://project-watch.vercel.app/" className="me-3">Website <i className="fa-solid fa-globe"></i></a> <a href="https://github.com/Semasgerova/project-watch">Github <i class="fa-brands fa-github-alt"></i></a></p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
               <img src={github} />
                <div className="text">
                  <h3>Github</h3>
                  <p><a href="https://project-1-pi-beryl.vercel.app/" className="me-3">Website <i className="fa-solid fa-globe"></i></a> <a href="https://github.com/Semasgerova/github">Github <i class="fa-brands fa-github-alt"></i></a></p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <Row>
            <Col md={12} lg={5}>
            <div className="left">
            <h1 data-aos="flip-left">Contact</h1>
            <p className="mt-2" data-aos="flip-left">Got a problem to <span>solve?</span></p>
          </div>
            </Col>
            <Col md={12} lg={7}>
            <div className="right">
            <h3 data-aos="zoom-in">My email:</h3>
            <h4 className="mb-4" onClick={openGmail} data-aos="zoom-in">semaesgerova68@gmail.com</h4>
            <p data-aos="zoom-in">What would you do if you had a software expert available at your fingertips? Want to start new project? Tell me your ideas to develop your dream website.</p>
          </div>
            </Col>
          </Row>
       
          
        </div>
      </div>
    </div>
  );
};

export default Home;
