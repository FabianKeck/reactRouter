import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components/macro";

export default function NavBar() {
    return <StyledNavbar>
            <NavLink to="/all">All</NavLink>
            <NavLink to="/open">Open</NavLink>
            <NavLink to="/inprogress">In Progress</NavLink>
            <NavLink to="/done">Done</NavLink>
        </StyledNavbar>

}

const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-items: center;
  gap: 1em;
`