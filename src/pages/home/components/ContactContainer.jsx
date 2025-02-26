import './ContactContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import mouseScrollImg from '../../../assets/icons/home/mouse-scroll.png';

const ContactContainer = () => {
    return (
        <div className="contact-container section-container">
            <div className="contact-wrapper section-wrapper">
                <div className="mouse-scroll">
                    <img src={mouseScrollImg} alt="" />
                </div>

                <div className="title-header">Contact</div>
                <div className="contact-sub-title">I’m currently available for freelance work</div>
                <div className="contact-lable">Send Me A Message</div>
                <div className="contact-form">
                    <div className="contact-form__item">
                        <div className="contact-form__item-lable">Your name *</div>
                        <input className="contact-form__item-input" placeholder="Enter your name" />
                    </div>
                    <div className="contact-form__item">
                        <div className="contact-form__item-lable">Your email *</div>
                        <input className="contact-form__item-input" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="contact-form">
                    <div className="contact-form__item">
                        <div className="contact-form__item-lable">Your message *</div>
                        <input className="contact-form__item-input" placeholder="Enter your needs" />
                    </div>
                </div>

                <div className="contact-button">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
