import React,{useRef} from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn}  from '../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_475ge2a', 'template_ueznk7o', form.current, 'pkz2WpmOsyUbCvTpp')
      .then((result) => {
          console.log(result.text);
          window.alert("I'll reach you shortly");
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text*/}
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex items-center justify-start'>

            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br/> together!
              </h2>
            </div>
            </motion.div>
            {/*form*/}
            <motion.form 
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{once:false, amount:0.3}} 
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'>

              <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='from_name'
              placeholder='Your name'
              />
              <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email_id'
              placeholder='Your mail'
              />
              <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type='text'
              id="message"
              name="message"
              placeholder='Your message'>
              </textarea>
              <button className='btn btn-lg' type='submit' value="Send">Send message</button>
            </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
