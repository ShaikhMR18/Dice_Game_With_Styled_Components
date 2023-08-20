import Button from '../Button/Button'
import style from './contactForm.module.css'
import {BiMessageDetail} from 'react-icons/bi'
import {MdCall} from 'react-icons/md'
import {HiMail} from 'react-icons/hi'
import servie from "../../assets/Service.svg";
import { useState } from 'react'

const ContactForm = () => {
const [data,setData]=useState({
  name:'',
  email:'',
  text:''
})
  const onSubmit = (event)=>{
    const {name,value}= event.target
    console.log(name,value)
    event.preventDefault();
    setData({
      ...data,
      [name]:value
    });
    console.log(data)
  }
  return (
    <section className={`${style.container}`}>
        <div className={style.contact_form}>
        <div className={style.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<BiMessageDetail fontSize='24px'/>} />
            <Button text="VIA CALL" icon={<MdCall fontSize='24px'/>}/>

        </div>
        <Button text="VIA EMAIL FORM" icon={<HiMail fontSize='24px'/>} isOutLined={true} />
        <form  onSubmit={onSubmit}>
        <div className={style.form_control}>
        <label htmlFor="name">Name</label>
          <input type="text" name='name'  value={data.name} onChange={onSubmit}/>
        </div>

        <div className={style.form_control}>
        <label htmlFor="email">Email</label>
          <input type="email" name='email' value={data.email}  onChange={onSubmit}/>
        </div>
         
        <div className={style.form_control}>
        <label htmlFor="email">Text</label>
          <textarea rows={5} cols={5} name='text'  value={data.text} onChange={onSubmit}/>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
        <Button onSubmit={onSubmit} text="Submit"  />
        </div>
      

        </form>
        </div>
        <div className={style.contactImg}>
<img src={servie} alt="service-img" />
        </div>
    </section>
  )
}

export default ContactForm