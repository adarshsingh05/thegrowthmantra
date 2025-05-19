import { Routes, Route } from 'react-router-dom'
import AfLynkLandingPage from './landingPage'
import AfLynkPublisherPage from './publisherPage'
import './App.css'
import AfLynkPrivacyPolicy from './privacypolicy'
import AfLynkContact from './contact'
import AfLynkTerms from './termsandconditions'
import AfLynkAbout from './aboutUs'
import AfLynkAdvertiser from './advertising'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AfLynkLandingPage />} />
        <Route path="policy" element={<AfLynkPrivacyPolicy />} />
        <Route path="publisher" element={<AfLynkPublisherPage />} />
        <Route path="contact" element={<AfLynkContact />} />
        <Route path="tandc" element={<AfLynkTerms />} />
        <Route path="aboutus" element={<AfLynkAbout />} />
        <Route path="advertiser" element={<AfLynkAdvertiser />} />
      </Routes>
    </>
  )
}

export default App
