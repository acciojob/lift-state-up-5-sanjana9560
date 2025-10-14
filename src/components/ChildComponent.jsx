import React, { useState } from 'react'

const ChildComponent = ({ isLoggedIn, onLogin }) => {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #74ABE2, #5563DE)',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      background: 'white',
      padding: '40px 50px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '300px',
    },
    label: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
    },
    input: {
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
    },
    button: {
      background: '#5563DE',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      marginTop: '10px',
      transition: 'background 0.3s',
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName && userPassword) {
      onLogin()
    } else {
      alert("Please enter username and password!")
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          style={styles.input}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

export default ChildComponent
