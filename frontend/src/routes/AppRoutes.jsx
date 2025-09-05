import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import '../styles/auth.css'

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system')

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}

const AuthLayout = ({ title, subtitle, children }) => {
  const [theme, setTheme] = useTheme()

  const cycleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark'))
  }

  const themeLabel = theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System'

  return (
    <div className="auth-layout">
      <div className="card">
        <div className="header">
          <div>
            <div className="title">{title}</div>
            {subtitle ? <div className="subtitle">{subtitle}</div> : null}
          </div>
          <button type="button" className="theme-toggle" onClick={cycleTheme} aria-label="Toggle theme">
            {themeLabel}
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

const UserRegister = () => {
  return (
    <AuthLayout title="Create your account" subtitle="User">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="label" htmlFor="user-fullName">Full name</label>
          <input id="user-fullName" className="input" type="text" placeholder="Jane Doe" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-email">Email</label>
          <input id="user-email" className="input" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-password">Password</label>
          <input id="user-password" className="input" type="password" placeholder="••••••••" required />
        </div>
        <div className="actions">
          <button className="button" type="submit">Create account</button>
          <Link className="link" to="/user/login">Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const UserLogin = () => {
  return (
    <AuthLayout title="Welcome back" subtitle="User">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="label" htmlFor="user-login-email">Email</label>
          <input id="user-login-email" className="input" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-login-password">Password</label>
          <input id="user-login-password" className="input" type="password" placeholder="••••••••" required />
        </div>
        <div className="actions">
          <button className="button" type="submit">Sign in</button>
          <Link className="link" to="/user/register">Create account</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const FoodPartnerRegister = () => {
  return (
    <AuthLayout title="Create your account" subtitle="Food Partner">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="label" htmlFor="fp-fullName">Full name</label>
          <input id="fp-fullName" className="input" type="text" placeholder="Restaurant Owner" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-email">Email</label>
          <input id="fp-email" className="input" type="email" placeholder="you@business.com" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-password">Password</label>
          <input id="fp-password" className="input" type="password" placeholder="••••••••" required />
        </div>
        <div className="actions">
          <button className="button" type="submit">Create account</button>
          <Link className="link" to="/foodPartner/login">Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const FoodPartnerLogin = () => {
  return (
    <AuthLayout title="Welcome back" subtitle="Food Partner">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label className="label" htmlFor="fp-login-email">Email</label>
          <input id="fp-login-email" className="input" type="email" placeholder="you@business.com" required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-login-password">Password</label>
          <input id="fp-login-password" className="input" type="password" placeholder="••••••••" required />
        </div>
        <div className="actions">
          <button className="button" type="submit">Sign in</button>
          <Link className="link" to="/foodPartner/register">Create account</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user/login" replace />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/foodPartner/register" element={<FoodPartnerRegister />} />
        <Route path="/foodPartner/login" element={<FoodPartnerLogin />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
