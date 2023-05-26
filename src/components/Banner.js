import React from 'react';
//images
import Image from '../assets/about1.png';
//icons
import {FaGithub, FaYoutube, FaTwitter, FaLinkedin, FaDiscord} from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='mx-auto container'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:texxt-[110px]'>
              MANI<span>BHASKAR</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'ReactNative Developer',
                2000,
                'Content Creator',
                2000,
                'Social Media Marketer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p           
            variants={fadeIn('up',0.5)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-8 max-w-max mx-auto lg:mx-0'>As a skilled web developer, I excel in designing and developing applications using the MERN stack. I leverage my expertise in React Native to create exceptional mobile apps for both iOS and Android platforms. In addition, I possess a strong proficiency in blockchain development, allowing me to create decentralized applications with precision and accuracy.
            </motion.p>
            <motion.div 
                      variants={fadeIn('up',0.6)} 
                      initial="hidden" 
                      whileInView={'show'}
                      viewport={{once:false, amount:0.7}}
                      className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button  className='btn btn-lg' >Contact me</button>
              <a href='https://drive.google.com/file/d/1l_PqtzcCPzIqhzFPk9mrK3kh1tD7UtED/view?usp=sharing' className='text-gradient btn-link'>
                My Resume
              </a>
            </motion.div>
            {/*socials*/}
            <motion.div          
            variants={fadeIn('up',0.7)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
             className='flex text-[200p] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://youtu.be/2cKStQybvdc'>
                <FaYoutube />
              </a>
              <a href='https://github.com/Mani-Bhaskar-Edula'>
                  <FaGithub/>
                </a>
                <a href='https://twitter.com/Mani_Bhaskar_'>
                  <FaTwitter/>
                </a>
                <a href='https://www.linkedin.com/in/manibhaskar/'>
                  <FaLinkedin/>
                </a>
                <a href='https://discord.com/Mani_Bhaskar#7340'>
                  <FaDiscord/>
                </a>
            </motion.div>
          </div>
        <motion.div
                  variants={fadeIn('up',0.5)} 
                  initial="hidden" 
                  whileInView={'show'}
                   className='hidden lg:flex flex-1 max-w-[320px] lg:maxx-w-[482px]'>
        <img src={Image} alt=''/>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
