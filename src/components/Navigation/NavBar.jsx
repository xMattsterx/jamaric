import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;

  .icon {
    padding: 15px 0;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
}

export default Navbar;
