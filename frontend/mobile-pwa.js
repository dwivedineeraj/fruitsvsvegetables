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
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('[PWA Install Debug] SW registered:', registration);
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
    console.log('[PWA Debug] beforeinstallprompt event FIRED!');
    e.preventDefault();
    deferredPrompt = e;
    console.log('[PWA Debug] deferredPrompt has been stashed.');
    
    const installButton = document.getElementById('installBtn');
    if (installButton) {
        console.log('[PWA Debug] #installBtn found in DOM. Displaying it.');
        installButton.style.display = 'flex';
        installButton.onclick = installPWA;
    } else {
        console.error('[PWA Debug] #installBtn NOT found in DOM inside beforeinstallprompt!');
    }
});

function showInstallButton() {
    console.log('[PWA Install Debug] showInstallButton() called (but likely bypassed by debug logic).');
    if (deferredPrompt) { 
        const installButton = document.getElementById('installBtn');
        if (installButton) {
            console.log('[PWA Install Debug] showInstallButton: #installBtn found, setting display to flex and attaching click handler.');
            installButton.style.display = 'flex';
            installButton.onclick = installPWA;
        } else {
            console.error('[PWA Install Debug] showInstallButton: Install button #installBtn NOT found in DOM!');
        }
    } else {
        console.log('[PWA Install Debug] showInstallButton() did NOT proceed. deferredPrompt is falsy.');
    }
}

function installPWA() {
    console.log('[PWA Debug] installPWA() called.');
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            console.log('[PWA Debug] User choice:', choiceResult.outcome);
            if (choiceResult.outcome === 'accepted') {
                console.log('[PWA Debug] User accepted prompt.');
                const installButton = document.getElementById('installBtn');
                if (installButton) installButton.style.display = 'none';
            } else {
                console.log('[PWA Debug] User dismissed prompt.');
            }
            deferredPrompt = null;
        });
    } else {
        console.warn('[PWA Debug] installPWA called but deferredPrompt is null.');
    }
}

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