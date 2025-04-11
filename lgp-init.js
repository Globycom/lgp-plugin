(function () {
    const loadScript = (src) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    };

    loadScript("https://lgp.valentinsahali.fr/lgp-plugin/lgp-ai-agent.js");
    loadScript("https://lgp.valentinsahali.fr/lgp-plugin/lgp-ai-popup.js");
    loadScript("https://lgp.valentinsahali.fr/lgp-plugin/lgp-form-popup.js");
})();

const addCSS = (href) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
};

addCSS("https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css");
addCSS("https://lgp.valentinsahali.fr/lgp-plugin/popup-style.css");