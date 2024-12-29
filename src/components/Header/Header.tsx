import './Header.sass';
import { Navbar } from './components/Navbar';
import Logo from './assets/logo.js';
import { Follow } from './components/Follow';

export const Header = () => {
    return (
        <header className="desktop">
            <Navbar />
            <Logo className="logo" />
            <Follow />
        </header>
    );
};
