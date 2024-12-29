import './Navbar.sass';

export const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li><a href="/home">Home</a></li>
                <li><a href="/shows">Shows</a></li>
                <li><a href="/store">Store</a></li>
                <li><a href="/gallery">Gallery</a></li>
            </ul>
        </nav>
    )
};