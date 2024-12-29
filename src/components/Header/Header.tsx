import './Header.sass';
import { Navbar } from './components/Navbar';
import Logo from './assets/logo.svg';
import { Follow } from './components/Follow';

export const Header = () => {
    return (
        <header className="desktop">
            <Navbar />
            <img src={Logo} alt="Atara Ara Logo" className="logo" />
            <Follow />
        </header>
    );
};
