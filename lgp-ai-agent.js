(function () {

    const currentURL = window.location.href;

    const title = document.title;

    const description = document.querySelector('meta[name="description"]')?.content || '';





    const scriptBubble = document.createElement("script");

    scriptBubble.type = "module";

    scriptBubble.text = `

        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

        

        createChat({

            webhookUrl: 'https://bridge.youzend.com/webhook/c6f679cd-7bd6-4398-a68d-57813f259ed2/chat',

            target: '#n8n-chat-bubble',

            mode: 'window',

            metadata: {

                "url": "${currentURL}",

                "titre":"${title}",

                "description":"${description}",

                "popup":"bubble_popup"

            },

            initialMessages: [

                'Bonjour ! 👋🏻',

                'Vous cherchez une solution adaptée à votre activité ?'

            ],

            i18n: {

                en: {

                    title: "Je suis HELPRO",
                    subtitle: "Je suis une IA pour les PRO. Un expert prend le relais si vous êtes perdu.",
                    inputPlaceholder: "Tapez votre question ici"
                },

            },

        });

    `;

    document.body.appendChild(scriptBubble);



    let inactivityTimer;

    let bubbleOpened = false;



    const resetInactivityTimer = () => {

        clearTimeout(inactivityTimer);

        inactivityTimer = setTimeout(() => {

            if (!bubbleOpened) {

                const chatBubble = document.querySelector('.chat-window-toggle');

                if (chatBubble) {

                    chatBubble.click();

                    bubbleOpened = true;

                }

            }

        }, 30000);

    };



    ["mousemove", "keydown", "scroll", "click"].forEach(evt =>

        document.addEventListener(evt, resetInactivityTimer)

    );



    resetInactivityTimer();

})();