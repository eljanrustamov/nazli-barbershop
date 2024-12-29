import backgroundImage from '../assets/images/contact.jpeg';
import miniImage from '../assets/images/contact2.png';
import { Instagram, Facebook } from 'react-feather';
import booksy from '../assets/images/booksy.png';

const ContactPage = () => {
  return (
    <section className='h-full relative md:bg-primary-dark'>
      <div className='w-full h-80 md:h-96 relative flex justify-center items-center overflow-hidden shadow-lg'>
        <img
          src={backgroundImage}
          alt='barbershop'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-dark bg-opacity-60' />

        <h1 className='z-10 text-4xl md:text-7xl uppercase text-white'>
          Contact Us
        </h1>
      </div>

      <h3 className='text-center mb-10 mt-14 uppercase font-teko text-2xl md:text-3xl '>
        Lets get in touch with us
      </h3>

      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='px-5 mx-auto flex flex-col gap-7'>
          <div className='flex flex-col border-b pb-4 border-b-dark'>
            <h5 className='flex items-center gap-2 text-xl md:text-2xl text-primary-light font-teko uppercase'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
              Address
            </h5>
            <p className='text-xl md:text-2xl font-body ms-7'>
              Przy Agorze 6, 01-960 Warszawa, Poland
            </p>
          </div>
          <div className='flex flex-col border-b pb-4 border-b-dark'>
            <h5 className='flex items-center gap-2 text-xl md:text-2xl text-primary-light font-teko uppercase'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
              Phone
            </h5>
            <p className='text-xl md:text-2xl  font-body ms-7'>
              +48 572 772 222
            </p>
          </div>
          <div className='flex flex-col border-b pb-4 border-b-dark'>
            <h5 className='flex items-center gap-2 text-xl md:text-2xl  text-primary-light font-teko uppercase'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
              Email
            </h5>
            <p className='text-xl md:text-2xl  font-body ms-7'>
              nazlibarbershop@gmail.com
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h5 className='flex items-center gap-2 text-xl md:text-2xl  text-primary-light font-teko uppercase'>
              Follow Us
            </h5>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/nazlibarbershop'
                target='_blank'
              >
                <Instagram className='secondary w-8 h-8 hover:text-primary-light' />
              </a>
              <a
                href='https://www.facebook.com/nazlibarbershop'
                target='_blank'
              >
                <Facebook className='secondary w-8 h-8 hover:text-primary-light' />
              </a>
              <a
                href='https://booksy.com/en-pl/190120_nazli-barber-shop_barber-shop_3_warszawa#ba_s=ad_1'
                target='_blank'
                className='h-8 txt-white'
              >
                <img
                  src={booksy}
                  alt='booksy'
                  className='w-full h-full text-white'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mt-14 md:mt-0'>
          <img
            src={miniImage}
            alt=''
            className='w-2/4 rotate-3 hover:scale-105 hover:rotate-6 transition-all'
          />
        </div>
      </div>
      <div className='w-screen h-96 mt-20'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1998261843924!2d20.939514412487465!3d52.294227471886096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca29db298b03%3A0x8fd9d3819a5085e4!2sPrzy%20Agorze%206%2C%2001-960%20Warszawa%2C%20Pol%C5%9Fa!5e0!3m2!1saz!2saz!4v1735400561851!5m2!1saz!2saz'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-full'
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
