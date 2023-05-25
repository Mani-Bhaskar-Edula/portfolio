import React from 'react';
//counterup
import CountUp from 'react-countup';
//intersection observer hook
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';

const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top'>
          </motion.div>

          <motion.div  
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a freelance application Developer with over 3 years of experience</h3>
            <p className='mb-6'>As a proficient web developer, I specialize in the design and development of applications utilizing the MERN stack, showcasing my extensive skills in this domain. My expertise in React Native enables me to craft exceptional mobile applications for both the iOS and Android platforms, thereby demonstrating my aptitude in mobile application development. Furthermore, I possess a formidable aptitude in blockchain development, allowing me to create decentralized applications with meticulous attention to detail and unparalleled accuracy.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

                <div>
              <div className='text-[40px] font-teritiary text-gradient mb-2'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
                </div>
                </div>

                <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={8} duration={8}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
                </div>

                <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={10}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  satisfied <br/>
                  Clients
                </div>
                </div>

            </div>

            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                This is My Portfolio
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
