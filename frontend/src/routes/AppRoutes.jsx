import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import api from '../api/client'

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="auth-layout">
      <div className="card">
        <div className="header">
          <div>
            <div className="title">{title}</div>
            {subtitle ? <div className="subtitle">{subtitle}</div> : null}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

const UserRegister = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.fullName || !form.email || !form.password) {
      setError('All fields are required')
      return
    }
    try {
      setLoading(true)
      await api.post('/api/auth/user/register', form)
      navigate('/user/login')
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create your account" subtitle="User">
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label className="label" htmlFor="user-fullName">Full name</label>
          <input id="user-fullName" name="fullName" className="input" type="text" placeholder="Jane Doe" value={form.fullName} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-email">Email</label>
          <input id="user-email" name="email" className="input" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-password">Password</label>
          <input id="user-password" name="password" className="input" type="password" placeholder="••••••••" value={form.password} onChange={onChange} required />
        </div>
        {error ? <div className="hint" role="alert" style={{ color: 'crimson' }}>{error}</div> : null}
        <div className="actions">
          <button className="button" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
          <Link className="link" to="/user/login">Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const UserLogin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) {
      setError('Email and password are required')
      return
    }
    try {
      setLoading(true)
      await api.post('/api/auth/user/login', form)
      navigate('/foodPartner/login') // navigate to a different page or dashboard; adjust as needed
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Welcome back" subtitle="User">
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label className="label" htmlFor="user-login-email">Email</label>
          <input id="user-login-email" name="email" className="input" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="user-login-password">Password</label>
          <input id="user-login-password" name="password" className="input" type="password" placeholder="••••••••" value={form.password} onChange={onChange} required />
        </div>
        {error ? <div className="hint" role="alert" style={{ color: 'crimson' }}>{error}</div> : null}
        <div className="actions">
          <button className="button" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
          <Link className="link" to="/user/register">Create account</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const FoodPartnerRegister = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.fullName || !form.email || !form.password) {
      setError('All fields are required')
      return
    }
    try {
      setLoading(true)
      await api.post('/api/auth/foodpartner/register', form)
      navigate('/foodPartner/login')
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create your account" subtitle="Food Partner">
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label className="label" htmlFor="fp-fullName">Full name</label>
          <input id="fp-fullName" name="fullName" className="input" type="text" placeholder="Restaurant Owner" value={form.fullName} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-email">Email</label>
          <input id="fp-email" name="email" className="input" type="email" placeholder="you@business.com" value={form.email} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-password">Password</label>
          <input id="fp-password" name="password" className="input" type="password" placeholder="••••••••" value={form.password} onChange={onChange} required />
        </div>
        {error ? <div className="hint" role="alert" style={{ color: 'crimson' }}>{error}</div> : null}
        <div className="actions">
          <button className="button" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
          <Link className="link" to="/foodPartner/login">Sign in</Link>
        </div>
      </form>
    </AuthLayout>
  )
}

const FoodPartnerLogin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) {
      setError('Email and password are required')
      return
    }
    try {
      setLoading(true)
      await api.post('/api/auth/foodpartner/login', form)
      navigate('/user/login') // adjust as needed, or route to partner dashboard
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Food Partner">
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label className="label" htmlFor="fp-login-email">Email</label>
          <input id="fp-login-email" name="email" className="input" type="email" placeholder="you@business.com" value={form.email} onChange={onChange} required />
        </div>
        <div className="field">
          <label className="label" htmlFor="fp-login-password">Password</label>
          <input id="fp-login-password" name="password" className="input" type="password" placeholder="••••••••" value={form.password} onChange={onChange} required />
        </div>
        {error ? <div className="hint" role="alert" style={{ color: 'crimson' }}>{error}</div> : null}
        <div className="actions">
          <button className="button" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
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
