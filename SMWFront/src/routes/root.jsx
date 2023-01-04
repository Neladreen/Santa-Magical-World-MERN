import React from 'react';
import {useState, useEffect} from 'react'

import NavBar from "../NavBar.jsx"
import Toys from '../Toys.jsx'


export default function Home() {
      

  return (
    <>
      <NavBar/>
      <Toys toys={toys}/>
    </>
  );
}
