import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiCommentDots } from "react-icons/bi";

function Sidebar(props) {
  return (
        <aside className='sidebar'>
            <div className='logo'>
                <a>Brand <b>Colors</b></a>
            </div>
            <div className='description'>
                <span>The biggest collection of official brand color codes around. Curated by @brandcolors and friends.</span>
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <BiCommentDots />
                        <Popup trigger={<button className='popupbtn'> About BrandColors</button>} position="right center">
                            <div className='popupcontent'>
                                <h2>About BrandColors</h2>
                                <p>BrandColors was created by <a href="https://www.designbombs.com/"><strong>DesignBombs</strong></a>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                                <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <strong>2 million pageviews</strong>. There are now over <strong>600 brands</strong> with <strong>1600 colors</strong> and the collection is always growing.</p></div>
                        </Popup>
                    </li>
                </ul>
            </nav>
        </aside>
  );
}
export default Sidebar;