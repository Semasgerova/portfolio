import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import chocolove from "./photo/chocolove.png"
import shopy from "./photo/shopy.png"
import watch from "./photo/watch.png"
import github from "./photo/github.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
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
        top: 750,
        behavior: "smooth",
      });
    } else if (number === "02") {
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
    } else if (number === "03") {
      window.scrollTo({
        top: 2250,
        behavior: "smooth",
      });
    }
  };

  //swiper

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
            <h1>
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
                <h1>
                  About <span>Me</span>
                </h1>
                <p>
                  Get to Know <span>me.</span>
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="txt">
                <h2>Welcome.</h2>
                <p>
                  My name is Sama Asgarova, I'm a FrontEnd Developer based in
                  Baku, Azerbaijan. I have 1 year of experience in front-end
                  development, specializing in HTML, CSS, JavaScript, React,
                  TypeScript, and React Bootstrap. I enjoy assisting clients in
                  creating modern and user-friendly websites.
                </p>
                <p>
                  Got any questions? <span>Contact me.</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="skills">
        <div className="top">
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
        <div className="container">
          <div className="top">
            <h1>Projects</h1>
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
                <a href="https://choco-love-8a3d.vercel.app/"><img src={chocolove} /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://shofy-pi.vercel.app/"><img src={shopy} /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://project-watch.vercel.app/"><img src={watch} /></a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://project-1-pi-beryl.vercel.app/"><img src={github} /></a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
