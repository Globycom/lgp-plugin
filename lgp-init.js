(function () {

    const loadScript = (src) => {

        const script = document.createElement("script");

        script.src = src;

        script.defer = true;

        document.head.appendChild(script);

    };



    loadScript("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/lgp-ai-agent.js");

    /*loadScript("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/lgp-ai-popup.js");*/

    /*loadScript("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/lgp-callback-popup.js");*/

    /*loadScript("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/lgp-form-popup.js");*/

})();



const addCSS = (href) => {

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = href;

    document.head.appendChild(link);

};


addCSS("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap")
addCSS("https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css");

addCSS("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/popup-style.css");
