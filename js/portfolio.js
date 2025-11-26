// Featured Games Data
const featuredGamesPool = {
    'Race_Time': {
      image: 'files/projecticons/icon_racetime.png',
      title: 'Race_Time',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://gamedevkaushik.itch.io/race-time" target="_blank">Download on itch.io</a>',
      description: 'A high-speed racing challenge where control meets chaos! Control your car using only the mouse to slow down time and rotate the car with pinpoint precision. You only get 10 seconds of total slowmo for the entire run - master the art of timing and angle!',
      features: [
        'Mouse-only control system - no brakes, no steering wheel',
        'Time manipulation mechanics - slow motion with limited duration',
        '10 seconds of total slowmo per run - strategic resource management',
        'Physics-based car rotation and movement',
        'High score system - chase the perfect lap time',
        'Unity 20th Anniversary Game Jam submission'
      ]
    },
    'TukTuk Race': {
      image: 'files/projecticons/icon_tuktukrace.png',
      title: 'TukTuk Race',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://play.google.com/store/apps/details?id=com.darkpyre.tuktuk" target="_blank">Android</a>',
      description: 'Dive into a world where the traditional meets the thrill of racing! Race using Tuk-tuks transformed into high-speed racing machines. Choose between Racing Mode for simplified controls or Simulation Mode with realistic physics and side characters balancing your Tuk-tuk.',
      features: [
        'Two game modes: Racing Mode and Simulation Mode',
        'Realistic physics with side forces during turns',
        'Power-ups: Booster, Homing Missile, Rocket Launcher, Mine, Minigun, Shield',
        'Side characters balance your Tuk-tuk in simulation mode',
        'Intuitive touch controls for mobile gameplay',
        'Various stages and levels with increasing challenges'
      ]
    },
    'Drive Shack Golf and Games': {
      image: 'files/projecticons/icon_driveshack.png',
      title: 'Drive Shack Golf and Games',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://www.driveshack.com/play/" target="_blank">Learn More</a>',
      description: 'Where fun meets friendly competition! Experience a mix of driving range games, mini golf, and real-life courses, all enhanced with TrackMan™ Range technology for precision ball tracking and immersive gameplay.',
      features: [
        'A variety of driving range games for all skill levels',
        'Mini golf courses with vibrant, themed environments',
        'Real-life golf course challenges (e.g., Casa de Campo, St. Andrews)',
        'TrackMan™ Range technology for real-time ball flight, launch angle, and speed tracking',
        'Interactive and social gameplay experiences',
        'Food, drink, and group event options at venues'
      ]
    },
    'Velawoods English': {
      image: 'files/projecticons/icon_velawoods.png',
      title: 'Velawoods English',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://velawoodsenglish.com/" target="_blank">Learn More</a>',
      description: 'Velawoods English is a platform for learning English through games and interactive activities.',
      features: [
        'Interactive English learning through engaging games and activities',
        'Comprehensive curriculum covering vocabulary, grammar, and pronunciation',
        'Adaptive learning system that adjusts to individual progress',
        'Multiplayer challenges and competitions with other learners',
        'Progress tracking and achievement system',
        'Available across multiple platforms for seamless learning'
      ]
    },
    'Ashwathama': {
      image: 'files/projecticons/icon_ashwathama.jpg',
      title: 'Ashwathama',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://play.google.com/store/apps/details?id=com.virtualinfocom.Ashwathama" target="_blank">Android</a>',
      description: 'Action-packed 3D fighting game featuring the legendary warrior Ashwathama',
      features: [
        'Play as the immortal warrior Ashwathama',
        'Immersive 3D combat system',
        'Epic battles with mythological enemies',
        'Ancient Indian warfare and martial arts',
        'Stunning visual effects and animations',
        'Character progression and skill upgrades'
      ]
    },
    'Star Titan': {
      image: 'files/projecticons/icon_startitan.png',
      title: 'Star Titan',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://play.google.com/store/apps/details?id=com.DarkPyreInteractive.StarTitan&hl=en_IN" target="_blank">Android</a><a href="https://apps.apple.com/us/app/star-titan/id1482626137" target="_blank">iOS</a>',
      description: 'Epic space adventure where you pilot powerful mechs through intense battles across the galaxy',
      features: [
        'Command powerful mech units in space combat',
        'Strategic gameplay with tactical decision making',
        'Multiple mission types and objectives',
        'Upgrade and customize your mech arsenal',
        'Immersive sci-fi storyline and environments',
        'Challenging AI opponents and boss battles'
      ]
    },
    'Measure PM': {
      image: 'files/projecticons/icon_measure.png',
      title: 'Measure PM',
      tech: 'Unity',
      links: '<span>Unity • </span><a href="https://play.google.com/store/apps/details?id=com.measuresoftware.app&hl=en_IN" target="_blank">Android</a> <a href="https://apps.apple.com/in/app/measurepm/id1493856868" target="_blank">IOS</a>',
      description: 'It is a cloud-based innovative, comprehensive, effective, paperless suite of HIPAA-compliant tools delivering Practice Management, Data Collection, Scheduling, and Revenue Cycle Management for ABA Therapy providers.',
      features: [
        'AR-powered measurement using device camera',
        'Measure distances, areas, and volumes accurately',
        'Multiple measurement units (metric and imperial)',
        'Save and share measurement results',
        'User-friendly interface with intuitive controls',
        'Perfect for home improvement and professional use'
      ]
    }
  };

  // Select one featured game per week
  // Games rotate weekly starting with Race_Time
  function selectFeaturedGames() {
    const gameOrder = ['Race_Time', 'TukTuk Race', 'Drive Shack Golf and Games', 'Velawoods English', 'Ashwathama', 'Star Titan', 'Measure PM'];

    // Calculate which week we're in (starting from a reference date)
    // Use a reference date and add offset to ensure Race_Time shows first
    // If Velawoods (index 3) was showing, we need to offset by -3 to get Race_Time (index 0)
    const referenceDate = new Date('2025-01-01T00:00:00');
    const today = new Date();

    // Calculate days since reference date
    const timeDiff = today.getTime() - referenceDate.getTime();
    const daysSinceStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate week number (weeks since reference date)
    const weekNumber = Math.floor(daysSinceStart / 7);

    // Add offset to ensure Race_Time (index 0) is shown first
    // If Velawoods (index 3) was showing, we offset by -3 to get Race_Time (index 0)
    const offset = -3; // Offset to make Race_Time show first

    // Calculate index in the rotation (modulo to cycle through all games)
    const gameIndex = (weekNumber + offset) % gameOrder.length;

    // Ensure positive index
    const finalIndex = gameIndex < 0 ? gameIndex + gameOrder.length : gameIndex;

    // Return array with single game
    return [gameOrder[finalIndex]];
  }

  // Generate featured card HTML
  function generateFeaturedCard(gameKey) {
    const game = featuredGamesPool[gameKey];
    const featuresJSON = JSON.stringify(game.features);

    // Parse links to separate tech and url
    // Expected format: <span>Tech • </span><a href="url">Text</a>
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = game.links;

    const linkElement = tempDiv.querySelector('a');
    const linkUrl = linkElement ? linkElement.getAttribute('href') : '#';
    const linkText = linkElement ? linkElement.textContent : 'Learn More';

    // Determine tech icon
    let techIcon = '';
    if (game.tech === 'Unity') {
      techIcon = '<img src="files/gameengines/unity.png" alt="Unity" style="width: 24px; height: 24px; object-fit: contain;">';
    }

    return `
      <div class="featured-card" data-features='${featuresJSON}'>
        <img src="${game.image}" alt="${game.title}" class="project-image">
        
        <div class="featured-content">
          <div class="project-header">
            <div class="project-info">
              <h3 class="project-title">${game.title}</h3>
            </div>
          </div>
          
          <div class="tech-stack-highlight">
            ${techIcon}
            <span style="color: var(--white); font-weight: 700; font-size: 1rem;">${game.tech}</span>
          </div>
          
          <p class="project-description">${game.description}</p>
          
          <div class="featured-actions" style="display: flex; gap: 1rem; align-items: center;">
            <button class="view-features-btn" onclick="openGamePopup(this)" style="margin: 0;">View Features</button>
            <a href="${linkUrl}" target="_blank" class="view-features-btn" style="text-decoration: none; display: inline-block;">${linkText}</a>
          </div>
        </div>
      </div>
    `;
  }

  // Open game popup with game details
  function openGamePopup(button) {
    const card = button.closest('.project-card, .featured-card');
    if (!card) return;

    const popup = document.getElementById('gamePopup');
    const image = card.querySelector('.project-image');
    const title = card.querySelector('.project-title');
    const links = card.querySelector('.project-links');
    const description = card.querySelector('.project-description');
    const featuresData = card.getAttribute('data-features');

    if (!popup || !title || !description || !featuresData) return;

    // Set popup content
    const popupImage = document.getElementById('popupImage');
    const popupTitle = document.getElementById('popupTitle');
    const popupLinks = document.getElementById('popupLinks');
    const popupDescription = document.getElementById('popupDescription');
    const popupFeatures = document.getElementById('popupFeatures');

    if (image && image.src) {
      popupImage.src = image.src;
      popupImage.alt = image.alt || title.textContent;
      popupImage.style.display = 'block';
    } else {
      popupImage.style.display = 'none';
    }

    popupTitle.textContent = title.textContent;
    popupLinks.innerHTML = links ? links.innerHTML : '';
    popupDescription.textContent = description.textContent;

    // Parse and display features
    try {
      const features = JSON.parse(featuresData);
      popupFeatures.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
    } catch (e) {
      popupFeatures.innerHTML = '<li>Features not available</li>';
    }

    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close game popup
  function closeGamePopup() {
    const popup = document.getElementById('gamePopup');
    if (popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close popup on close button click
  document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.getElementById('gamePopupClose');
    const popup = document.getElementById('gamePopup');

    if (closeBtn) {
      closeBtn.addEventListener('click', closeGamePopup);
    }

    // Close popup on background click
    if (popup) {
      popup.addEventListener('click', function (e) {
        if (e.target === popup) {
          closeGamePopup();
        }
      });
    }

    // Close popup on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && popup && popup.classList.contains('active')) {
        closeGamePopup();
      }
    });
  });

  // Load featured games on page load
  function loadFeaturedGames() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    const selectedGames = selectFeaturedGames();
    featuredGrid.innerHTML = selectedGames.map(gameKey => generateFeaturedCard(gameKey)).join('');
  }

  // Loading Screen
  window.addEventListener('load', function () {
    setTimeout(() => {
      document.getElementById('loadingOverlay').classList.add('hidden');
      loadFeaturedGames();
    }, 1000);
  });

  // Hamburger Menu Toggle
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  function openMobileMenu() {
    hamburgerMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburgerMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking overlay background
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function (e) {
      if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
      }
    });
  }

  // Close menu when clicking mobile nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Navigation (Desktop)
  document.querySelectorAll('.nav a[href^="index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      if (href === 'index.html') {
        window.location.href = 'index.html';
      } else if (href.includes('#')) {
        const section = href.split('#')[1];
        window.location.href = `index.html#${section}`;
      }
    });
  });

  // Floating Social Bar Logic
  const floatingSocial = document.getElementById('floatingSocial');
  const header = document.querySelector('header');
  const FLOATING_TOP = 110;
  const FLOATING_BOTTOM_OFFSET = 30;

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

    if (floatingSocial) {
      const threshold = header ? header.offsetHeight * 0.6 : 200;
      const shouldStickBottom = scrollTop > threshold;
      updateFloatingSocialPosition(shouldStickBottom);
    }
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

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  window.addEventListener('resize', () => {
    if (!floatingSocial) return;
    const isBottom = floatingSocial.classList.contains('bottom-left');
    updateFloatingSocialPosition(isBottom);
  });