import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    color: var(--font-color);
    padding: 18px 10px;
  }

  flex-flow: column nowrap;
  // background-color: var(--background-header-color);
  position: fixed;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.5s ease-in-out;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default RightNav;
