import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />

      <HeroContainer>
        <HeroWrapper>
          
          {/* Left Section - Text Animation */}
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi, I'm Bhavishya.",
                  () => setShowSubtitle(true),
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Full-Stack Developer.",
                    1000,
                    "A SLU graduate.",
                    1000,
                    "A problem solver.",
                    1000,
                    "An innovative thinker.",
                    1000,
                    "Scroll down to see my projects!",
                    500,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>

          {/* Right Section - Profile Picture */}
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/profilepic.png" alt="profile-picture" />
            </ScrollAnimation>
          </HeroRight>

        </HeroWrapper>

        {/* Scroll Down Indicator */}
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>Scroll down</ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
        
      </HeroContainer>
    </main>
  );
}

export default Hero;
