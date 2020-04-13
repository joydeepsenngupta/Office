import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function NavigationBar() {
  return (
    <div style={{backgroundColor:"grey", zIndex:"1", position:"relative"}}>
    <ul>
   <li>
   <a href="#">IBM</a>
      <ul>
        <li><a href="#">Want to create a Ticket?</a></li>
        <li><a href="">Looking for solution?</a></li>
        <li><a href="#">Old Cse</a></li>
      </ul>
   </li>
    <li>
      <a href="#">Hitachi</a>
      <ul>
       <li><a href="/searchHitachi">Want to create a Ticket?</a></li>
        <li><a href="Hitachi.html">Looking for solution?</a></li>
        <li><a href="">Old Case</a></li>
      </ul>
    </li>
  </ul>
  </div>
    );
  }
  
export default NavigationBar;