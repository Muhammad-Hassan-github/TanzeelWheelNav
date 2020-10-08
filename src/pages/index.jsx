import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";
import { Layout } from "../components/Layout/Layout";
import { Hero } from "../components/Hero/Hero";
import Wheel from "../components/Wheel/wheel.js";
import { Global } from "../components/Global/Global";
import { Maintenance } from "../components/Maintenance/Maintenance";
import { CaseStudy } from "../components/CaseStudy/CaseStudy";
import vector1 from "../assets/case_study/vector_1.png";
import vector2 from "../assets/case_study/vector_2.png";
import vector3 from "../assets/case_study/vector_3.png";
import vector4 from "../assets/case_study/vector_4.png";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { FullPage, Slide } from "react-full-page";

const IndexPage = () => {
  useEffect(() => {
    window.onscroll = () => {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (document.getElementById("CTA").style.display = "block")
        : (document.getElementById("CTA").style.display = "none");
    };
    window.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") === "open-btn") {
        document.getElementById("mySidepanel").style.width = "250px";
      } else {
        if (e.target.getAttribute("id") !== "mySidepanel") {
          document.getElementById("mySidepanel").style.width = "0px";
        }
      }
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>OPZOOM</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="stylesheet" type="text/css" href="fullview.css" />

        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          crossorigin="anonymous"
        ></script>

        <script type="text/javascript" src="fullview.js"></script>
      </Helmet>
      <FullPage duration={700}>
        <button id="CTA" className="btn">
          Schedule a Call
        </button>

        <Slide>
          <Header />

          <Hero />
        </Slide>
        <Slide>
          <Global />
        </Slide>
        <Slide>
          <Wheel />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector1}
            imgOrder={1}
            textOrder={2}
            title="Find a Problem"
            text="Look for a problem to be solved. The client found a lot of people who want a place to post their work."
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector2}
            imgOrder={2}
            textOrder={1}
            title="Create a great design"
            text="Reduces development costs with lower change orders. Familiar user experience Exciting to keep user attention Useful to keep them returning. Social references to help connections grow."
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector3}
            imgOrder={1}
            textOrder={2}
            title="Develop to design specifications quickly"
            text="Picked a versatile platform : Flutter Great development team"
          />
        </Slide>
        <Slide>
          <CaseStudy
            imgUrl={vector4}
            imgOrder={2}
            textOrder={1}
            title="The Result"
            text="An attractive user friendly app What do you want to build?"
          />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </div>
  );
};

export default IndexPage;
