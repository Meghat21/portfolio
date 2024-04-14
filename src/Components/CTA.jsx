import { Link } from "react-router-dom";
import {socialLinks} from '../Constants/index';


const CTA = () => {
  return (
    <div>

    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>

      <h5 className='text-md mt-3'>Get to know me more</h5>

        <div className='mt-16 flex flex-wrap gap-12'>
          {socialLinks.map((social) => (
            <Link to={social.link}>
            <div className='block-container w-10 h-10' key={social.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            </Link>
          ))}
        </div>

    </div>
  );
};

export default CTA;