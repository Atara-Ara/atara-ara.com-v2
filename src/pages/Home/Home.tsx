import './Home.sass';
import StarsLeft from './assets/stars-left.tsx'
import StarsRight from './assets/stars-right.tsx'
import Arrows from './assets/arrows.tsx'

export const Home = () => {
    return (
        <section className='home'>
            <div className='header'>
                <StarsLeft />
                <h1>NEW SINGLE</h1>
                <StarsRight />
            </div>

            <div className='content'>
                <div className='column-left'>
                    <div>
                        <h2>TALK TO ME</h2>
                        <div className="links">
                            <a href="https://ffm.to/b7jdxdd" target="_blank" rel="noopener noreferrer">
                                Listen<Arrows />
                            </a>
                            <a href="https://www.youtube.com/watch?v=Q9RJJ0GBKnI" target="_blank" rel="noopener noreferrer">
                                Official Music Video<Arrows />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='column-right'></div>
            </div>
        </section >
    );
};
