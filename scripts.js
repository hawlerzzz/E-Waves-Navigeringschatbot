

let isOpen = false;

function toggleChat() {
    isOpen = !isOpen;
    const shell = document.getElementById('shell');
    const fab = document.getElementById('fab');
    const badge = document.getElementById('badge');

    if (isOpen) {
        shell.classList.remove('hidden');
        fab.classList.add('open');
        badge.classList.add('hidden');
        setTimeout(() => document.getElementById('inp').focus(), 300);
    } else {
        shell.classList.add('hidden');
        fab.classList.remove('open');
    }
}

const PAGES = {
    hjem: {
        title: "Hjem",
        url: "https://www.ewaves.no/",
        desc: "Startsiden - Oversikt iver E-waves og hva nettverket tilbyr",
        kw: ["hjem", "forside", "startside", "oversikt", "ewaves", "nettverk", "tilbud", "tjenester", "produkter", "løsninger", "om oss"]
    },
    arrangement: {
        title: "Arrangementer",
        url: "https://www.ewaves.no/arrangement/",
        desc: "Oversikt over kommende arrangementer, webinarer og workshops arrangert av E-waves",
        kw: ["arrangement", "event", "webinar", "workshop", "kalender", "kommende", "planlagte", "deltakelse", "påmelding", "arrangementer", "treff", "samling", "møte", "kurs", "program", "neste", "dato", "aktivitet"]
    },
    ehub: {
        title: "E-hub Agder",
        url: "https://www.ewaves.no/e-hub-agder/",
        desc: "Regional e-handelshub — ressurser og samarbeid for Agder.",
        kw: ["e-hub", "agder", "ehandelshub", "ressurser", "samarbeid", "nettverk", "bedrifter", "prosjekter", "initiativ", "digitalisering", "ehandel", "logistikk", "teknologi", "innovasjon"]
    },
    "bli-medlem": {
        title: "Bli Medlem",
        url: "https://www.ewaves.no/bli-medlem/",
        desc: "Meld deg inn og få tilgang til nettverk, arrangementer og ressurser for bedrifter i Agder",
        kw: ["bli medlem", "medlemskap", "nettverk", "arrangementer", "ressurser", "bedrifter", "agder", "fordeler", "tilgang", "medlemsfordeler", "innmelding", "registrering", "nettverksbygging"]
    },
    om: {
        title: "Om Nettverket",
        url: "https://www.ewaves.no/om-nettverket/",
        desc: "Hver er E-waves, hva gjør vi og hvordan kan du bli en del av vårt nettverk i Agder",
        kw: ['om', 'om oss', 'om nettverket', 'hvem er', 'hvem er e-waves', 'hvem er ewaves',
        'hva gjør', 'hva er', 'hva tilbyr', 'fortell om', 'bakgrunn', 'historikk',
        'visjon', 'misjon', 'formål', 'organisasjon', 'info', 'informasjon',
        'introduksjon', 'nettverk', 'agder', 'bli en del', 'del av'],
    },
    partnerskap: {
        title: "Partnerskap For Vekst",
        url: "https://www.ewaves.no/partnerskap-for-vekst/",
        desc: "Partnerskap og sammarbeid for vekst i e-handelsbransjen.",
        kw: ["partnerskap", "vekst", "samarbeid", "bedrifter", "agder", "tilbud", "fordeler", "samarbeidsmuligheter", "nettverk", "forretningsmuligheter", "partnerskapsprogram"]
    },
    kontakt: {
        title: "Kontakt Oss",
        url: "https://www.ewaves.no/kontakt-oss/",
        desc: "Har du spørsmål eller tilbakemeldinger? Kontakt oss!",
        kw: ["kontakt", "spørsmål", "tilbakemelding", "hjelp", "support", "kundeservice", "kontakt oss", "ta kontakt", "send melding", "kontaktinformasjon"]
    },
    digin: {
        title: "Digin",
        url: "https://www.ewaves.no/digin/",
        desc: "Digin er et digitalt vekstmiljø og initiativtaker bak E-Waves.",
        kw: ['digin', 'digin.no', 'bak', 'hvem driver', 'initiativ', 'grunnlegger', 'digital', 'vekst', 'miljø', 'børge', 'jomaas'],
    },
    aktuelt: {
        title: "Aktuelt",
        url: "https://www.ewaves.no/aktuelt/",
        desc: "Nyheter, artikler og oppdateringer om E-waves og e-handelsbransjen.",
        kw: ["aktuelt", "nyheter", "artikler", "oppdateringer", "ehandel", "bransjen", "trender", "innsikt", "blogg", "nytt", "informasjon"]
    },
    medlemsbedriftene: {
        title: "Medlemsbedriftene",
        url: "https://www.ewaves.no/medlemsbedriftene/",
        desc: "Oversikt over bedrifter som er medlemmer av E-waves nettverket i Agder.",
        kw: ["medlemsbedriftene", "medlemmer", "bedrifter", "nettverk", "agder", "oversikt", "medlemsliste", "samarbeidspartnere", "forretningspartnere", "nettverksbedrifter"]
    }
};

const INTENTS = [
    {
        t: ['hei', 'hallo', 'hi', 'halla', 'god dag', 'god morgen', 'heisann', 'hey', 'yo', 'hallo der', 'god kveld', 'god natt', 'hei på deg', 'hallo på deg', 'god dag til deg', 'hallo', 'hi', 'halla', 'god dag', 'god morgen', 'heisann', 'hey', 'yo', 'hallo der', 'god kveld', 'god natt', 'hei på deg', 'hallo på deg', 'god dag til deg'],
        reply: ['Hei! Hvordan kan jeg hjelpe deg i dag?'],
        chips: ["Aktuelt", "Bli Medlem", "Kontakt Oss", "Digin", "Arrangementer", "E-hub Agder", "Om Nettverket", "Partnerskap For Vekst", "Medlemsbedriftene", "digin"]
    },
    {
        t: ['takk', 'tusen takk', 'takk skal du ha', 'takk for hjelpen', 'takk for det', 'takk for assistansen', 'takk for støtten', 'takk for informasjonen', 'takk for svaret', 'takk for at du hjelper meg', 'thanks'],
        reply: 'Bare hyggelig! Er det noe annet jeg kan hjelpe med?',
        chips: ['Arrangementer', 'Bli Medlem', 'Kontakt'],
    },
    {
        t: ['hva er e-waves', 'hva er ewaves', 'hva gjør', 'hva tilbyr', 'fortell om'],
        reply: 'E-Waves er et fagnettverk for e-handelsbedrifter i Agder. Nettverket samler aktører for å dele kunnskap, bygge relasjoner og fremme vekst i bransjen.',
        chips: ['Bli Medlem', 'Arrangementer', 'Om Nettverket'],
    },
    {
        t: ['kontakt', 'kontakte', 'ring', 'mail', 'epost', 'email', 'møte', 'book', 'avtale', 'børge', 'borge', 'jomaas'],
        reply: 'Ta gjerne kontakt direkte:\n\nBørge Jomaas\nborge@digin.no\n901 94 823\n\nTordenskjoldsgate 9, 4612 Kristiansand S',
        cards: ['kontakt'],
        chips: ['Bli Medlem', 'Om Nettverket'],
    },
    {
        t: ['arrangement', 'event', 'treff', 'webinar', 'samling', 'program', 'kalender', 'kommende', 'neste treff'],
        reply: 'Vi arrangerer faglige samlinger, bedriftsbesøk og webinarer gjennom året.',
        cards: ['arrangement'],
        chips: ['Bli Medlem', 'Kontakt'],
    },
    {
        t: ['bli med', 'bli medlem', 'meld', 'melde', 'innmelding', 'join', 'pris', 'kostnad', 'kontingent', 'fordeler'],
        reply: 'Som medlem får du tilgang til arrangementer, faglig nettverk og ressurser for e-handelsutvikling i Agder.',
        cards: ['bli-medlem'],
        chips: ['Om Nettverket', 'Kontakt'],
    },
    {
        t: ['partner', 'partnerskap', 'sponsor', 'vekst'],
        reply: 'E-Waves tilbyr partnerskap for bedrifter som ønsker å støtte og bidra til vekst i e-handelsmiljøet.',
        cards: ['partnerskap'],
        chips: ['Bli Medlem', 'Kontakt'],
    },
    {
        t: ['bedrift', 'bedrifter', 'hvem er med', 'stormberg', 'multicom', 'blivakker', 'elefun', 'mizuno'],
        reply: 'E-Waves har et bredt spekter av e-handelsbedrifter som medlemmer.',
        cards: ['medlemsbedrifter'],
        chips: ['Bli Medlem', 'Kontakt'],
    },
    {
        t: ['e-hub', 'ehub', 'hub agder'],
        reply: 'E-hub Agder er en regional ressurs- og samarbeidsplattform for e-handelsbransjen.',
        cards: ['ehub'],
        chips: ['Bli Medlem', 'Kontakt'],
    },
    {
        t: ['aktuelt', 'nyheter', 'artikler', 'blogg'],
        reply: 'Hold deg oppdatert med de siste nyhetene og artiklene om E-Waves og e-handelsbransjen.',
        cards: ['aktuelt'],
        chips: ['Bli Medlem', 'Kontakt'],
    },
    {
        t: ['digin', 'digin.no', 'hvem driver', 'bak e-waves', 'initiativ', 'grunnlegger'],
        reply: 'E-Waves er initiert av Digin — et digitalt vekstmiljø basert i Kristiansand. Digin jobber med å utvikle digitale næringer og fellesskap i Agder, og er drivkraften bak E-Waves-nettverket.',
        cards: ['digin'],
        chips: ['Om Nettverket', 'Kontakt'],
    },
];

function matchIntent(q) {
    const ql = q.toLowerCase();
    for (const i of INTENTS) {
        if (i.t.some(t => ql.includes(t))) {
            return i;
        }
    }
}
return null;

function searchPages(q) {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return Object.entries(PAGES)
        .map(([id, p]) => {
            const tl = p.title.toLowerCase();
            const dl = p.desc.toLowerCase();
            let score = 0;
            words.forEach(w => {
                if (tl.includes(w)) score += 30;
                if (dl.includes(w)) score += 10;
                if (p.kw.some(k => k.includes(w) || w.includes(k))) score += 20;
            });
            return { id, ...p, score };
            })
        .filter(p => p.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

const feed = () => document.getElementById('feed');

function scroll() {
    requestAnimationFrame(() => {
        const f = feed();
        f.scrollTop = f.scrollHeight;
        });
}
        
function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function fmt(s) { return esc(s).replace(/\n/g, '<br>'); }

function userRow(text){
    const d = document.createElement('div');
    d.className = 'row u';
    d.innerHTML = `<div class="av">Du</div><div class="bbl">${esc(text)}</div>`;
    feed().appendChild(d);
    scroll();
}

function showTyping() {
    removeTyping();
    const d = document.createElement('div');
    d.className = 'row b';
    d.id = 'typing';
    d.innerHTML = `<div class="av">EW</div><div class="bbl"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
    feed().appendChild(d);
    scroll();
}

function removeTyping() { document.getElementById('typing')?.remove(); }

function buildCards(ids){
    if (!ids?.length) return '';
    const html =ids.map(id => {
        const p = PAGES[id]; if (!p) return '';
        return `<a class="card" href="${p.url}" target="_blank">
                <div class="card-head">
                        <span class="card-title">${p.title}</span>
                        <span class="card-arrow">→</span>
                    </div>
                    <div class="card-desc">${p.desc}</div>
                </a>`;
            }).join('');
            return `<div class="cards">${html}</div>`;
}

function buildChips(labels) {
    if (!labels?.length) return '';
    const html = labels.map(l =>
        `<button class="chip" onclick="quickAsk(this,'${l}')">${l}</button>`
    ).join('');
    return `<div class="chips">${html}</div>`;
}

function botRow(text, cards = [], chips = [], delay = 460) {
    showTyping();
    setTimeout(() => {
        removeTyping();
        const d = document.createElement('div');
        d.className = 'row b';
        d.innerHTML = `<div class="av">EW</div><div class="bbl">${fmt(text)}${buildCards(cards)}${buildChips(chips)}</div>`;
        feed().appendChild(d);
        scroll();
        if (!isOpen) {
            document.getElementById('badge').classList.remove('hidden');
        }
    }, delay + Math.random() * 160);
}

function resultRows(pages) {
    showTyping();
    setTimeout(() => {
        removeTyping();
        const d = document.createElement('div');
        d.className = 'row b';
        const cards = pages.map(p =>
            `<a class="card" href="${p.url}" target="_blank">
                <div class="card-head">
                    <span class="card-title">${p.title}</span>
                    <span class="card-arrow">→</span>
                </div>
                <div class="card-desc">${p.desc}</div>
            </a>`
        ).join('');
        d.innerHTML = `<div class="av">EW</div><div class="bbl">Her er relevante sider:<div class="cards">${cards}</div></div>`;
        feed().appendChild(d);
        scroll();
    }, 500);
}

function send() {
    const el = document.getElementById('inp');
    const q = el.value.trim();
    if (!q) return;
    el.value = '';
    el.focus();
    userRow(q);
    respond(q);
}

function quickAsk(btn, label) {
    btn.disabled = true;
    btn.style.opacity = 0.6;
    userRow(label);
    respond(label);
}

function respond(q) {
    const intent = matchIntent(q);
    if (intent) {
        botRow(intent.reply, intent.cards || [], intent.chips || []);
        return;
        }
        const pages = searchPages(q);
        if (pages.length) {
            resultRows(pages);
            return;
        }
        botRow(
            'Jeg fant ikke noe spesifikt på det. Prøv en av lenkene nedenfor eller ta kontakt direkte.',
            [],
            ['Arrangementer', 'Bli Medlem', 'Om Nettverket', 'Kontakt']
        );
}

window.addEventListener('DOMContentLoaded', () => {
    const d = document.createElement('div');
    d.className = 'ts';
    d.textContent = 'I dag';
    feed().appendChild(d);

    botRow('Hei! Jeg er E-Waves sin navigeringsassistent. Hvordan kan jeg hjelpe deg i dag?', 
        [], 
        ['Arrangementer', 'Bli Medlem', 'Kontakt Oss', 'Digin', 'Om Nettverket', 'Partnerskap For Vekst', 'Medlemsbedriftene'],
        220
    );
});

