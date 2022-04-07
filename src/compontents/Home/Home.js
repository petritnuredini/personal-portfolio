import './Home.css';
import hero from '../../images/hero.png';
import react from '../../images/react-brands.png';
import node from '../../images/node-js-brands.png';
import python from '../../images/python-brands.png';

function Home() {
  return (
    <div className='Home' id='home'>
      <div className='Home__container'>
        <div className='home__left' data-aos='fade-right' data-aos-delay='500'>
          <p className='home__left__subtitle'>Front End Developer</p>
          <div className='home__left__title'>
            <p>Young Engineer</p>
          </div>

          <div className='home__left__info'>
            <p>Eager to Learn, Work </p>
            <p>and promote self development.</p>
          </div>
          <a href='#contact' className='home__left__a'>
            let's chat!
          </a>
        </div>
        <div className='home__right' data-aos='fade-left' data-aos-dealy='1000'>
          <img src={hero} alt='hero' className='home__right__hero' />
          <div className='home__right__circle home__right__react'>
            <img src={react} alt='react' />
          </div>
          <div className='home__right__circle home__right__node'>
            <img src={node} alt='react' />
          </div>
          <div className='home__right__circle home__right__python'>
            <img src={python} alt='react' />
          </div>
        </div>
        <div
          className='home__miniInfo'
          data-aos='fade-up'
          data-aos-delay='1500'
        >
          <p className='info__number'>2</p>
          <p className='info__desc'>years experience</p>
          <p className='info__number'>20+</p>
          <p className='info__desc'>
            projects completed in different countries
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
