import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 0;
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
