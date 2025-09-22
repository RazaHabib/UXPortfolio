document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.getElementById("navbar").offsetHeight || 0),
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar scroll effect and active link highlighting
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let currentActive = "home";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActive = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-section") === currentActive) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // Initial call

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    mobileMenuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        mobileMenuToggle.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
            mobileMenuToggle.classList.remove("active");
        });
    });

    // Typewriter effect for hero subtitle
    const typewriterElement = document.querySelector(".typewriter");
    if (typewriterElement) {
        const words = JSON.parse(typewriterElement.getAttribute("data-words"));
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 150; // Resume normal typing speed
            } else {
                typingSpeed = isDeleting ? 75 : 150;
            }
            setTimeout(type, typingSpeed);
        }
        type();
    }

    // Animate numbers in hero metrics
    const metricNumbers = document.querySelectorAll(".metric-number");
    const heroSection = document.getElementById("home");
    let metricsAnimated = false;

    const animateNumbers = () => {
        metricNumbers.forEach(metric => {
            const target = +metric.getAttribute("data-target");
            let current = 0;
            const increment = target / 200; // Adjust for speed

            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    metric.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    metric.textContent = target;
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !metricsAnimated) {
                animateNumbers();
                metricsAnimated = true;
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    if (heroSection) {
        observer.observe(heroSection);
    }

    // Scroll progress indicator
    const scrollProgress = document.getElementById("scroll-progress");
    if (scrollProgress) {
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrolled + "%";
        });
    }

    // Fade-in animations on scroll
    const faders = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("visible");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


