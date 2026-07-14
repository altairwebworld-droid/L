/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatWeBuild from './pages/WhatWeBuild';
import Vision from './pages/Vision';
import Towing from './pages/Towing';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Legal from './pages/Legal';
import RedirectResult from './pages/RedirectResult';
import NotFound from './pages/NotFound';
import { CommitmentPage, CommitmentsIndex } from './pages/Commitments';
import ScrollToTop from './components/ScrollToTop';
import { initAnalytics } from './lib/analytics';
import PrivacyControls from './components/PrivacyControls';

export default function App() {
  useEffect(() => {
    initAnalytics(import.meta.env.VITE_GA4_MEASUREMENT_ID);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PrivacyControls measurementId={import.meta.env.VITE_GA4_MEASUREMENT_ID} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-we-build" element={<WhatWeBuild />} />
          <Route path="vision" element={<Vision />} />
          <Route path="industries/towing" element={<Towing />} />
          <Route path="industries/bail-bonds" element={<Navigate to="/what-we-build" replace />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="commitments" element={<CommitmentsIndex />} />
          <Route path="commitments/career-growth" element={<CommitmentPage page="career-growth" />} />
          <Route path="commitments/work-life-balance" element={<CommitmentPage page="work-life-balance" />} />
          <Route path="commitments/social-impact" element={<CommitmentPage page="social-impact" />} />
          <Route path="commitments/how-we-work" element={<CommitmentPage page="how-we-work" />} />
          <Route path="audit-request-received" element={<RedirectResult type="audit-success" />} />
          <Route path="booking-confirmed" element={<RedirectResult type="booking-success" />} />
          <Route path="booking-failed" element={<RedirectResult type="booking-failed" />} />
          <Route path="privacy-policy" element={<Legal />} />
          <Route path="privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="terms" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
