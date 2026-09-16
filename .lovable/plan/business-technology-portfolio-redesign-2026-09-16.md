# Business + Technology Portfolio Redesign

## Direction
Reposition the site from a student portfolio into a concise, enterprise-ready personal website. The first screen will establish Donat as an early-career business and technology professional with current project-delivery experience at RBC, supported by emerging-technology work at U of T and operational leadership through MTA.

The visual system will retain the established navy identity while becoming more editorial and restrained: white and pale blue-gray surfaces, deep navy typography, thin dividers, selective feature blocks, minimal shadows, and only subtle blue/yellow accents. The site will avoid oversized profile imagery, card-heavy layouts, long skill clouds, and excessive animation.

## Information Architecture

### Navigation
- Home
- Experience
- Work
- About
- Resume icon/button
- Remove “Studying” and “Contact” as primary navigation destinations.
- Keep email, LinkedIn, and GitHub available in the closing section and footer.

### Home
1. Minimal hero: “Business × Technology × Delivery,” a short outcome-oriented headline, RBC/U of T context, and links to Work, LinkedIn, and Resume.
2. Selected Experience: RBC as the dominant feature, with smaller The BRIDGE and MTA entries.
3. Selected Work: three differentiated cases using Problem → Contribution → Result.
4. Capabilities: Delivering Projects, Working With Data, Automating Work, and Adopting Technology.
5. Compact Recognition + Education band.
6. Quiet contact close.

### Experience
- RBC — Project Delivery Specialist Intern, Sep 2026–Present.
  - 35+ participant data talent program.
  - VBA-enabled visibility and tracking.
  - Enterprise mentoring-platform support.
  - AI-enabled Jira/Kanban documentation workflow.
  - Enterprise learning work supporting 1,000+ data-science practitioners.
- University of Toronto — Emerging Technology Assistant & Department Programs Associate.
  - 15-student VR learning pilot.
  - 40+ custom 3D models and repeatable operating procedure.
  - Digital asset and participant-data improvements.
- MTA — Program Operations & Internal Strategy Coordinator.
  - Data Analytics Case Competition.
  - Initiative prioritization, recruitment, and $5K+ financial visibility.
- Present work as contextual initiative modules, not copied résumé bullets or an exhaustive timeline.

### Work
Retain only work that adds distinct evidence:
- ECLIPSE 2026: privacy-focused on-device AI recommendation, financial model, executive pitch, 1st Place.
- Business performance analysis: three-year financial model and Power BI liquidity/solvency dashboard.
- Agile stakeholder project: Scrum Master work on a Java product using Jira/Kanban.
- Keep tools secondary to the business question and outcome; remove weaker concept-only projects from prominence.

### About
- A concise professional trajectory from technical/software study to Management & IT, then execution, emerging-technology adoption, and enterprise delivery.
- Keep education, certifications, languages, and selected recognition compact.
- Preserve personality through concrete examples rather than trait lists.

## Content and Accuracy
- Use the attached revised résumé as the factual baseline and the master brief for tone and hierarchy.
- Use conservative language around RBC and expose no internal screenshots, proprietary names, customer data, or restricted details.
- Update all outdated role titles, dates, metrics, page copy, metadata, structured data, alt text, and footer wording.
- Replace the existing downloadable résumé with a polished PDF generated from the newly attached DOCX, while preserving the familiar Resume link.
- Include only defensible metrics: 35+, 1,000+, 15, 40+, 10, 100+, 3 cycles, $5K+, and 1st Place where context supports them.

## Design and Interaction
- Use a 1200–1320px editorial grid with generous spacing and fewer, stronger sections.
- Favor dividers, asymmetric columns, numbered labels, and typography over nested cards.
- Keep the headshot as a small supporting element on About rather than a dominant hero image.
- Use restrained 200–500ms reveals and hover transitions; remove bouncing, pulsing, and decorative visual noise.
- Ensure strong mobile composition, keyboard access, visible focus states, semantic headings, sufficient contrast, and reduced-motion support.

## Technical Work
- Preserve React, Vite, TypeScript, Tailwind, React Router, and existing GitHub Pages deployment support.
- Rebuild shared data around the new experience/work hierarchy and remove obsolete components/data after routes are migrated.
- Keep `/portfolio` and `/studying` redirects or compatibility paths so old shared links do not break, while the main site uses `/work` and `/about`.
- Update app-specific title, description, Open Graph fields, canonical URL, and Person structured data for the RBC-era positioning.
- Remove the remote CSS font import and load the selected font safely in the document head or use a system stack.
- Verify desktop and mobile layouts, navigation, downloadable résumé, internal links, runtime behavior, and GitHub Pages route handling.

## Out of Scope
- No confidential RBC visuals or details.
- No invented project metrics, screenshots, clients, or outcomes.
- No backend contact form or new account integrations.
