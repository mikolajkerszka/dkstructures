const translations = {
    pl: {
        "about-title": "O NAS",
        "about": "Jako doświadczony monter kadłubów i foreman kompleksowo realizuję prace stoczniowe na podstawie dokumentacji technicznej. Łączę twarde umiejętności praktyczne – montaż, cięcie, żłobienie oraz szczepienie stali, aluminium i Cunifer (TIG, MIG/MAG, MMA). Jednocześnie mam doświadczenie w skutecznym zarządzaniu pracami. Gwarantuję precyzję wykonania i świetną organizację robót na jednostkach pływających.",
        "skills-title": "UMIEJĘTNOŚCI",
        "skills1": "Montaż kadłubów i konstrukcji stalowych zgodnie z rysunkiem technicznym",
        "skills2": "Szczepienie stali czarnej, nierdzewnej, aluminium oraz Cunifer metodami tig, mig/mag i mma",
        "skills3": "Cięcie palnikiem i oddtapianie",
        "skills4": "Żłobienie elektrodą węglową",
       
        "certificates-title": "DOŚWIADCZENIE",
        "certificates1": "Praca jako monter",
        "certificates2": "Praca jako foreman",
       
        "contact-title": "KONTAKT",
        
        "nav-about": "O NAS",
        "nav-skills": "UMIEJĘTNOŚCI",
        "nav-certificates": "DOŚWIADCZENIE",
        "nav-contact": "KONTAKT",

        "copyright": "© Wszystkie prawa zastrzeżone."
    },
    en: {
        "about-title": "ABOUT ME",
        "about": "As an experienced hull fitter and foreman, I comprehensively carry out shipyard work based on technical documentation. I combine hard practical skills – assembly, cutting, gouging, and tack welding of steel, aluminum, and Cunifer (TIG, MIG/MAG, MMA). At the same time, I have experience in effective work management. I guarantee precision of execution and excellent organization of work on vessels.",
        "skills-title": "SKILLS",
        "skills1": "Assembly of hulls and steel structures according to technical drawings",
        "skills2": "Tack welding of carbon steel, stainless steel, aluminum, and Cunifer using TIG, MIG/MAG, and MMA methods",
        "skills3": "Torch cutting and flame washing",
        "skills4": "Carbon arc gouging",

        "certificates-title": "EXPERIENCE",
        "certificates1": "Work as a fitter",
        "certificates2": "Work as a foreman",

        "contact-title": "CONTACT",

        "nav-about": "ABOUT ME",
        "nav-skills": "SKILLS",
        "nav-certificates": "EXPERIENCE",
        "nav-contact": "CONTACT",

        "copyright": "© All rights reserved."
    }
};

function changeLanguage(lang) {
    if (!translations[lang]) lang = 'pl';
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLang', lang);
    
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'pl';
    changeLanguage(savedLang);
});