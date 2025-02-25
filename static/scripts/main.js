document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const html = document.documentElement;
    
    const applyTheme = (theme) => {
        html.classList.add('theme-transition');
        
        setTimeout(() => {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            setTimeout(() => {
                html.classList.remove('theme-transition');
            }, 500);
        }, 10);
    };
    
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    html.setAttribute('data-theme', currentTheme);
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
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
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
