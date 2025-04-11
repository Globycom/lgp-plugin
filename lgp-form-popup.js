(function () {
    const getFormId = () => {
        const scripts = document.querySelectorAll('script[src*="lgp-init.js"]');
        for (const script of scripts) {
            const formId = script.getAttribute('form');
            if (formId) return formId;
        }
        return null;
    };

    const formId = getFormId();
    if (!formId) return;

    const filloutDiv = document.createElement("div");
    filloutDiv.setAttribute("style", "width:100%;height:500px;");
    filloutDiv.setAttribute("data-fillout-id", formId);
    filloutDiv.setAttribute("data-fillout-embed-type", "standard");
    filloutDiv.setAttribute("data-fillout-inherit-parameters", "");
    filloutDiv.setAttribute("data-fillout-dynamic-resize", "");

    const filloutScript = document.createElement("script");
    filloutScript.src = "https://server.fillout.com/embed/v1/";
    document.head.appendChild(filloutScript);

    fetch("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@lgp/lgp-form-popup.html")
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);

            const popup = document.getElementById("lgp-form-popup");
            if (popup) {
                const rightPopup = document.querySelector("#lgp-form-popup .right-popup");
                if (rightPopup) {
                    rightPopup.appendChild(filloutDiv);
                }

                const openBtn = document.createElement("button");
                openBtn.id = "form-open-btn";
                openBtn.textContent = "JE DEMANDE UN DEVIS";
                document.body.appendChild(openBtn);

                openBtn.addEventListener("click", () => {
                    popup.style.display = "flex";
                    document.body.style.overflow = "hidden";
                });

                function closePopup() {
                    popup.style.display = "none";
                    document.body.style.overflow = "";
                }

                const closeButton = document.querySelector("#lgp-form-popup .lgp-close-btn");
                if (closeButton) {
                    closeButton.addEventListener("click", closePopup);
                }
            }
        })
        .catch(err => {
            console.error("Erreur lors du chargement du HTML de la popup :", err);
        });
})();
