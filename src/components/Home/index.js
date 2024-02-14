import LogoTitle from '../../assets/images/logo-s.png';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone"></div>
      <h1>
        Hi, <br />
        <img src={LogoTitle} alt="developer">
          how are you? 
      </h1>
      <h2>Fullstack Web Developer</h2>
      <Link to="/contact" className="flat-button">Contact Me</Link>

    </div>
  );
};

export default Home;
