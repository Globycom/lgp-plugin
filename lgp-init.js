(function () {
    const loadScript = (src) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    };

    loadScript("https://raw.githubusercontent.com/Globycom/lgp-plugin/main/lgp-ai-agent.js");
    loadScript("https://raw.githubusercontent.com/Globycom/lgp-plugin/main/lgp-ai-popup.js");
    loadScript("https://raw.githubusercontent.com/Globycom/lgp-plugin/main/lgp-form-popup.js");
})();

const addCSS = (href) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
};

addCSS("https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css");
addCSS("https://raw.githubusercontent.com/Globycom/lgp-plugin/main/popup-style.css");