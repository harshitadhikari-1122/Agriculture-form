import React, { useState } from 'react';
import logo from '../Images/Logo.png';
import menu from '../Images/menu.png';
import close from '../Images/close.png';
import Hero from "./Hero/Hero";
import About from "./About/About";
import Product from "./Product/Product";
import AgriLand from "../Home/AgriLand/AgriLand";
import Project from "../Home/Project/Project";
import Testinomial from "../Home/Testinomial/Testinomial";
import './Home.css';
import Quality from './Quality/Quality';
import Contact from './Contact/Contact';
import Leader from "../Home/Leader/Leader";
import Footer from "../Home/Footer/Footer";
import Copyright from './Copyright/Copyright';
import cross from "../Images/close.png";


const Home = () => {

    const [isOpen,setIsOpen]=useState(false);

    const handleClick=(target)=>{
      setIsOpen(!isOpen);
    }

    return (
        <div className='home-container'>
            <header className='header-container'>
            <div className='navbar'>
            <nav>
                <div className='navBar-list'>
                    <div className='logo_web'>
                        <img src={logo} alt="website-logo"></img>
                    </div>
                    <div className='menu-icon_web'>
                        {isOpen
                        ?
                          <img src={cross} alt="close" onClick={handleClick}/>
                        
                        :
                        <img src={menu} alt="menu" onClick={handleClick}/>
                      }
                    </div>
                    <div className='list-main-menu'>
                           <div className='list-1'>
                                <ul>
                                    <li><a href='#home'>Home</a></li>
                                    <li><a href='#about'>About us</a></li>
                                    <li><a href='#product'>Our Products</a></li>
                                    <li><a href='#project'>Projects</a></li>
                                    <li><a href='#service'>Services</a></li>
                                    <li><a href='#testinomial'>Testinomial</a></li>
                                    <li><a href='#contact'>Contact</a></li>
                                </ul>
                            </div>
                       </div>
                </div>

                   {/* Responsive list */}
                {isOpen 
                   &&
                   <div className='responsive-list-1'>
                      <ul>
                          <li ><a href='#home'>Home</a></li>
                          <li className='resp'><a href='#about'>About us</a></li>
                          <li className='resp'><a href='#product'>Our Products</a></li>
                          <li className='resp' ><a href='#project'>Projects</a></li>
                          <li className='resp'><a href='#service'>Services</a></li>
                          <li className='resp'><a href='#testinomial'>Testinomial</a></li>
                          <li className='resp'><a href='#contact'>Contact</a></li>
                      </ul>
                  </div>
                }
            </nav>
        </div>
            </header>

            <section className='hero-section' id="home">
                 <Hero />
            </section>
            <section className='intro' id="about">
                <About />
            </section>
            <section className='product' id="product">
                <Product />
            </section>
            <section className='videoagri'>
                <AgriLand />
            </section>
            <section className='project' id="project">
                 <Project />
            </section>
            <div className='back-agri'>   
            </div>
            <section className='testinomial' id="testinomial">
                <Testinomial />
            </section>
            <div className='list' id="service" >
                <Quality />
            </div>
            <section className='contact' id="contact">
                <Contact />
            </section>
            <section  className='leader'>
                <Leader />
            </section>
            <section className='footer'>
                <Footer/>
            </section>
            <section className='copyright'>
                    <Copyright />
            </section>
        </div>
    );
};

export default Home;

