console.log('[PWA Debug] mobile-pwa.js script started');

// Mobile touch event improvements and PWA functionality

// Mobile touch event improvements
document.addEventListener('DOMContentLoaded', function() {
    console.log('[PWA Debug] DOMContentLoaded event fired.');
    // Add text-base class to all text inputs to prevent zoom on focus (iOS)
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.classList.add('text-base', 'min-h-[44px]');
    });
    
    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add active states for better mobile feedback
    document.addEventListener('touchstart', function(e) {
        if (e.target.matches('button, .attribute-stat-btn, .user-icon-btn')) {
            e.target.style.transform = 'scale(0.95)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.matches('button, .attribute-stat-btn, .user-icon-btn')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 100);
        }
    });
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('[PWA Install Debug] Attempting to register service worker...');
        navigator.serviceWorker.register('https://dwivedineeraj.github.io/fruitsvsvegetables/sw.js')
            .then(registration => {
                console.log('[PWA Install Debug] SW registered:', registration);
                console.log('[PWA Install Debug] SW scope:', registration.scope);
            })
            .catch(registrationError => {
                console.error('[PWA Install Debug] SW registration failed:', registrationError);
            });
    });
}

// PWA Installation Prompt
let deferredPrompt;

// Function to detect if device is mobile
function isMobileDevice() {
    console.log('[PWA Install Debug] Checking isMobileDevice(). User Agent:', navigator.userAgent);
    const mobileCheck = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('[PWA Install Debug] isMobileDevice() returned:', mobileCheck);
    return mobileCheck;
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('*****************************************************');
    console.log('[PWA Debug] RAW beforeinstallprompt event FIRED! Event object:', e);
    console.log('*****************************************************');
    e.preventDefault(); // Still prevent the mini-infobar
    window.debugDeferredPrompt = e; // Store it globally for easy inspection
    
    const installButton = document.getElementById('installBtn');
    if (installButton) {
        console.log('[PWA Debug] Attempting to show #installBtn from raw B.I.P. handler.');
        installButton.style.display = 'flex';
        // Temporarily assign a simpler click handler for testing:
        installButton.onclick = () => {
            console.log('[PWA Debug] Install button clicked (simple test). Prompting...');
            if (window.debugDeferredPrompt) {
                window.debugDeferredPrompt.prompt();
                window.debugDeferredPrompt.userChoice.then((choiceResult) => {
                    console.log('[PWA Debug] User choice (simple test): ', choiceResult.outcome);
                    window.debugDeferredPrompt = null; // Clear it after use
                    if (choiceResult.outcome === 'accepted') {
                        installButton.style.display = 'none';
                    }
                });
            } else {
                console.error('[PWA Debug] debugDeferredPrompt is null on click!');
            }
        };
        console.log('[PWA Debug] #installBtn should be visible now with test click handler.');
    } else {
        console.error('[PWA Debug] #installBtn still NOT found in DOM inside raw B.I.P. handler!');
    }
});

window.addEventListener('appinstalled', (evt) => {
    console.log('[PWA Debug] appinstalled event fired.');
    const installButton = document.getElementById('installBtn');
    if (installButton) installButton.style.display = 'none';
});

console.log('[PWA Debug] Initial page load: Checking display mode.');
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    console.log('[PWA Debug] App is already in standalone mode. Hiding #installBtn.');
    const installButton = document.getElementById('installBtn');
    if (installButton) {
        // It might not be in the DOM yet if this runs before DOMContentLoaded
        // So, defer hiding if not found, or ensure it's hidden in DOMContentLoaded too
        installButton.style.display = 'none'; 
    }
} else {
    console.log('[PWA Install Debug] App is NOT running as PWA initially on load.');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('[PWA Install Debug] DOMContentLoaded event.');
    if (isMobileDevice() && !window.matchMedia('(display-mode: standalone)').matches && !window.navigator.standalone) {
        console.log('[PWA Install Debug] DOMContentLoaded: Device is mobile and not standalone.');
        if ('serviceWorker' in navigator && 'PushManager' in window) { 
            const installButton = document.getElementById('installBtn');
            if (installButton && deferredPrompt) { 
                console.log('[PWA Install Debug] DOMContentLoaded: deferredPrompt exists, ensuring install button is visible.');
                installButton.style.display = 'flex';
            } else if (installButton) {
                 console.log('[PWA Install Debug] DOMContentLoaded: deferredPrompt NOT YET set, button remains hidden by default CSS.');
            }
        }
    } else {
        console.log('[PWA Install Debug] DOMContentLoaded: Device not mobile or already standalone. Hiding button if it exists.');
        const installButton = document.getElementById('installBtn');
        if (installButton) {
             installButton.style.display = 'none';
        }
    }
}); 
