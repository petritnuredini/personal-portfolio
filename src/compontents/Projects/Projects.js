import { Link } from 'react-router-dom';
import './Projects.css';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import hashtag from '../../images/hashtag.png';
import auburndreams from '../../images/auburndreams.png';
import putzarbeiten from '../../images/putzarbeiten.png';
import yelpcamp from '../../images/yelpcamp.png';

function Projects() {
  return (
    <div className='Projects' id='projects'>
      <div className='Projects__container'>
        <div className='projects__left' data-aos='fade-right'>
          <p className='projects__left__title'>Latest Works</p>
          <p className='projects__left__subtitle'>
            Perfect solutions for digital experience
          </p>
          <img src={p1} alt='p1' className='projects__img' />
          <img src={hashtag} alt='hashtag' className='projects__img' />
          <img
            src={putzarbeiten}
            alt='putzarbeiten'
            className='projects__img'
            id='putzarbeiten'
          />
          <a href='https://github.com/petritnuredini'>
            <button className='projects__btn'>All Projects</button>
          </a>
          <p className='projects__left__extra'>
            I'M HERE FOR YOU AND I'M READY TO WORK WITH YOU,
            <a href='#contact'>CONTACT ME</a>
          </p>
        </div>
        <div
          className='projects__right'
          data-aos='flip-right'
          data-aos-duration='1000'
          data-aos-delay='500'
        >
          <img src={p2} alt='p2' className='projects__img' />
          <img src={p3} alt='p3' className='projects__img' />
          <img
            src={auburndreams}
            alt='auburndreams'
            className='projects__img'
          />
          <img src={yelpcamp} alt='yelpCamp' className='projects__img' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
