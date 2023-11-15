// import LogoTitle from '';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div>
        <h1>
          Hi, <br /> I'm
          <img /* src=/*{LogoTitle }*/ alt="developer" />
          lobodan <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / Javscript Expert</h2>

        <Link to="./contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
