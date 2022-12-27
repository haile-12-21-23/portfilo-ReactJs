import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetter from '../AnimatedLetters';
import './index.scss'
import Logo from './Logo';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H', 'a', 'i', 'l', 'e', 'm', 'a', 'r', 'i', 'a', 'm'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 400)
    // }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span> <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />

                        < AnimatedLetter letterClass={letterClass}
                            strArray={nameArray} index={15} />
                        <br />

                        < AnimatedLetter letterClass={letterClass}
                            strArray={jobArray} index={22} /> </h1>
                    <h2 >Frontend Developer /Flutter</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
        </>
    )
};

export default Home