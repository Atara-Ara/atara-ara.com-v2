import './Follow.sass';
import FollowSVG from './assets/follow.tsx'
import Instagram from './assets/instagram.tsx'
import TikTok from './assets/tiktok.tsx'
import Spotify from './assets/spotify.tsx'
import Bandcamp from './assets/bandcamp.tsx'
import YouTube from './assets/youtube.tsx'

export const Follow = () => {
    return (
        <div className="follow">
            <FollowSVG className="follow-svg" />
            <a href="https://www.instagram.com/atara_ara/" target="_blank" rel="noopener noreferrer">
                <Instagram />
            </a>
            <a href="https://www.tiktok.com/@atara_ara" target="_blank" rel="noopener noreferrer">
                <TikTok />
            </a>
            <a href="https://www.youtube.com/channel/UCRQ8erI1G9Ubp-v1nFBsrbA" target="_blank" rel="noopener noreferrer">
                <YouTube />
            </a>
            <a href="https://open.spotify.com/artist/14OyPLu62THKH6fGLtjowq?si=BAjAgd4FSsWdHe9APl00wg" target="_blank" rel="noopener noreferrer">
                <Spotify />
            </a>
            <a href="https://atara-ara.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                <Bandcamp />
            </a>
        </div>
    )
};