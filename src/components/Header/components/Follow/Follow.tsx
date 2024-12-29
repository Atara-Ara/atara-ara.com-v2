import './Follow.sass';
import FollowSVG from './assets/follow.svg'
import Instagram from './assets/instagram.svg'
import TikTok from './assets/tiktok.svg'
import Spotify from './assets/spotify.svg'
import Bandcamp from './assets/bandcamp.svg'
import YouTube from './assets/youtube.svg'

export const Follow = () => {
    return (
        <div className="follow">
            <img src={FollowSVG} alt="Follow" className="follow-svg" />
            <a href="https://www.instagram.com/atara_ara/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@atara_ara" target="_blank" rel="noopener noreferrer">
                <img src={TikTok} alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/channel/UCRQ8erI1G9Ubp-v1nFBsrbA" target="_blank" rel="noopener noreferrer">
                <img src={YouTube} alt="YouTube" />
            </a>
            <a href="https://open.spotify.com/artist/14OyPLu62THKH6fGLtjowq?si=BAjAgd4FSsWdHe9APl00wg" target="_blank" rel="noopener noreferrer">
                <img src={Spotify} alt="Spotify" />
            </a>
            <a href="https://atara-ara.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                <img src={Bandcamp} alt="Bandcamp" />
            </a>
        </div>
    )
};