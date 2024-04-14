import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../Components/Loader'
import { Fox } from '../models/Fox'
import useAlert from '../Hooks/useAlert'
import Alert from '../Components/Alert'

const Contact = () => {
  const[form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const formRf=useRef()
  const[loading,setLoading]=useState(false)
  const[success,setsuccess]=useState(false)
  const[currentAnimation,setcurrentAnimation]=useState('idle')
  const{ alert, showAlert, hideAlert }=useAlert();

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    setsuccess(false)
    setcurrentAnimation('run')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Megha",
        from_email:form.email,
        to_email:"meghasahu2023@gmail.com",
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setLoading(false);
      setForm({
        name:'',
        email:'',
        message:''
      })
      showAlert({show:true,text:"Message sent successfully",type:'success'})
      setTimeout(()=>{
        hideAlert();
        setcurrentAnimation('idle');
      },[3000])
      // setsuccess(true)
    }).catch((error)=>{
      setLoading(false)
      setcurrentAnimation('idle')
      console.log(error)
      showAlert({show:true,text:"Didnt received your message,could you try again",type:'danger'})
    })

  }
  const handleFocus=()=>setcurrentAnimation('walk');
  const handleBlur=()=>setcurrentAnimation('idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className='hard-text'>Get In touch</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label htmlFor="" className='text-black-500 font-semibold'>Name</label>
          <input type="text" name='name' placeholder='Megha' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className='border border-black rounded-lg p-3'/>

          <label htmlFor="" className='text-black-500 font-semibold'>Email</label>
          <input type="text" name='email' placeholder='Megha@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className='border border-black rounded-lg p-3'/>

          <label htmlFor="" className='text-black-500 font-semibold'>Message</label>
          <textarea name='message' placeholder='Let me know ,How can I help you?' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className='border border-black rounded-lg p-3'/>

          <button disabled={loading} type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur}>{loading ? 'Sending you message...' : "Send Message"}</button>
          {/* {success ? <p className='text-green-500 text-lg'>Successfully sent your message</p> : ''} */}
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h=[350px]">
        <Canvas
        camera={{position:[0,0,5],fov:75,near:0.1,far:1000
        }}>
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Fox position={[0.5,0.35,0]}
            currentAnimation={currentAnimation}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
