import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./join.css"


const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
    e.preventDefault();
    if(form.current.value===''){
      return alert("enter Email")
    }

    emailjs.sendForm('service_up3x1td', 'template_qp1abjn', form.current, '1FyGhZ0G70VnnNtJ8')
      .then((result) => {
           alert(result.text);
      }, (error) => {
           alert(error.text);
      });
       


      
  };
  return (
    <div className='join' id='join-us'>
       <div className='left-j'>
        <hr/>
        <div>
            <span className='stroke-text'>Ready To </span>
            <span>Level up</span>
        </div>
        <div>
            <span>your  body</span>
            <span className='stroke-text'> with us?</span>
        </div>

       </div>
       <div className='right-j'>
        <form className='email-container' onSubmit={sendEmail} ref={form}>
            <input ref={form} type="email" placeholder='Enter your Email'
            name="user_email"/>
            <button className='btn btn-j' type='submit'>Join Now</button>
        </form>
       </div>
    </div>
  )
}

export default Join
