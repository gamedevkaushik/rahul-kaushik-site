document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const floatingSocial = document.getElementById('floatingSocial');
    const FLOATING_TOP = 110;
    const FLOATING_BOTTOM_OFFSET = 32;

    window.addEventListener('load', () => {
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.add('hidden');
        }
      }, 600);
    });

    function handleScroll() {
      const scrollTop = window.pageYOffset;

      if (header) {
        const headerHeight = header.offsetHeight;
        const fadeStartPoint = headerHeight * 0.3;
        const fadeEndPoint = headerHeight * 0.8;

        if (scrollTop >= fadeStartPoint) {
          header.classList.add('fade-out');
          if (scrollTop >= fadeEndPoint) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        } else {
          header.classList.remove('fade-out', 'scrolled');
        }
      }

      const sections = document.querySelectorAll('section[id], header[id]');
      let current = '';
      sections.forEach(section => {
        if (scrollTop >= section.offsetTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      const nearBottom = scrollTop + window.innerHeight >= document.body.offsetHeight - 50;
      if (nearBottom) {
        current = 'contact';
      }

      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === `#${current}`;
        if (matches) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      if (floatingSocial) {
        const threshold = header ? header.offsetHeight * 0.6 : 200;
        const shouldStickBottom = scrollTop > threshold;
        updateFloatingSocialPosition(shouldStickBottom);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    window.addEventListener('resize', () => {
      if (!floatingSocial) return;
      const isBottom = floatingSocial.classList.contains('bottom-left');
      updateFloatingSocialPosition(isBottom);
    });

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right').forEach(el => observer.observe(el));

    function openMobileMenu() {
      if (!hamburgerMenu || !mobileMenuOverlay) return;
      hamburgerMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!hamburgerMenu || !mobileMenuOverlay) return;
      hamburgerMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateFloatingSocialPosition(shouldStickBottom) {
      if (!floatingSocial) return;

      if (shouldStickBottom) {
        floatingSocial.classList.add('bottom-left');
        const availableTop = window.innerHeight - floatingSocial.offsetHeight - FLOATING_BOTTOM_OFFSET;
        const targetTop = Math.max(FLOATING_TOP, availableTop);
        floatingSocial.style.top = `${targetTop}px`;
      } else {
        floatingSocial.classList.remove('bottom-left');
        floatingSocial.style.top = `${FLOATING_TOP}px`;
      }
    }

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', e => {
        if (e.target === mobileMenuOverlay) {
          closeMobileMenu();
        }
      });
    }

    function smoothScrollTo(selector) {
      const target = document.querySelector(selector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          event.preventDefault();
          smoothScrollTo(href);
        }
      });
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          event.preventDefault();
          closeMobileMenu();
          setTimeout(() => smoothScrollTo(href), 300);
        }
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileMenuOverlay?.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    const form = document.querySelector('.futuristic-form');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = (formData.get('name') || 'Portfolio Visitor').toString().trim();
        const email = (formData.get('email') || 'Not provided').toString().trim();
        const project = (formData.get('project') || 'Not specified').toString();
        const message = (formData.get('message') || 'No message provided').toString().trim();

        const subject = encodeURIComponent(`New inquiry from ${name}`);
        const bodyLines = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project Type: ${project || 'Not specified'}`,
          '',
          'Message:',
          message
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));

        window.location.href = `mailto:gamedev.kaushik@gmail.com?subject=${subject}&body=${body}`;

        const submitButton = form.querySelector('.submit-button');
        const label = submitButton?.querySelector('span');
        if (submitButton && label) {
          const originalText = label.textContent;
          label.textContent = 'Opening email client...';
          submitButton.disabled = true;

          setTimeout(() => {
            label.textContent = originalText;
            submitButton.disabled = false;
            form.reset();
          }, 2000);
        }
      });
    }
  });