import './contact.scss';
import AnimatedLetters from '../AnimatedLetters/animateletters';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';

const Contact = () => {
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p className="contact-content">
            I am interested in building heavy duty web apps and ambitious about
            building large projects. Moreover if you have any questions, or
            request, don't hesitate to contact me using the form below:
          </p>

          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="full-width">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li className="full-width">
                  <textarea name="message" placeholder="Message" required />
                </li>
                <button className="contact-button"> SEND </button>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
