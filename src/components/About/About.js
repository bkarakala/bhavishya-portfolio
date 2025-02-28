import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/profilepic.png"
            alt="profile-picture"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Bhavishya Reddy</strong>, a skilled .NET Developer with expertise in C#, ASP.NET Core, and microservices architecture. I specialize in designing scalable RESTful APIs with OAuth2, JWT, and IdentityServer, optimizing database performance using SQL Server, MongoDB, and Entity Framework.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft"AQ >
            I have strong full-stack development experience with React, Angular, and Blazor, along with cloud deployments on AWS and Azure using Docker, Kubernetes, and serverless technologies. My background in DevOps automation includes setting up CI/CD pipelines with Azure DevOps, Jenkins, and Terraform for smooth deployments.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Passionate about Agile development, I collaborate with teams to build efficient, high-performance applications while staying updated on the latest industry trends.              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
