/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BailBonds from './pages/BailBonds';
import ServiceDetail from './pages/ServiceDetail';
import Audit from './pages/Audit';
import Book from './pages/Book';
import Legal from './pages/Legal';
import RedirectResult from './pages/RedirectResult';
import ServiceAreas from './pages/ServiceAreas';
import ScrollToTop from './components/ScrollToTop';
import { initAnalytics } from './lib/analytics';

export default function App() {
  useEffect(() => {
    initAnalytics(import.meta.env.VITE_GA4_MEASUREMENT_ID);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="albuquerque-bail-bond-marketing" element={<ServiceAreas />} />
          <Route path="bail-bonds" element={<BailBonds />} />
          <Route path="ai-receptionist-for-bail-bonds" element={<ServiceDetail />} />
          <Route path="bail-bond-website-design" element={<ServiceDetail />} />
          <Route path="bail-bond-seo-services" element={<ServiceDetail />} />
          <Route path="bail-bond-intake-automation" element={<ServiceDetail />} />
          <Route path="bail-bond-crm-integration" element={<ServiceDetail />} />
          <Route path="bail-bond-follow-up-automation" element={<ServiceDetail />} />
          <Route path="custom-dashboards-for-bail-bonds" element={<ServiceDetail />} />
          <Route path="appointment-setting-for-bail-bonds" element={<ServiceDetail />} />
          <Route path="mobile-apps-for-bail-bonds" element={<ServiceDetail />} />
          <Route path="ui-apps-for-bail-bonds" element={<ServiceDetail />} />
          <Route path="free-bail-bond-lead-system-audit" element={<Audit />} />
          <Route path="book" element={<Book />} />
          <Route path="audit-request-received" element={<RedirectResult type="audit-success" />} />
          <Route path="booking-confirmed" element={<RedirectResult type="booking-success" />} />
          <Route path="booking-failed" element={<RedirectResult type="booking-failed" />} />
          <Route path="privacy" element={<Legal />} />
          <Route path="terms" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
