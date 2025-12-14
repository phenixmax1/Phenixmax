        // Enhanced Interactive Animations

        // Loading Screen
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.loading-screen').classList.add('hidden');
            }, 1500);
        });

        // Scroll Progress Bar
        window.addEventListener('scroll', function() {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
            document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
        });

        // Hide header on scroll down, show on scroll up
        let lastScrollTop = 0;
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });

        // Enhanced Scroll Animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.tournament-card, .instruction-card, .sponsor-logo, .about-text, .about-image, .stat, .contact-info, .contact-form, .contact-item, .social-link, .footer-column, .footer-links li, .footer-social-link, .copyright, .warning-box');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animated');
                }
            });

            // Animate form groups with delay
            const formGroups = document.querySelectorAll('.form-group');
            formGroups.forEach((group, index) => {
                const elementTop = group.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    setTimeout(() => {
                        group.classList.add('animated');
                    }, index * 100);
                }
            });
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
            
            // Mobile Menu Toggle
            document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
                document.querySelector('.nav-links').classList.toggle('active');
            });

            // Smooth Scrolling for Navigation Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        document.querySelector('.nav-links').classList.remove('active');
                    }
                });
            });

            // Tournament Filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            const tournamentCards = document.querySelectorAll('.tournament-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    // Filter cards
                    tournamentCards.forEach(card => {
                        if(filter === 'all' || card.getAttribute('data-status') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Contact Form Submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                // Let FormSubmit handle the submission
                // Just show a confirmation message
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                }, 500);
            });

            // Fade-in Animation on Scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                fadeInObserver.observe(element);
            });

            // Update copyright year
            document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} PhenixMax. All rights reserved. | The Future of Esports`;
        });