// Mobile touch event improvements and PWA functionality

// Mobile touch event improvements
document.addEventListener('DOMContentLoaded', function() {
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
        navigator.serviceWorker.register('./frontend/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// PWA Installation Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA install prompt triggered');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button in header if not already installed
    showInstallButton();
});

function showInstallButton() {
    // Show the existing install button instead of creating a new one
    if (deferredPrompt) {
        const installButton = document.getElementById('installBtn');
        if (installButton) {
            installButton.style.display = 'flex';
            installButton.onclick = installPWA;
        }
    }
}

function installPWA() {
    if (deferredPrompt) {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the PWA install prompt');
                // Hide install button
                const installButton = document.getElementById('installBtn');
                if (installButton) {
                    installButton.style.display = 'none';
                }
            } else {
                console.log('User dismissed the PWA install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Hide install button when app is installed
window.addEventListener('appinstalled', (evt) => {
    console.log('PWA was installed');
    const installButton = document.getElementById('installBtn');
    if (installButton) {
        installButton.style.display = 'none';
    }
});

// Check if already running as PWA
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    console.log('App is running as PWA');
    // Could add PWA-specific features here
} 