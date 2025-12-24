
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Payment } from './pages/Payment';
import { Compliance } from './pages/Compliance';
import { PageRoutes, Language } from './types';
import { LegalNotice } from './components/LegalNotice';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: Language.EN,
  setLanguage: () => {},
});

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
          <LegalNotice />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path={PageRoutes.HOME} element={<Home />} />
              <Route path={PageRoutes.ABOUT} element={<About />} />
              <Route path={PageRoutes.SERVICES} element={<Services />} />
              <Route path={PageRoutes.PAYMENT} element={<Payment />} />
              <Route path={PageRoutes.COMPLIANCE} element={<Compliance />} />
              <Route path="*" element={<Navigate to={PageRoutes.HOME} replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
