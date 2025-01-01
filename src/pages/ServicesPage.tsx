import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import backgroundImage from '../assets/images/contact.jpeg';
import data from '../data/services.json';
const ServicesPage = () => {
  return (
    <section className='bg-primary-black'>
      <div className='w-full h-80 md:h-96 relative flex justify-center items-center overflow-hidden shadow-lg'>
        <img
          src={backgroundImage}
          alt='barbershop'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-dark bg-opacity-60' />

        <h1 className='z-10 text-4xl md:text-7xl uppercase text-white'>
          Services & Prices
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center py-28'>
        <h3 className='text-center mb-10 uppercase font-teko text-2xl md:text-3xl '>
          <span className='text-primary'>CHOOSE THE SERVICE</span> YOU WOULD
          LIKE TO USE
        </h3>
        <TabGroup className='w-full md:w-[740px] lg:w-[990px] flex flex-col justify-center items-center'>
          <TabList className='flex gap-7 lg:gap-20 border-b px-6 lg:px-10 pb-2 lg:pb-4'>
            {data.services.map((services) => (
              <Tab className='data-[selected]:text-primary-light data-[hover]:text-primary-light outline-none font-heading text-lg md:text-xl lg:text-2xl uppercase '>
                {services.category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className='w-full px-8 lg:px-14 mt-6'>
            {data.services.map((services) => (
              <TabPanel className='grid md:grid-cols-2 gap-10'>
                <ul className='flex flex-col gap-5'>
                  {services.items.map((item) => (
                    <li className='flex items-center justify-between'>
                      <div>
                        <h5 className='text-lg md:text-xl'>{item.name}</h5>
                        <p className='text-gray-600 text-sm md:text-base'>
                          {item.duration}
                        </p>
                      </div>
                      <p className='md:min-w-14 font-teko text-3xl md:text-4xl text-primary'>
                        {item.price}
                      </p>
                    </li>
                  ))}
                  <li className='mt-4 text-center md:text-start'>
                    <a
                      href='https://booksy.com/en-pl/190120_nazli-barber-shop_barber-shop_3_warszawa#ba_s=ad_1'
                      target='_blank'
                      className='px-4 py-2 bg-primary-light text-dark text-xl font-heading'
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
                <div className='bg-red-500'>
                  <img
                    src={services.img}
                    alt='barbershop'
                    className='h-full object-cover'
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default ServicesPage;
