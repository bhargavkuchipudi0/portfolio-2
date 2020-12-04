import './header.css';
import { MenuIcon, CrossIcon } from '../../assets/menu';
import { useState } from 'react';

function Header({ headerType }) {
    const [showMenu, setshowMenu] = useState(false);
    var navigate = function (data) {
        ifOnMobile();
        const ele = document.querySelector(`.${data}`);
        ele.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    var ifOnMobile = function() {
        if (window.innerWidth <= 700) {
            setshowMenu(false);
        }
    }
    function List() {
        return (
            <ul className="list">
                <li className="pointer list-item fadeDown-0" onClick={() => { navigate('about') }}><p>About</p></li>
                <li className="pointer list-item fadeDown-1" onClick={() => { navigate('skills') }}><p>Skills</p></li>
                <li className="pointer list-item fadeDown-2" onClick={() => { navigate('experience') }}><p>Experience</p></li>
                <li className="pointer list-item fadeDown-3" onClick={() => { navigate('work') }}><p>Work</p></li>
                <li className="pointer list-item fadeDown-4" onClick={() => { navigate('footer') }}><p>Contact</p></li>
            </ul>
        );
    }

    return (
        <header className={`header flex ${headerType === 1 ? 'fixed' : headerType === 0 ? 'hide' : null}`}>
            <nav className="nav container">
                {List()}
            </nav>
            <nav className="sm">
                <nav className="ham-menu" onClick={() => { setshowMenu(!showMenu) }}>
                    <MenuIcon className="menu-bars" width={'35px'} />
                </nav>
                <div className={`menu-list ${showMenu ? 'disflex' : null}`}>
                    <div className="cross" onClick={() => { setshowMenu(!showMenu) }}>
                        <CrossIcon width={'35px'} />
                    </div>
                    <div className="nav-sm-list">
                        {List()}
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header;