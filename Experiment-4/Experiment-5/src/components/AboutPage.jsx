import React from 'react'

const AboutPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Page</h1>
      <p>This is the About page of our SPA.</p>
      <p>Notice how this component only loads when you click the About link!</p>
      <p>Lazy loading improves initial page load performance.</p>
    </div>
  )
}

export default AboutPage
