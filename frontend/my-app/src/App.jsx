import { Routes, Route } from 'react-router-dom'
import AfLynkLandingPage from './landingPage'
import AfLynkPublisherPage from './publisherPage'
import './App.css'
import AfLynkPrivacyPolicy from './privacypolicy'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AfLynkLandingPage />} />
        <Route path="policy" element={<AfLynkPrivacyPolicy />} />
        <Route path="publisher" element={<AfLynkPublisherPage />} />
      </Routes>
    </>
  )
}

export default App
