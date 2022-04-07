import './About.css';
import design from '../../images/bezier-curve-solid.png';
import code from '../../images/code-solid.png';
import target from '../../images/crosshairs-solid.png';

function About() {
  return (
    <div className='About' id='about'>
      <div className='about__left'>
        <div className='about__cards'>
          <div
            className='about__card'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='card__top'>
              <p className='card__title'>Design</p>
              <img src={design} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>
              Create Digital Products with unique ideas
            </p>
            <p className='card__link'>20 projects</p>
          </div>
          <div
            className='about__card'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='card__top'>
              <p className='card__title'>Front-End</p>
              <img src={code} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>
              I develop front-end with coding super smooth
            </p>
            <p className='card__link'>53 projects</p>
          </div>
          <div
            className='about__card'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='card__top'>
              <p className='card__title'>SEO</p>
              <img src={target} className='card__icon' alt='' />
            </div>
            <p className='card__desc'>Boost your business with SEO optimize</p>
            <p className='card__link'>5 projects</p>
          </div>
        </div>
      </div>
      <div className='about__right'>
        <p className='about__subtitle'>Introduce</p>
        <p className='about__title'>Hello I'm Petrit Nuredini</p>
        <p className='about__info'>
          Every Great design begin with an even better story
        </p>
        <p className='about__desc'>
          In the past years I was involved in various roles of manufacturing
          industry, always related to design and decor. I have a proven
          experience in a lot of design tools like Photoshop, CorelIDraw,
          Illustrator, Autocad, Fusion360, Social Media Manager. But, my passion
          about technology never left me rest after my work schedule, I always
          learn and enjoy experimenting with front-end technologies which is my
          life goal and I always try to improve my front-end skills so one day I
          can turn my greatest passion about tech into a profession. <br />
          In Web Development I am proficient in HTML, CSS, Bootstrap,
          JavaScript, ReactJS, NodeJS, MongoDB
        </p>
      </div>
    </div>
  );
}

export default About;
