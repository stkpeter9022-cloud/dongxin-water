# Third-round 3D motion correction

Replace the short, faint transition with distinct outgoing and incoming depth layers: desktop 700ms at 850px perspective, incoming -10deg/0.90 scale and outgoing +12deg/0.90 at its depth keyframe; mobile 520ms with incoming -6deg/0.95 and outgoing +7deg/0.95. Keep the outgoing layer opaque until it moves aside, avoiding overlapping transparent text.

Chrome and Edge use native snapshots. The tested Windows WebKit engine failed to paint the new snapshot despite successful API promises; WebKit and unsupported browsers instead retain an inert, ID-free viewport copy while the actual new page enters in 3D. Normal Next Link navigation continues immediately on that path. Low-resource devices retain a lighter visible entrance; a core-count hint alone no longer disables normal phones. Reduced-motion and save-data settings remain respected. Snapshot failures also trigger a visible entrance.

Increase differentiated card, engineering, project and process reveals to 70–100px, 7–10deg and 0.92–0.96 scale. Card interaction uses up to 7deg tilt and 15px lift, with gold light and a deeper shadow. Keep header/contact controls outside moving layers. Clean up rapid navigation, history and explicit fragment navigation.

Validation: production build, TypeScript, ESLint; actual Chrome/Edge/WebKit desktop/mobile captures, start/middle/end frames, unpaused recordings, phone/LINE hit checks during animations, fallback/rejected-snapshot/low-resource/preferences tests; 20 server-rendered SEO pages, 29 internal targets, 343 contact links and responsive checks. Homepage/service metadata, content, tracking and contact destinations remain unchanged.

Matched local production-build Lighthouse runs (three per version, simulated mobile): median score 97→97, LCP 2.515→2.558s, CLS 0→0, TBT 66→59ms. CPU benchmark varied (1721→1947.5); these are local lab results, not production-network or field INP measurements. The production-network Lighthouse execution request was declined. Before publication, production JS/CSS bytes were inspected and confirmed to contain the previous faint animation; after publication, the live motion assets must match the accepted build byte for byte.

Local recordings, capture matrices, private backups and full results remain under ignored audit outputs/backups. No SEO copy or advertising account settings changed.
