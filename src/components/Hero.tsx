import banner from '../assets/images/barbershop-1.png';
import Lottie from 'lottie-react';
import barberAnimation from '../assets/animations/arrow-down.json';
const Hero = () => {
  return (
    <section className='relative h-screen flex items-center justify-center text-center px-5'>
      <div className='absolute inset-0 bg-dark bg-opacity-70'>
        <img
          src={banner}
          alt='barbershop'
          className='absolute inset-0 w-full h-full object-cover bg-cover bg-center z-[-1]'
        />
      </div>

      <div className='relative flex flex-col items-center '>
        <h1 className='font-teko uppercase text-6xl sm:text-7xl md:text-8xl'>
          Welcome to Nazli Barbershop
        </h1>
        <p className='font-body uppercase tracking-wider mt-4 sm:text-xl'>
          Experience the best grooming and haircut services in town.
        </p>
        <a
          href='/'
          className='block mt-8 px-4 py-2 md:px-6 md:py-3 bg-primary-light text-primary-dark font-teko uppercase tracking-wider text-xl md:text-2xl hover:bg-primary-dark hover:text-light transition-all'
        >
          Book Now
        </a>
      </div>
      <Lottie
        autoplay
        loop
        animationData={barberAnimation}
        className='w-32 h-32 md:w-44 md:h-44 text-light absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      />
    </section>
  );
};

export default Hero;
