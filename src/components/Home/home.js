import LogoTitle from '../../assets/images/B-logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animateletters';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['r', 'i', 'g', 'h', 't'];
  const skillArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillArray}
              index={22}
            />
          </h1>
          <h2 className="skillset">Frontend Developer | Javscript Expert</h2>
          <Link to="./contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
