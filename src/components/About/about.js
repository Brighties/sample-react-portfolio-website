import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animateletters';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faGitAlt,
  faJsSquare,
  faReact,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p className="about-me-content">
            I'm a very ambitious frontend developer looking for a role in IT
            compant with the opportunity to work with the latest technologies on
            challenging and diverse projects
          </p>
          <p className="about-me-content">
            I'm quietly confident, naturally curious, and mastering the art of
            critical problem solving
          </p>
        </div>

        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A409" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
