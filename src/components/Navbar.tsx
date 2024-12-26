import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routeConstants';
import logo from '../assets/images/logo.png';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent sticky top-0 z-50 transition-all border-b border-transparent${
        isScrolled
          ? 'shadow-lg border-b border-primary-dark backdrop-blur-sm'
          : ''
      }`}
    >
      <div className='container mx-auto px-4 flex justify-between items-center h-32'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <NavLink to={ROUTES.HOME} className='hover:text-primary-light '>
            <img src={logo} alt='' className='w-36 h-36' />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className='lg:hidden' onClick={() => setIsSidebarOpen(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-9 hover:text-primary-light'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>

        {/* Nav Menu Desktop */}
        <div className='hidden lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto'>
          <ul className='flex flex-col lg:flex-row items-center gap-2 lg:gap-6 lg:space-x-4 space-y-2 lg:space-y-0 mt-4 lg:mt-0 font-teko text-xl tracking-wider'>
            <li>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.SERVICES}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                OUR SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.CONTACT}
                className={({ isActive }) =>
                  isActive ? 'text-primary-light' : 'hover:text-primary-light'
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to='https://booksy.com/pl-pl/'
                className='px-4 py-2 rounded bg-primary-light text-dark'
              >
                BOOK NOW
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sidebar (Mobile) */}
        <Transition show={isSidebarOpen}>
          <Dialog
            onClose={() => setIsSidebarOpen(false)}
            className='relative z-50 lg:hidden'
          >
            <TransitionChild>
              <DialogBackdrop className='fixed inset-0 bg-black bg-opacity-50 transition duration-300 data-[closed]:bg-opacity-0' />
            </TransitionChild>

            <TransitionChild>
              <div className='fixed z-[51] inset-0 flex w-screen items-center justify-center p-4 transition duration-300 data-[closed]:opacity-0'>
                <TransitionChild>
                  <DialogPanel className='h-screen absolute top-0 right-0 bg-primary-dark transition duration-300 data-[closed]:translate-x-full'>
                    <DialogTitle className='border-b border-gray-950 px-6 flex justify-between items-center gap-44'>
                      <NavLink to={ROUTES.HOME}>
                        <img src={logo} alt='logo' className='w-24 h-24' />
                      </NavLink>
                      <button onClick={() => setIsSidebarOpen(false)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='size-9 hover:text-primary-light'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18 18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </DialogTitle>
                    <ul className='flex flex-col justify-center space-y-5 mt-7 mx-10 font-teko text-2xl tracking-wider'>
                      <li onClick={() => setIsSidebarOpen(false)}>
                        <NavLink
                          to={ROUTES.HOME}
                          className={({ isActive }) =>
                            isActive
                              ? 'text-primary-light'
                              : 'hover:text-primary-light'
                          }
                        >
                          HOME
                        </NavLink>
                      </li>

                      <li onClick={() => setIsSidebarOpen(false)}>
                        <NavLink
                          to={ROUTES.SERVICES}
                          className={({ isActive }) =>
                            isActive
                              ? 'text-primary-light'
                              : 'hover:text-primary-light'
                          }
                        >
                          OUR SERVICES
                        </NavLink>
                      </li>
                      <li onClick={() => setIsSidebarOpen(false)}>
                        <NavLink
                          to={ROUTES.CONTACT}
                          className={({ isActive }) =>
                            isActive
                              ? 'text-primary-light'
                              : 'hover:text-primary-light'
                          }
                        >
                          CONTACT
                        </NavLink>
                      </li>
                      <li onClick={() => setIsSidebarOpen(false)}>
                        <NavLink
                          to='https://booksy.com/pl-pl/'
                          className='px-4 py-2 rounded bg-primary-light text-dark'
                        >
                          BOOK NOW
                        </NavLink>
                      </li>
                    </ul>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </TransitionChild>
          </Dialog>
        </Transition>
      </div>
    </nav>
  );
};

export default NavBar;
