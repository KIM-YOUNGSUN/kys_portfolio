import React from 'react';
import Navigation from './Navigation';
import '../../style/Header.scss';
import { Link, scroll } from 'react-scroll';


export default function Header(props) {
  return (
    <header id="headBox">
        <h1>portfolio</h1>
        <Navigation />
    </header>
  )
}
