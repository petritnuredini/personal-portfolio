import './Footer.css';
import linkedin from '../../images/linkedin-brands.png';
import github from '../../images/github-brands.png';
import facebook from '../../images/facebook-brands.png';
import twitter from '../../images/twitter-brands.png';
import instagram from '../../images/instagram-brands.png';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='footer__rights'>
        <p className='footer__name'>
          <span>Petrit</span> Nuredini
        </p>
        <p className='footer__copyrights'>&copy; All Rights Reserved!</p>
      </div>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/petritnuredini/'>
          <img src={linkedin} alt='' className='footer__socials__icons' />
        </a>
        <a href='https://www.github.com/petritnuredini'>
          <img src={github} alt='' className='footer__socials__icons' />
        </a>
        <a href='https://www.facebook.com/pnuredini'>
          <img src={facebook} alt='' className='footer__socials__icons' />
        </a>
        <a href='https://twitter.com/pnuredini'>
          <img src={twitter} alt='' className='footer__socials__icons' />
        </a>
        <a href='https://instagram.com/petrit.nuredini'>
          <img src={instagram} alt='' className='footer__socials__icons' />
        </a>
      </div>
    </div>
  );
}
