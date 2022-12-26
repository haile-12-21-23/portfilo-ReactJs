import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I am
                    <img src={LogoTitle} alt="Developer" />

                    Hailemariam
                    <br />
                    Web Developer </h1>
                <h2 >Frontend Developer /Flutter</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
};

export default Home