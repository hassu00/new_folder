import React from 'react'
import Link from "next/link";
// import Contact from './contact/page';
// import About from './about/page';

export default function Homepage(){
  return (
    <div>
      <ul className='link'>
        <h3><Link href="./contact">Contact</Link></h3>
        <h3><Link href="./about">About</Link></h3>
        <h3><Link href="/">Home</Link></h3>
      </ul>
      welome to my homepage
      <link rel="stylesheet" href="style.globals.css" />
    </div>
 
  );
}

