import React, { useState } from 'react'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { logout as logoutApi } from '@/api/auth.api'
import { useAuth } from '@/store/auth.store'

const Header = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 모바일 메뉴 상태

  const menus = [
    { name: '내 작성글 ↗', link: '/app/posts/all' },
    { name: '내 프로필 ↗', link: '/app/profile' },
    { name: '설정 ↗', link: '/app/setting' },
    { name: '태그 관리 ↗', link: '/app/tags' }
  ]

  const handleLogout = async () => {
    try {
      await logoutApi()
      logout()
      navigate("/")
    } catch (error) {
      alert(error.message || '로그아웃 오류')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="global-header">
      <div className="inner">
        <h1>
          <Link to="/app">
            <img src="/images/Logo_index.png" alt="VAIONITY" />
          </Link>
        </h1>
        
        <div className="right">
          {/* 데스크탑에서만 보이는 메뉴 */}
          <ul className="desktop-menu">
            {menus.map((menu, i) => (
              <li key={i}>
                <Link to={menu.link} className="nav-link">{menu.name}</Link>
              </li>
            ))}
          </ul>
          <button className="logout-btn desktop-menu" onClick={handleLogout}>로그아웃</button>

          {/* 모바일 햄버거 버튼 (800px 이하에서만 노출) */}
          <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* 모바일 확장 메뉴 */}
      <div className={`mobile-dropdown ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          {menus.map((menu, i) => (
            <li key={i}>
              <Link to={menu.link} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {menu.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="mobile-logout-btn" onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header