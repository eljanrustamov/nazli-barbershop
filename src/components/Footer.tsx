import logo from '../assets/images/logo.png';
import booksy from '../assets/images/booksy.png';
import { Instagram, Facebook } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routeConstants';

const Footer = () => {
  return (
    <footer className='flex flex-col bg-black'>
      <div className='grid gap-5 md:grid-cols-3 py-20 md:py-10'>
        <div className='flex justify-center items-center'>
          <ul className='flex gap-10 font-teko text-2xl'>
            <li>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.SERVICES}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.CONTACT}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center'>
          <NavLink to={ROUTES.HOME}>
            <img src={logo} alt='logo' className='w-32 h-32' />
          </NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex gap-5 font-teko text-2xl'>
            <li className='flex justify-center items-center'>
              <a
                href='https://www.instagram.com/nazlibarbershop'
                target='_blank'
              >
                <Instagram className='secondary w-6 h-6 hover:text-primary-light' />
              </a>
            </li>
            <li className='flex justify-center items-center'>
              <a
                href='https://www.facebook.com/nazlibarbershop'
                target='_blank'
              >
                <Facebook className='secondary w-6 h-6 hover:text-primary-light' />
              </a>
            </li>
            <li className='h-8'>
              <a
                href='https://booksy.com/en-pl/190120_nazli-barber-shop_barber-shop_3_warszawa#ba_s=ad_1'
                target='_blank'
              >
                <img src={booksy} alt='booksy' className='w-full h-full' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='p-5 border-t border-stone-800'>
        <p className='text-center'>Copyright @ 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
