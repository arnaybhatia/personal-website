document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const html = document.documentElement;
    
    const applyTheme = (theme) => {
        html.classList.add('theme-transition');
        
        setTimeout(() => {
            if (theme === 'dark') {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
            
            setTimeout(() => {
                html.classList.remove('theme-transition');
            }, 500);
        }, 10);
    };
    
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        html.classList.add('dark');
    }
    toggleSwitch.checked = currentTheme === 'dark';

    toggleSwitch.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        applyTheme(theme);
    });
    
    const themeSwitch = document.querySelector('.theme-switch');
    const label = document.querySelector('.theme-switch label');
    
    themeSwitch.addEventListener('click', function(e) {
        if (e.target !== toggleSwitch && e.target !== label && !label.contains(e.target)) {
            e.preventDefault();
            toggleSwitch.checked = !toggleSwitch.checked;
            toggleSwitch.dispatchEvent(new Event('change'));
        }
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.querySelector('header .md\\:hidden');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Change icon based on menu state
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Close mobile menu when clicking a link
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-in-out');
        observer.observe(section);
    });
});
