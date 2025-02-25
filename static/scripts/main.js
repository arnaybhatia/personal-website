document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const html = document.documentElement;
    
    // Enhanced theme switching with transition effect
    const applyTheme = (theme) => {
        // First add a class that will trigger the transition
        html.classList.add('theme-transition');
        
        // Set the theme after a small delay to ensure transition class is applied
        setTimeout(() => {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Remove transition class after the transition completes
            setTimeout(() => {
                html.classList.remove('theme-transition');
            }, 500);
        }, 10);
    };
    
    // Check for saved theme preference, otherwise use system preference
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Set initial theme
    html.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';

    // Handle theme switching - FIX: Use a single approach to handle the toggle
    toggleSwitch.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        applyTheme(theme);
    });
    
    // FIX: Simplified click handler that doesn't create conflicts
    const themeSwitch = document.querySelector('.theme-switch');
    const label = document.querySelector('.theme-switch label');
    
    themeSwitch.addEventListener('click', function(e) {
        // Only toggle if clicking on the switch area but not on the checkbox itself
        // and not on the label (which already toggles the checkbox)
        if (e.target !== toggleSwitch && e.target !== label && !label.contains(e.target)) {
            e.preventDefault(); // Prevent any default actions
            toggleSwitch.checked = !toggleSwitch.checked;
            toggleSwitch.dispatchEvent(new Event('change'));
        }
    });
    
    // Add smooth scrolling to all links
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
        });
    });
    
    // Add a slight animation to sections as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add initial style to sections and begin observing them
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
    // Add skill tags styling
    const style = document.createElement('style');
    style.textContent = `
        .theme-transition {
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        .theme-transition * {
            transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        .skill-tag {
            display: inline-block;
            background-color: rgba(53, 152, 219, 0.1);
            color: var(--current-accent);
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.85em;
            margin-right: 6px;
            margin-bottom: 6px;
            transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
            background-color: var(--current-accent);
            color: white;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
});
