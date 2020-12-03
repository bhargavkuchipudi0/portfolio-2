import './header.css';
import {MenuIcon, CrossIcon} from '../../assets/menu';
import {useState} from 'react';

function Header() {
    const [showMenu, setshowMenu] = useState(false);
    return (
        <header className="header flex">
            <nav className="nav container">
                <ul className="list">
                    <li className="list-item fadeDown-0"><a href="#about">About</a></li>
                    <li className="list-item fadeDown-1"><a href="#skills">Skills</a></li>
                    <li className="list-item fadeDown-2"><a href="#experience">Experience</a></li>
                    <li className="list-item fadeDown-3"><a href="#work">Work</a></li>
                    <li className="list-item fadeDown-4"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav className="sm">
                <nav className="ham-menu" onClick={() => {setshowMenu(!showMenu)}}>
                    <MenuIcon className="menu-bars" width={'35px'} />
                </nav>
                <div className={`menu-list ${showMenu ? 'disflex' : null}`}>
                    <div className="cross" onClick={() => {setshowMenu(!showMenu)}}>
                        <CrossIcon width={'35px'}/>
                    </div>
                    <div className="nav-sm-list">
                        <ul className="list">
                            <li className="list-item fadeDown-0"><a href="#about">About</a></li>
                            <li className="list-item fadeDown-1"><a href="#skills">Skills</a></li>
                            <li className="list-item fadeDown-2"><a href="#experience">Experience</a></li>
                            <li className="list-item fadeDown-3"><a href="#work">Work</a></li>
                            <li className="list-item fadeDown-4"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;