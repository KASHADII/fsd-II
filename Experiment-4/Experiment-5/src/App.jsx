import { useState, Suspense } from 'react'
import React from 'react'
import './App.css'

// Lazy load components
const HomePage = React.lazy(() => import('./components/HomePage'))
const AboutPage = React.lazy(() => import('./components/AboutPage'))
const ContactPage = React.lazy(() => import('./components/ContactPage'))

// Loading fallback component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px',
    fontSize: '18px',
    color: '#666'
  }}>
    <div>Loading page...</div>
  </div>
)

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        )
      case 'about':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </Suspense>
        )
      case 'contact':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ContactPage />
          </Suspense>
        )
      default:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        )
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: '#333', 
        padding: '1rem', 
        marginBottom: '2rem' 
      }}>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          margin: 0, 
          padding: 0 
        }}>
          <li>
            <button 
              onClick={() => setCurrentPage('home')}
              style={{
                background: currentPage === 'home' ? '#555' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('about')}
              style={{
                background: currentPage === 'about' ? '#555' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('contact')}
              style={{
                background: currentPage === 'contact' ? '#555' : 'transparent',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Demo Info */}
      <div style={{ 
        marginTop: '3rem', 
        padding: '1rem', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        <p><strong>Lazy Loading Demo:</strong> Open browser dev tools and observe the Network tab.</p>
        <p>Each page component is only loaded when you click its navigation button!</p>
      </div>
    </div>
  )
}

export default App
