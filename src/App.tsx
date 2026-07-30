/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { initAnalytics } from './lib/analytics';
import PrivacyControls from './components/PrivacyControls';

const WhatWeBuild = lazy(() => import('./pages/WhatWeBuild'));
const Vision = lazy(() => import('./pages/Vision'));
const Towing = lazy(() => import('./pages/Towing'));
const About = lazy(() => import('./pages/About'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const Book = lazy(() => import('./pages/Book'));
const Legal = lazy(() => import('./pages/Legal'));
const RedirectResult = lazy(() => import('./pages/RedirectResult'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CommitmentPage = lazy(() => import('./pages/Commitments').then((module) => ({ default: module.CommitmentPage })));
const CommitmentsIndex = lazy(() => import('./pages/Commitments').then((module) => ({ default: module.CommitmentsIndex })));

export default function App() {
  useEffect(() => {
    initAnalytics(import.meta.env.VITE_GA4_MEASUREMENT_ID);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PrivacyControls measurementId={import.meta.env.VITE_GA4_MEASUREMENT_ID} />
      <Suspense fallback={<RouteLoader />}>
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
            <Route path="data-deletion" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function RouteLoader() {
  return (
    <div className="route-loader" role="status" aria-label="Loading page">
      <span className="route-loader__mark">LYCORE</span>
      <span className="route-loader__line" aria-hidden="true" />
    </div>
  );
}
