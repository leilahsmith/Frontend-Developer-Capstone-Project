import React, { useState } from 'react';
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served 
                    with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>123 Address Way, <br>
                    </br>Chicago, IL 60131<br/>
                    (773) 123-1234<br/>
                    clientservices@littlelemon.com
                    </p>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer;