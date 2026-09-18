import type { ContentSection } from '../content/depth';

export default function DepthSections({ sections }: { sections?: ContentSection[] }) {
  if (!sections?.length) return null;
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="px-6 py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title">{section.heading}</h2>
            {section.paragraphs.map((text) => (
              <p key={text} className="mt-5 text-lg font-light leading-relaxed text-ink-muted">{text}</p>
            ))}
            {section.list && (
              <ul className="mt-6 grid gap-3">
                {section.list.map((item) => (
                  <li key={item} className="border-t border-white/15 pt-3 leading-7 text-ink-muted">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
