(function () {
    const formId = "uh4Nurxcpeus";
    let popupOpened = false;

    function openPopup() {
        if (popupOpened) return;
        popupOpened = true;

        const filloutDiv = document.createElement("div");
        filloutDiv.setAttribute("style", "width:100%;height:500px;");
        filloutDiv.setAttribute("data-fillout-id", formId);
        filloutDiv.setAttribute("data-fillout-embed-type", "standard");
        filloutDiv.setAttribute("data-fillout-inherit-parameters", "");
        filloutDiv.setAttribute("data-fillout-dynamic-resize", "");

        const filloutScript = document.createElement("script");
        filloutScript.src = "https://server.fillout.com/embed/v1/";
        document.head.appendChild(filloutScript);

        fetch("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin@latest/lgp-callback-popup.html")
            .then(res => res.text())
            .then(html => {
                document.body.insertAdjacentHTML("beforeend", html);

                const popup = document.getElementById("lgp-callback-popup");
                if (popup) {
                    const rightPopup = document.querySelector("#lgp-callback-popup .right-popup");
                    if (rightPopup) {
                        rightPopup.appendChild(filloutDiv);
                    }

                    popup.style.display = "flex";
                    document.body.style.overflow = "hidden";

                    const closeButton = document.querySelector("#lgp-callback-popup .lgp-close-btn");
                    if (closeButton) {
                        closeButton.addEventListener("click", () => {
                            popup.style.display = "none";
                            document.body.style.overflow = "";
                        });
                    }
                }
            })
            .catch(err => {
                console.error("Erreur lors du chargement du HTML de la popup :", err);
            });
    }

    function handleMouseOut(e) {
        if (e.clientY <= 0) {
            openPopup();
            document.removeEventListener("mouseout", handleMouseOut);
        }
    }

    document.addEventListener("mouseout", handleMouseOut);

    let inactivityTimeout;
    function resetInactivityTimer() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            openPopup();
            removeInactivityListeners();
        }, 30000);
    }

    function removeInactivityListeners() {
        document.removeEventListener("mousemove", resetInactivityTimer);
        document.removeEventListener("keydown", resetInactivityTimer);
        document.removeEventListener("mousedown", resetInactivityTimer);
        document.removeEventListener("scroll", resetInactivityTimer);
        document.removeEventListener("touchstart", resetInactivityTimer);
    }

    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("keydown", resetInactivityTimer);
    document.addEventListener("mousedown", resetInactivityTimer);
    document.addEventListener("scroll", resetInactivityTimer);
    document.addEventListener("touchstart", resetInactivityTimer);

    resetInactivityTimer();
})();
