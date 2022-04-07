import './Testimonials.css';
import star from '../../images/star-solid.png';
import quote from '../../images/quote-right-solid.png';
import a1 from '../../images/a1.png';
import a2 from '../../images/a2.png';
import a3 from '../../images/a3.png';

function Testimonials() {
  return (
    <div className='Testimonials'>
      <div className='Testimonials__container'>
        <div className='testimonials__top'>
          <p className='testimonials__title'>Testimonials</p>
          <p className='testimonials__subtitle'>What Clients say about me</p>
        </div>
        <div
          className='testimonials__card'
          data-aos='zoom-in'
          data-aos-duration='1500'
          data-aos-delay='500'
        >
          <div className='testimonials__rating'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <p>5.0 Rating</p>
          </div>
          <img src={quote} alt='quote' className='testimonials__quote' />
          <div className='testimonials__card__info'>
            From the start of the project, through to completion, Petrit
            supported us and exceeded our expectations in every way. Not only
            was our experience personal and friendly, his ability to identify
            and present our key messages in an imaginative and creative way gave
            us a huge amount of confidence in him. In many ways Petrit
            understood our client's website needs better than we did and he
            complimented our vision perfectly. He's reliable, professional and
            easy to work with. I can't recommend him highly enough and we look
            forward to continuing our working relationship together.
          </div>
        </div>
        <div
          className='testimonials__people__container'
          data-aos='fade-up-right'
          data-aos-duration='1500'
          data-aos-delay='500'
        >
          <div className='testimonials__people'>
            <div className='testimonials__left'>
              <img src={a1} alt='a1' className='testimonials__Avatar' />
            </div>

            <div className='testimonials__people__right'>
              <p className='testimonials__name'>Agon Halili</p>
              <p className='testimonials__company'>
                CEO Founder <span>Hashtag Agency</span>
              </p>
            </div>
          </div>

          <div className='testimonials__people'>
            <div className='testimonials__left'>
              <img src={a2} alt='a2' className='testimonials__Avatar' />
            </div>

            <div className='testimonials__people__right'>
              <p className='testimonials__name'>Erion Zariqi</p>
              <p className='testimonials__company'>
                Manager <span>Hashtag Agency</span>
              </p>
            </div>
          </div>

          <div className='testimonials__people'>
            <div className='testimonials__left'>
              <img src={a3} alt='a2' className='testimonials__Avatar' />
            </div>

            <div className='testimonials__people__right'>
              <p className='testimonials__name'>Ndriçim Sadiku</p>
              <p className='testimonials__company'>
                Software Developer <span>Check24</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
