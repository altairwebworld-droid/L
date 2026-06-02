/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
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
          <Route path="privacy" element={<Legal />} />
          <Route path="terms" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
