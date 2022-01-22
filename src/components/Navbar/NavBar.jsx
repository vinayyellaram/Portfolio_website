import React, { useRef, useEffect } from 'react'
import '../Navbar/NavBar.css'
import { BsFilePdf } from 'react-icons/bs';
import ResumePdf from '../../assets/Data/Resume_FOR_DEV.pdf'

const NavBar = () => {

    const navbar = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (navbar.current !== null) {
                if (window.scrollY > navbar.current.offsetHeight + 0) {
                    navbar.current.classList.add("active");
                } else {
                    navbar.current.classList.remove("active");
                }
            }
        });
    }, []);

    const v = "<VY />"
    return (
        <div id="Navbar" >
            <nav className='nav' ref={navbar}>

                <div className='logo'>
                    <a href="#"> {v} </a>
                </div>
                <div className="links">
                    <button className='mobile-hamberger'></button>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>

                        <li>
                            <a href="#project">PROJECTS </a>
                        </li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li>
                            <a href={ResumePdf}
                                target="_blank"
                            >RESUME <BsFilePdf size={3} /></a>
                        </li>
                    </ul></div>
            </nav>
        </div>
    )
}

export default NavBar



