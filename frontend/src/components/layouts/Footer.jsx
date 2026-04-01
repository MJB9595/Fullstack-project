import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <ul className="footer-links">
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>문의</li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} VAIONITY · BY MJB</p>
      </div>
    </footer>
  )
}

export default Footer