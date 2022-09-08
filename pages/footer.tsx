import Image from 'next/image';
import fblogo from '../static/fb_logo.svg';
import twlogo from '../static/tw_logo.svg';
import imstalogo from '../static/insta_logo.svg';
import ytlogo from '../static/youtube_logo.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="InfoRow">
        <div className="InfoRow__block Infotext">
          <h3 className="Infotext__title">
            $135 779 836
          </h3>
          <span className="Infotext__text"> 
            Raised Funded
          </span>
        </div>

        <div className="InfoRow__block Infotext">
          <h3 className="Infotext__title">
            12 312
          </h3>
          <span className="Infotext__text">
            Campaigns
          </span>
        </div>

        <div className="InfoRow__block Infotext">
          <h3 className="Infotext__title">
            1 256
          </h3>
          <span className="Infotext__text">
            Temples
          </span>
        </div>

        <div className="InfoRow__block Infotext">
          <h3 className="Infotext__title">
            13 468
          </h3>
          <span className="Infotext__text">
            Users
          </span>
        </div>
      </div>

      <div className="MediaLinks">
        <span className="MediaLinks__title">
          Follow us on social media
        </span>

        <div className="MediaLinks__links">
          <a 
            href="https://uk-ua.facebook.com/"               
            className="SMediaLinks"
          >
            <Image 
              src={fblogo} 
              alt="fblogo"
            />
          </a>

          <a 
            href="https://twitter.com/"
            className="SMediaLinks"
          >
            <Image 
              src={twlogo} 
              alt="twlogo"
            />
          </a>

          <a 
            href="https://www.instagram.com/"
            className="SMediaLinks"
          >
            <Image 
              src={imstalogo} 
              alt="instalogo"
            />
          </a>

          <a 
            href="https://www.youtube.com/"
            className="SMediaLinks"
          >
            <Image 
              src={ytlogo} 
              alt="ytlogo"
            />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
