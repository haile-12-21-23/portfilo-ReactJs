import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
const SideBar = () => {
        return (
                <div className="nav-bar">
                        <Link className="logo" to={"/"}>
                                <img src={LogoS} alt="Logo" />
                                <img className="sub-logo" src={logoSubtitle} alt="Hailemaraim" />
                        </Link>
                        <nav>
                                <NavLink exact="true" activeclassname="active" to="/">
                                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                                </NavLink>
                                <NavLink activeclassname="active" className="about-link" to="/about">
                                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                                </NavLink>
                                <NavLink

                                        activeclassname="active"
                                        className="contact-link"
                                        to={"/contact"}>

                                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />{' '}
                                </NavLink>
                        </nav>
                        <ul>
                                <li>
                                        <a href='https://www.linkedin.com/in/haile1221/' target="_blank" rel='noreferrer' >
                                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                                        </a>
                                </li>
                                <li>
                                        <a href='https://www.github.com/haile-12-21-23' target="_blank" rel='noreferrer' >
                                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                        </a>
                                </li>
                                <li>
                                        <a href='https://t.me/hailemariam12' target="_blank" rel='noreferrer' >
                                                <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                                        </a>
                                </li>

                        </ul>
                </div>
        )
}
export default SideBar
