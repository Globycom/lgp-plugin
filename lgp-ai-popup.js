(function () {
    let popupOpened = false;

    fetch("https://cdn.jsdelivr.net/gh/globycom/lgp-plugin/lgp-ai-popup.html")
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);

            const popup = document.getElementById("lgp-ai-popup");
            if (!popup) return;

            function isFormPopupVisible() {
                const formPopup = document.getElementById("lgp-form-popup");
                return formPopup && formPopup.style.display === "flex";
            }

            function showPopup() {
                if (popupOpened || isFormPopupVisible()) return;
                popup.style.display = "flex";
                document.body.style.overflow = "hidden";

                popupOpened = true;

                const currentURL = window.location.href;
                const title = document.title;
                const description = document.querySelector('meta[name="description"]')?.content || '';

                const popupChatContainer = document.getElementById("popup-n8n-chat");
                if (popupChatContainer) {
                    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
                        .then(({ createChat }) => {
                            createChat({
                                webhookUrl: 'https://bridge.youzend.com/webhook/c6f679cd-7bd6-4398-a68d-57813f259ed2/chat',
                                target: '#popup-n8n-chat',
                                mode: 'fullscreen',
                                metadata: {
                                    "url": currentURL,
                                    "titre": title,
                                    "description": description,
                                    "popup": "abandon_popup"
                                },
                                initialMessages: [
                                    'Ne partez pas encore ! 👋🏻',
                                    'Vous avez une question ? Je suis là pour y répondre.'
                                ],
                                i18n: {
                                    en: {
                                        inputPlaceholder: 'Tapez votre question ici'
                                    },
                                },
                            });
                        })
                        .catch(err => {
                            console.error('Erreur lors de l\'initialisation du chat dans la popup', err);
                        });
                }
            }

            document.addEventListener("mouseout", e => {
                if (e.clientY < 0) {
                    showPopup();
                }
            });

            function closePopup() {
                popup.style.display = "none";
                document.body.style.overflow = "";
            }

            const closeButton = document.querySelector("#lgp-ai-popup .lgp-close-btn");
            if (closeButton) {
                closeButton.addEventListener("click", closePopup);
            }

        })
        .catch(err => {
            console.error("Erreur lors du chargement du HTML :", err);
        });
})();
