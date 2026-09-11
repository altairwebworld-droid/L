import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { PageMeta } from '../siteData';
export default function ContentDirectory({ pages, title, description, showIntro = true }: { pages: PageMeta[]; title: string; description: string; showIntro?: boolean }) {
  const [query, setQuery] = useState('');
  const filtered = [...pages].sort((a,b) => a.label.localeCompare(b.label)).filter(page => `${page.label} ${page.description}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="directory-page">
    {showIntro && <header className="directory-intro"><p className="micro-label">LYCORE GROUP LLC</p><h1>{title}</h1><p>{description}</p><Link to="/contact" className="btn-primary" data-track="free_audit_click">Get a free growth system audit</Link></header>}
    <section className="directory-content" aria-label={title}>
      <label className="directory-search">Find what you need<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by name or need" /></label>
      <p className="directory-count" role="status">{filtered.length} of {pages.length} pages</p>
      <div className="directory-grid">{filtered.map(page => <Link key={page.path} to={page.path}><h2>{page.label.replace(/ systems$| workflows$/, '')}</h2><p>{page.description}</p><span>Explore {page.label.replace(/ systems$| workflows$/, '')} <span aria-hidden="true">↗</span></span></Link>)}</div>
      {!filtered.length && <p>No matches. Try a broader term or <button type="button" onClick={() => setQuery('')}>show all pages</button>.</p>}
    </section>
  </div>;
}
