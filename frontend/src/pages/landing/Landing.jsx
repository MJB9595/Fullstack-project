import React from 'react'
import './Landing.scss'
import Button from '@/components/ui/Button'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <div className="landing-bg">
        <div className="bg-track">
          <div className='bg-item'>
            <img src="/images/bg-vaio.png" alt="bg" />
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="t-wrap">
          <img src="/images/Logo.png" alt="logo text" />
          <h2>
            <img src="/images/Logo_Text.png" alt="logo" />
          </h2>
          <p>
            <span className="vaio-font">VAIO</span> 기술부터 최신 하드웨어까지 - <span className="vaio-font">VAIONITY</span>
          </p>
        </div>
        <NavLink to="/login">
          <Button text='시작하기' className='intro' icons={true}/>
        </NavLink>
     
      </div>
    </section>
  )
}

export default Landing