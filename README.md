# E-Waves Navigeringschatbot

En navigeringschatbot bygget for E-Waves – Nettverk for E-handel.
Hjelper besøkende med å finne frem på nettstedet via intent-matching,
nøkkelordssøk og hurtigvalg-knapper.

---

## Teknologi

Bygget med ren HTML, CSS og JavaScript — ingen rammeverk eller avhengigheter.

---

## JavaScript – logikk

Chatboten bruker to lag for å tolke brukerens input:

**1. Intent-matching (`matchIntent`)**
Et sett med predefinerte intents (`INTENTS`) der hver intent har en liste
med triggerord (`t`), et svar (`reply`), og valgfrie kort (`cards`) og
hurtigvalg (`chips`). Når brukeren skriver noe, sjekkes inputen mot alle
triggerord med `String.includes()`. Første treff returnerer tilhørende svar.

**2. Nøkkelordssøk (`searchPages`)**
Hvis ingen intent matcher, scores alle sider i `PAGES`-objektet basert på
hvor mange av brukerens ord som treffer sidetittel (+30), beskrivelse (+10)
eller nøkkelordsliste (+20). De tre høyest scorende sidene returneres som
klikkbare kort.

Svar vises med en simulert skriveindikator (`showTyping`) og en tilfeldig
forsinkelse på 460–620 ms for å etterligne naturlig responstid.

Hurtigvalg-chips (`quickAsk`) sender et spørsmål programmatisk som om
brukeren hadde skrevet det selv, og deaktiveres etter bruk for å unngå
dobbeltinnsending.

---

## CSS – designvalg

Alle farger, typografi og border-radius er definert som custom properties
i `:root` for enkel vedlikehold og konsistens:
```css
:root {
    --brand: #00859b;        /* Primærfarge — brukes på FAB, header, chips, fokusring */
    --brand-dark: #006d7a;   /* Hover-tilstand */
    --brand-mid: #b3dde3;    /* Chip-border og typing-dots */
    --ink / --ink-2 / --ink-3: /* Teksthierarki fra mørk til subtil */
    --r4 → --r20:            /* Border-radius skala */
}
```

Chatvinduet animeres inn/ut med `scale(0.9)` og `opacity` kombinert med
`cubic-bezier(0.35, 1.5, 0.5, 1)` for en lett "sprette opp"-effekt.

FAB-ikonet bytter mellom chat- og lukke-ikon ved hjelp av `opacity` og
`rotate`-overganger på to overlappende SVG-er, uten DOM-manipulasjon.

Meldingsbobler bruker asymmetrisk border-radius — én hjørne flates ut
(`--r4`) for å peke mot avataribenet, tilsvarende vanlige chat-UI-er.

Typing-indikatoren animerer tre punkter i sekvens med `animation-delay`
og en keyframe som kombinerer `translateY` og fargebytte mot `--brand`.

Scrollbar er stylet til 4px bredde med `scrollbar-width: thin` og
`scrollbar-color` for en diskré, moderne look.
