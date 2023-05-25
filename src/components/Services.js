import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

const services=[
  {
    name:'Web Developer',
    description:
    'Developed a web application that connects all medical shops and provides real-time information on availability of medicines.',
    link:`http://easymed.great-site.net/?i=1`,
  },
  {
    name:'Sales Strategist',
    description:
    'As a young sales strategist, I proved my business acumen by selling electronic lanterns with high profitability.',
    link:'https://www.linkedin.com/posts/mani-bhaskar-9468a51b5_memory-of-selling-the-lights-on-street-when-activity-7053606403512434689-QtjX?utm_source=share&utm_medium=member_desktop',
  },
  {
    name:'Blockchain Developer',
    description:
    'Secured the private data of users on social media platforms by using private key encryption.',
    link:`https://blockchain-comment.netlify.app/`,
  },
  {
    name:'Mentor',
    description:
    'Mentored and coached over 200 students in learning C++, data structures and application development.',
    link:`https://www.linkedin.com/posts/mani-bhaskar-9468a51b5_activity-7053233471640518657-vpwg?utm_source=share&utm_medium=member_desktop`,
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div 
           variants={fadeIn('right',0.3)} 
           initial="hidden" 
           whileInView={'show'}
           viewport={{once:false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I am an application developer on react platform.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>

          <motion.div
           variants={fadeIn('left',0.5)} 
           initial="hidden" 
           whileInView={'show'}
           viewport={{once:false, amount:0.3}}
           >
            {/*services*/}
            <div className='flex-1'>
              <div>
                {services.map((service,index)=>{
                  //destruction service
                  const {name,description,link}=service;
                  return (
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' kay={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight/>
                        </a>
                        <a href='#' className='text-gradient text-sm'>Learn More</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
