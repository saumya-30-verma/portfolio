import React from 'react'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
       
       <h2>Contact Me</h2>

       <p className='contact-text'>I’m always open to new opportunities and collaborations.
        Feel free to reach out!
</p>

    <div className='contact-links'>
    
        <a 
        href="https://www.linkedin.com/in/saumya-verma-5747a117b"
        target='_blank'
        rel='noopener noreferrer'
        >LinkedIn</a>

        <a 
        href="https://github.com/saumya-30-verma"
        target='_blank'
        rel='noopener noreferrer'
        >GitHub</a>

        <a
        href="https://www.fiverr.com/sellers/saumyaverma531/edit"
        target="_blank"
        rel="noopener noreferrer"
        >
        Fiverr
        </a>
    </div>
    </section>
  )
}

export default Contact