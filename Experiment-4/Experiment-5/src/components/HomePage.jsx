import React from 'react'

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Home Page</h1>
      <p>Welcome to our Lazy Loading SPA Demo!</p>
      <p>This component is loaded on-demand when you navigate to the home page.</p>
    </div>
  )
}

export default HomePage
