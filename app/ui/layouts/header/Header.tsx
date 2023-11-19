"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Container from "../Container";
import styles from "./header.module.css";
const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className='container'>
        <nav className={styles.nav}>
          <h1>Drink of the Day</h1>

          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
