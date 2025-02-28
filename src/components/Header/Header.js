import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img
            src="/profilepic.png"
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </Logo>

        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
          <NavLink className="menu-item" to="experince">
            Experience
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="/resume.pdf"
            download="Bhavishya_Resume.pdf"
          >
            Resume
          </a>
        </NavBtn>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
