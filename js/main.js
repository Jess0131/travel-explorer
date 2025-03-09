document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
  AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Current selected country (default: Italy)
    let currentCountry = 'italy';

    // -------------------------
    // DESTINATIONS DATA
    // -------------------------
    const destinationsData = {
        italy: [
            {
                name: 'Rome',
                description: 'Explore ancient ruins, exquisite art, and vibrant street life in Italy\'s iconic capital.',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1023/800/600',
                location: [41.9028, 12.4964],
                attraction: 'Colosseum'
            },
            {
                name: 'Venice',
                description: 'Discover the romantic waterways and architectural marvels of this unique city built on water.',
                image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1024/800/600',
                location: [45.4408, 12.3155],
                attraction: 'Grand Canal'
            },
            {
                name: 'Florence',
                description: 'Immerse yourself in Renaissance art and architecture in this beautiful Tuscan city.',
                image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1025/800/600',
                location: [43.7696, 11.2558],
                attraction: 'Uffizi Gallery'
            },
            {
                name: 'Amalfi Coast',
                description: 'Experience breathtaking coastal views, picturesque villages, and Mediterranean charm.',
                image: 'https://images.unsplash.com/photo-1533165850-62c4c3a608e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1026/800/600',
                location: [40.6340, 14.6027],
                attraction: 'Positano'
            },
            {
                name: 'Lake Como',
                description: 'Relax amid stunning alpine scenery, elegant villas, and crystal-clear waters.',
                image: 'https://images.unsplash.com/photo-1583254151664-5a89717c0d4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1027/800/600',
                location: [45.9994, 9.2729],
                attraction: 'Bellagio'
            },
            {
                name: 'Sicily',
                description: 'Discover a unique blend of cultures, archaeological sites, and beautiful beaches.',
                image: 'https://images.unsplash.com/photo-1523365280197-f1977032bc7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1028/800/600',
                location: [37.5990, 14.0154],
                attraction: 'Valley of the Temples'
            }
        ],
        mexico: [
            {
                name: 'Mexico City',
                description: 'Explore the vibrant capital with its rich history, diverse food scene, and cultural landmarks.',
                image: 'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1029/800/600',
                location: [19.4326, -99.1332],
                attraction: 'Frida Kahlo Museum'
            },
            {
                name: 'Cancún',
                description: 'Relax on pristine beaches and swim in crystal-clear Caribbean waters at this popular resort destination.',
                image: 'https://images.unsplash.com/photo-1570737044892-a8632162ed1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1036/800/600',
                location: [21.1619, -86.8515],
                attraction: 'Chichen Itza'
            },
            {
                name: 'Oaxaca',
                description: 'Discover indigenous cultures, colonial architecture, and incredible regional cuisine.',
                image: 'https://images.unsplash.com/photo-1561490497-43bc900c8e81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1037/800/600',
                location: [17.0732, -96.7266],
                attraction: 'Monte Albán'
            },
            {
                name: 'Puerto Vallarta',
                description: 'Enjoy beautiful beaches, outdoor adventures, and a charming old town on the Pacific coast.',
                image: 'https://images.unsplash.com/photo-1552074284-5e84d87aee1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1038/800/600',
                location: [20.6534, -105.2253],
                attraction: 'Malecón'
            },
            {
                name: 'San Miguel de Allende',
                description: 'Wander through cobblestone streets and admire colorful architecture in this artistic city.',
                image: 'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1039/800/600',
                location: [20.9144, -100.7452],
                attraction: 'Parroquia de San Miguel Arcángel'
            },
            {
                name: 'Tulum',
                description: 'Visit ancient Mayan ruins perched on coastal cliffs above turquoise Caribbean waters.',
                image: 'https://images.unsplash.com/photo-1504730655501-e8ae494bba26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1040/800/600',
                location: [20.2114, -87.4654],
                attraction: 'Tulum Archaeological Zone'
            }
        ],
        korea: [
            {
                name: 'Seoul',
                description: 'Experience the perfect blend of tradition and modernity in Korea\'s dynamic capital city.',
                image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1041/800/600',
                location: [37.5665, 126.9780],
                attraction: 'Gyeongbokgung Palace'
            },
            {
                name: 'Jeju Island',
                description: 'Explore volcanic landscapes, beautiful beaches, and unique natural wonders on this island paradise.',
                image: 'https://images.unsplash.com/photo-1595737361672-5f578a3a4628?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1042/800/600',
                location: [33.3890, 126.4983],
                attraction: 'Seongsan Ilchulbong'
            },
            {
                name: 'Busan',
                description: 'Visit vibrant beaches, coastal temples, and seafood markets in Korea\'s second-largest city.',
                image: 'https://images.unsplash.com/photo-1588051364787-9978e2ab95fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1043/800/600',
                location: [35.1796, 129.0756],
                attraction: 'Haeundae Beach'
            },
            {
                name: 'Gyeongju',
                description: 'Discover ancient temples, royal tombs, and historical sites in Korea\'s former capital.',
                image: 'https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1044/800/600',
                location: [35.8562, 129.2246],
                attraction: 'Bulguksa Temple'
            },
            {
                name: 'Seoraksan National Park',
                description: 'Hike through breathtaking mountain landscapes and enjoy stunning natural scenery.',
                image: 'https://images.unsplash.com/photo-1544183064-0348869133b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1045/800/600',
                location: [38.1196, 128.4656],
                attraction: 'Ulsanbawi Rock'
            },
            {
                name: 'Jeonju',
                description: 'Experience traditional Korean culture, hanok houses, and incredible bibimbap in this historic city.',
                image: 'https://images.unsplash.com/photo-1625600243103-1dc773c84fc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1047/800/600',
                location: [35.8219, 127.1480],
                attraction: 'Jeonju Hanok Village'
            }
        ],
        turkey: [
            {
                name: 'Istanbul',
                description: 'Experience the crossroads of Europe and Asia in this historic city spanning two continents.',
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1048/800/600',
                location: [41.0082, 28.9784],
                attraction: 'Hagia Sophia'
            },
            {
                name: 'Cappadocia',
                description: 'Marvel at surreal landscapes, cave dwellings, and the famous hot air balloon rides.',
                image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1049/800/600',
                location: [38.6431, 34.8266],
                attraction: 'Göreme Open-Air Museum'
            },
            {
                name: 'Pamukkale',
                description: 'Soak in natural thermal pools and explore ancient ruins at this unique natural wonder.',
                image: 'https://images.unsplash.com/photo-1526597873562-98b66ac61de5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1050/800/600',
                location: [37.9215, 29.1218],
                attraction: 'Hierapolis'
            },
            {
                name: 'Antalya',
                description: 'Enjoy beautiful Mediterranean beaches, ancient ruins, and luxury resorts on the Turquoise Coast.',
                image: 'https://images.unsplash.com/photo-1631372233617-9af2f5f72ff5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1051/800/600',
                location: [36.8969, 30.7133],
                attraction: 'Old Town (Kaleici)'
            },
            {
                name: 'Ephesus',
                description: 'Walk through one of the best-preserved ancient cities and marvel at its remarkably intact structures.',
                image: 'https://images.unsplash.com/photo-1594396334947-9aa7eba92a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1052/800/600',
                location: [37.9398, 27.3426],
                attraction: 'Library of Celsus'
            },
            {
                name: 'Bodrum',
                description: 'Discover beautiful beaches, a medieval castle, and vibrant nightlife in this coastal paradise.',
                image: 'https://images.unsplash.com/photo-1599739890027-3ad456aa5532?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                fallbackImage: 'https://picsum.photos/id/1053/800/600',
                location: [37.0343, 27.4305],
                attraction: 'Bodrum Castle'
            }
        ]
    };

    // -------------------------
    // CLIMATE DATA
    // -------------------------
    const climateData = {
        italy: {
            temperatures: [8, 9, 12, 15, 20, 24, 27, 27, 23, 18, 13, 9], // Average temperatures in Celsius by month
            tourism: [30, 40, 50, 70, 75, 90, 100, 95, 80, 60, 40, 60]  // Tourism popularity index (100 = peak)
        },
        mexico: {
            temperatures: [23, 24, 26, 27, 28, 28, 27, 28, 27, 27, 25, 23],
            tourism: [80, 70, 85, 65, 50, 40, 50, 55, 45, 60, 75, 100]
        },
        korea: {
            temperatures: [-3, 0, 5, 12, 17, 22, 25, 26, 21, 15, 7, 0],
            tourism: [25, 30, 50, 65, 70, 60, 55, 65, 70, 80, 60, 40]
        },
        turkey: {
            temperatures: [9, 10, 13, 17, 22, 27, 29, 29, 25, 20, 15, 11],
            tourism: [30, 35, 45, 60, 75, 90, 100, 95, 85, 70, 45, 35]
        }
    };

    // -------------------------
    // TRAVEL TIPS DATA
    // -------------------------
    const travelTips = {
          italy: {
            bestTime: "Spring (April-May) and early Fall (September-October) offer pleasant weather and fewer crowds in Italy.",
            currency: "Italy uses the Euro (€). Budget €50-100 per day for mid-range travel, excluding accommodation.",
            localCustoms: "Italians appreciate greetings before transactions. Learn basic phrases like \"Buongiorno\" (good day) and \"Grazie\" (thank you)."
          },
          mexico: {
            bestTime: "November to April provides dry, sunny weather. Avoid the hurricane season from June to November if visiting coastal regions.",
            currency: "Mexican Peso (MXN). Budget 800-1,500 pesos ($40-75 USD) per day for mid-range travel, excluding accommodation.",
            localCustoms: "Mexicans value personal relationships. Greetings are important, and a relaxed attitude toward time is common in social settings."
          },
          korea: {
            bestTime: "Spring (April-June) for cherry blossoms and Fall (September-November) for colorful foliage offer the best weather and scenery.",
            currency: "South Korean Won (₩). Budget ₩100,000-150,000 ($75-110 USD) per day for mid-range travel, excluding accommodation.",
            localCustoms: "Respect for elders is paramount. Use both hands when giving or receiving items, and remove shoes before entering homes."
          },
          turkey: {
            bestTime: "April-May and September-October offer pleasant temperatures and fewer crowds at major attractions.",
            currency: "Turkish Lira (₺). Budget ₺500-800 ($15-25 USD) per day for mid-range travel, excluding accommodation.",
            localCustoms: "Hospitality is central to Turkish culture. Remove shoes when entering homes, and bring a small gift when invited to someone's house."
        }
    };

    // -------------------------
    // INITIALIZE GLIDE CAROUSEL
    // -------------------------
    // Global carousel instance
    let glideCarousel = null;

    // Create destination slides with better error handling
    function createDestinationSlides(country) {
        const slides = destinationsData[country];
        const slidesContainer = document.getElementById('destinations-slides');
        const bulletsContainer = document.querySelector('.glide__bullets');
        
        // Clear existing slides and bullets
        slidesContainer.innerHTML = '';
        bulletsContainer.innerHTML = '';
        
        // Create slides
        slides.forEach((destination, index) => {
            // Create slide
            const slide = document.createElement('li');
            slide.className = 'glide__slide';
            slide.innerHTML = `
                <div class="destination-card">
                    <img src="${destination.image}" alt="${destination.name}" class="destination-image" 
                         onerror="this.onerror=null; this.src='${destination.fallbackImage}'">
                    <div class="destination-content">
                        <h3>${destination.name}</h3>
                        <p>${destination.description}</p>
                        <button class="destination-button">View Details</button>
                    </div>
                </div>
            `;
            slidesContainer.appendChild(slide);
            
            // Create bullet
            const bullet = document.createElement('button');
            bullet.className = 'glide__bullet';
            bullet.setAttribute('data-glide-dir', `=${index}`);
            bulletsContainer.appendChild(bullet);
        });
        
        // Initialize or reinitialize Glide
        initGlideCarousel();
    }
    
    // More robust carousel initialization
    function initGlideCarousel() {
        
        try {
            // Properly destroy existing carousel
            if (glideCarousel) {
                glideCarousel.destroy();
                glideCarousel = null;
            }
            
            // Ensure the carousel elements exist
            const track = document.querySelector('.glide__track');
            const slides = document.querySelector('.glide__slides');
            
            if (!track || !slides || slides.children.length === 0) {
                console.error('Carousel structure is incomplete or has no slides');
                return;
            }
            
            // Initialize with a delay to ensure cleanup is complete
            setTimeout(() => {
                
                // Initialize new carousel
                glideCarousel = new Glide('.glide-carousel', {
                    type: 'carousel',
                    perView: 1,
                    gap: 20,
                    autoplay: 5000,
                    hoverpause: true,
                    animationDuration: 500,
                    peek: { before: 0, after: 0 },
                    focusAt: 'center'
                });
                
                // Add error handling to mount process
                try {
                    glideCarousel.mount();
                    
                    // Add event listener to update bullets immediately when the move occurs
                    glideCarousel.on('move.before', function() {
                        // Get the index of the slide we're moving to
                        const index = glideCarousel.index;
                        
                        // Update the active bullet manually
                        document.querySelectorAll('.glide__bullet').forEach((bullet, i) => {
                            if (i === index) {
                                bullet.classList.add('glide__bullet--active');
                            } else {
                                bullet.classList.remove('glide__bullet--active');
                            }
                        });
                    });
                } catch (mountError) {
                    console.error('Error mounting Glide carousel:', mountError);
                }
            }, 50);
        } catch (error) {
            console.error('Error in carousel initialization:', error);
        }
    }

    // -------------------------
    // HANDLE COUNTRY SWITCHING
    // -------------------------
    function updateHeroSection(country) {
        const hero = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero-content h1');
        const heroDescription = document.querySelector('.hero-content p');
        
        // Update hero background image based on country
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destinationsData[country][0].image})`;
        
        // Update hero text
        const countryName = country.charAt(0).toUpperCase() + country.slice(1);
        heroTitle.textContent = `Discover ${countryName}`;
        
        // Update description based on country
        const descriptions = {
            italy: "Experience the beauty, history, and culture of Italy's most enchanting destinations",
            mexico: "Explore vibrant culture, ancient ruins, and stunning beaches across Mexico",
            korea: "Discover the perfect blend of tradition and modernity in South Korea",
            turkey: "Journey through stunning landscapes and millennia of history in Turkey"
        };
        heroDescription.textContent = descriptions[country];
    }
    
    // Update travel tips for the selected country
    function updateTravelTips(country) {
        document.getElementById('best-time-tip').textContent = travelTips[country].bestTime;
        document.getElementById('currency-tip').textContent = travelTips[country].currency;
        document.getElementById('local-customs-tip').textContent = travelTips[country].localCustoms;
    }
    
    // Event listeners for navigation buttons - with improved error handling
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            try {
                const country = this.getAttribute('data-country');
                
                // Skip if already on this country
                if (country === currentCountry) return;
                
                
                // Update active button
                const activeButton = document.querySelector('.nav-btn.active');
                if (activeButton) {
                    activeButton.classList.remove('active');
                }
                this.classList.add('active');
                
                // Update current country
                currentCountry = country;
                
                // First destroy the carousel completely
                if (glideCarousel) {
                    glideCarousel.destroy();
                    glideCarousel = null;
                }
                
                // Update UI elements in sequence with small delays
                // This helps ensure DOM updates are processed properly
                
                // 1. Update hero section immediately
                updateHeroSection(country);
                
                // 2. Update country name in map section
                document.getElementById('map-country-name').textContent = 
                    country.charAt(0).toUpperCase() + country.slice(1);
                
                // 3. Then update carousel (most problematic part)
                setTimeout(() => {
                    createDestinationSlides(country);
                    
                    // 4. Update other content after carousel is handled
                    setTimeout(() => {
                        updateMap(country);
                        updateCharts(country);
                        updateTravelTips(country);
                    }, 100);
                }, 50);
            } catch (error) {
                console.error('Error in country switching:', error);
            }
        });
    });
    
    // -------------------------
    // INITIALIZE APP
    // -------------------------
    // Create initial destination slides for Italy (default)
    createDestinationSlides(currentCountry);
    
    // Update hero section for default country
    updateHeroSection(currentCountry);
    
    // Placeholder functions for map and charts (will implement in next steps)
    function updateMap(country) {
        // Will implement in next step
    }
    
    function updateCharts(country) {
        // Will implement in next step
    }
    
    // Initialize travel tips for default country
    updateTravelTips(currentCountry);

    // -------------------------
    // LEAFLET MAP IMPLEMENTATION
    // -------------------------
    let map;
    let markers = [];

    // Initialize the map
    function initMap() {
        // If a map already exists, remove it and create a new one
        if (map) {
            map.remove();
        }
        
        // Create a new map instance
        map = L.map('map', {
            zoomControl: true,
            scrollWheelZoom: false // Disable scroll wheel zoom for better UX
        });
        
        // Add tile layer - using OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Update map for the default country (Italy)
        updateMap(currentCountry);
    }

    // Update map when country changes
    function updateMap(country) {
        if (!map) {
            return; // Exit if map hasn't been initialized
        }
        
        
        // Clear existing markers
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
        
        // Get locations for current country
        const locations = destinationsData[country];
        
        // Exit if no locations
        if (!locations || locations.length === 0) {
            return;
        }
        
        // Create bounds object to determine map view
        const bounds = L.latLngBounds();
        
        // Custom marker icon
        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `<div class="marker-pin"></div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });
        
        // Add markers for each location
        locations.forEach(location => {
            // Only use the top 3 destinations for the map
            if (markers.length >= 3) return;
            
            const latlng = L.latLng(location.location[0], location.location[1]);
            
            // Create marker with custom icon
            const marker = L.marker(latlng, { icon: customIcon })
                .addTo(map)
                .bindPopup(`
                    <div class="popup-content">
                        <h3>${location.name}</h3>
                        <p>${location.description}</p>
                        <div class="popup-attraction">
                            <strong>Must See:</strong> ${location.attraction}
                        </div>
                        <img src="${location.image}" alt="${location.name}" class="popup-image">
                    </div>
                `, {
                    maxWidth: 300,
                    className: 'custom-popup'
                });
            
            // Add to markers array
            markers.push(marker);
            
            // Extend bounds to include this location
            bounds.extend(latlng);
        });
        
        // Fit map to bounds with padding
        map.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 10,
            animate: true
        });
    }

    // -------------------------
    // D3.JS CHARTS IMPLEMENTATION
    // -------------------------
    // Temperature chart
    let temperatureChart;
    let tourismChart;

    function initCharts() {
        // Initialize temperature chart
        createTemperatureChart(currentCountry);
        
        // Initialize tourism popularity chart
        createTourismChart(currentCountry);
    }

    function updateCharts(country) {
        // Update both charts with new country data
        updateTemperatureChart(country);
        updateTourismChart(country);
    }

    // Create the temperature chart
    function createTemperatureChart(country) {
        
        // Get the container
        const chartContainer = document.getElementById('temperature-chart');
        chartContainer.innerHTML = ''; // Clear any existing content
        
        // Chart dimensions
        const margin = { top: 30, right: 30, bottom: 60, left: 60 };
        const width = chartContainer.offsetWidth - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
        
        // Create SVG
        const svg = d3.select('#temperature-chart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Data for the chart
        const data = climateData[country].temperatures;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // X axis - months
        const x = d3.scaleBand()
            .domain(months)
            .range([0, width])
            .padding(0.2);
        
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('transform', 'rotate(-45)')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');
        
        // Y axis - temperature
        const yMax = Math.max(...data) + 5;
        const yMin = Math.min(...data) - 5;
        
        const y = d3.scaleLinear()
            .domain([yMin < 0 ? yMin : 0, yMax])
            .range([height, 0]);
        
        svg.append('g')
            .call(d3.axisLeft(y));
        
        // Y-axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left + 15)
            .attr('x', -height / 2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .style('fill', '#666')
            .style('font-size', '14px')
            .text('Temperature (°C)');
        
        // Add the line
        const line = d3.line()
            .x((d, i) => x(months[i]) + x.bandwidth() / 2)
            .y(d => y(d))
            .curve(d3.curveMonotoneX); // Smooth curve
        
        // Add gradient under the line
        const defs = svg.append('defs');
        
        const gradient = defs.append('linearGradient')
            .attr('id', 'temperature-gradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '0%')
            .attr('y2', '100%');
        
        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', '#ff7e5f')
            .attr('stop-opacity', 0.8);
        
        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', '#feb47b')
            .attr('stop-opacity', 0.2);
        
        // Add the area under the line
        svg.append('path')
            .datum(data)
            .attr('fill', 'url(#temperature-gradient)')
            .attr('stroke', 'none')
            .attr('d', d3.area()
                .x((d, i) => x(months[i]) + x.bandwidth() / 2)
                .y0(height)
                .y1(d => y(d))
                .curve(d3.curveMonotoneX)
            );
        
        // Add the line path
        const path = svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', '#ff7e5f')
            .attr('stroke-width', 4)
            .attr('d', line);
        
        // Animate the line drawing
        const pathLength = path.node().getTotalLength();
        
        path
            .attr('stroke-dasharray', pathLength + ' ' + pathLength)
            .attr('stroke-dashoffset', pathLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0);
        
        // Add dots
        svg.selectAll('.dot')
            .data(data)
            .enter().append('circle')
            .attr('class', 'dot')
            .attr('cx', (d, i) => x(months[i]) + x.bandwidth() / 2)
            .attr('cy', d => y(d))
            .attr('r', 0) // Start with radius 0
            .attr('fill', '#ff7e5f')
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .transition() // Add transition
            .delay((d, i) => i * 150) // Delay by index
            .duration(500)
            .attr('r', 6); // End radius
        
        // Add tooltip functionality
        const tooltip = d3.select('#temperature-chart')
            .append('div')
            .attr('class', 'chart-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background-color', 'white')
            .style('border', '1px solid #ddd')
            .style('border-radius', '4px')
            .style('padding', '10px')
            .style('box-shadow', '0 0 10px rgba(0,0,0,0.1)')
            .style('pointer-events', 'none');
        
        // Mouse events for dots
        svg.selectAll('.dot')
            .on('mouseover', function(event, d) {
                const i = data.indexOf(d);
                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('r', 8)
                    .attr('stroke-width', 3);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                
                tooltip.html(`<strong>${months[i]}:</strong> ${d}°C`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('r', 6)
                    .attr('stroke-width', 2);
                
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
        
        // Store reference to chart for updates
        temperatureChart = { svg, x, y, data, months };
    }

    // Update temperature chart for country change
    function updateTemperatureChart(country) {
        if (!temperatureChart) {
            createTemperatureChart(country);
            return;
        }
        
        
        // Get new data
        const newData = climateData[country].temperatures;
        
        // Update y-axis scale
        const yMax = Math.max(...newData) + 5;
        const yMin = Math.min(...newData) - 5;
        
        const y = temperatureChart.y.domain([yMin < 0 ? yMin : 0, yMax]);
        
        // Update y-axis with animation
        temperatureChart.svg.select('g')
            .transition()
            .duration(1000)
            .call(d3.axisLeft(y));
        
        // Update the line
        const line = d3.line()
            .x((d, i) => temperatureChart.x(temperatureChart.months[i]) + temperatureChart.x.bandwidth() / 2)
            .y(d => y(d))
            .curve(d3.curveMonotoneX);
        
        // Update the area under the line
        temperatureChart.svg.select('path[fill="url(#temperature-gradient)"]')
            .datum(newData)
            .transition()
            .duration(1000)
            .attr('d', d3.area()
                .x((d, i) => temperatureChart.x(temperatureChart.months[i]) + temperatureChart.x.bandwidth() / 2)
                .y0(300 - 30 - 60) // height
                .y1(d => y(d))
                .curve(d3.curveMonotoneX)
            );
        
        // Update line path with animation
        const path = temperatureChart.svg.select('path[stroke="#ff7e5f"]')
            .datum(newData);
        
        const pathLength = path.node().getTotalLength();
        
        path
            .attr('stroke-dasharray', pathLength + ' ' + pathLength)
            .attr('stroke-dashoffset', pathLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0)
            .attr('d', line);
        
        // Update dots with animation
        const dots = temperatureChart.svg.selectAll('.dot')
            .data(newData);
        
        dots.exit().remove();
        
        dots.enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('fill', '#ff7e5f')
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .attr('r', 0)
            .merge(dots)
            .transition()
            .duration(1000)
            .attr('cx', (d, i) => temperatureChart.x(temperatureChart.months[i]) + temperatureChart.x.bandwidth() / 2)
            .attr('cy', d => y(d))
            .attr('r', 6);
        
        // Update stored data
        temperatureChart.data = newData;
    }

    // Create tourism popularity chart
    function createTourismChart(country) {
        
        // Get the container
        const chartContainer = document.getElementById('tourism-chart');
        chartContainer.innerHTML = ''; // Clear any existing content
        
        // Chart dimensions
        const margin = { top: 30, right: 30, bottom: 60, left: 60 };
        const width = chartContainer.offsetWidth - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
        
        // Create SVG
        const svg = d3.select('#tourism-chart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Data for the chart
        const data = climateData[country].tourism;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // X axis - months
        const x = d3.scaleBand()
            .domain(months)
            .range([0, width])
            .padding(0.2);
        
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('transform', 'rotate(-45)')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');
        
        // Y axis - tourism popularity
        const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        
        svg.append('g')
            .call(d3.axisLeft(y));
        
        // Y-axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', -margin.left + 15)
            .attr('x', -height / 2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .style('fill', '#666')
            .style('font-size', '14px')
            .text('Tourism Popularity (%)');
        
        // Color scale for bars (off-season, shoulder season, peak season)
        const colorScale = d => {
            if (d < 40) return '#4CAF50'; // Green for off-season
            if (d < 70) return '#FFC107'; // Yellow for shoulder season
            return '#FF5722'; // Orange/Red for peak season
        };
        
        // Add bars with animation
        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (d, i) => x(months[i]))
            .attr('width', x.bandwidth())
            .attr('y', height) // Start at bottom
            .attr('height', 0) // Start with height 0
            .attr('fill', d => colorScale(d))
            .attr('rx', 4) // Rounded corners
            .attr('ry', 4)
            .transition() // Add transition
            .duration(1000)
            .delay((d, i) => i * 100) // Delay by index
            .attr('y', d => y(d))
            .attr('height', d => height - y(d));
        
        // Add legend
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${width - 150}, 0)`);
        
        const legendItems = [
            { label: 'Peak Season', color: '#FF5722' },
            { label: 'Shoulder Season', color: '#FFC107' },
            { label: 'Off Season', color: '#4CAF50' }
        ];
        
        legendItems.forEach((item, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(0, ${i * 20})`);
            
            legendRow.append('rect')
                .attr('width', 10)
                .attr('height', 10)
                .attr('fill', item.color);
            
            legendRow.append('text')
                .attr('x', 15)
                .attr('y', 10)
                .attr('text-anchor', 'start')
                .style('font-size', '12px')
                .style('fill', '#666')
                .text(item.label);
        });
        
        // Add tooltip functionality
        const tooltip = d3.select('#tourism-chart')
            .append('div')
            .attr('class', 'chart-tooltip')
            .style('opacity', 0)
            .style('position', 'absolute')
            .style('background-color', 'white')
            .style('border', '1px solid #ddd')
            .style('border-radius', '4px')
            .style('padding', '10px')
            .style('box-shadow', '0 0 10px rgba(0,0,0,0.1)')
            .style('pointer-events', 'none');
        
        // Mouse events for bars
        svg.selectAll('.bar')
            .on('mouseover', function(event, d) {
                const i = data.indexOf(d);
                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 0.8);
                
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                
                let seasonType = 'Off Season';
                if (d >= 70) seasonType = 'Peak Season';
                else if (d >= 40) seasonType = 'Shoulder Season';
                
                tooltip.html(`<strong>${months[i]}:</strong> ${d}% <br>${seasonType}`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .transition()
                    .duration(300)
                    .attr('opacity', 1);
                
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
        
        // Store reference to chart for updates
        tourismChart = { svg, x, y, data, months, colorScale, width, height };
    }

    // Update tourism chart for country change
    function updateTourismChart(country) {
        if (!tourismChart) {
            createTourismChart(country);
            return;
        }
        
        
        // Get new data
        const newData = climateData[country].tourism;
        
        // Update bars with animation
        const bars = tourismChart.svg.selectAll('.bar')
            .data(newData);
        
        bars.exit().remove();
        
        bars.enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('rx', 4)
            .attr('ry', 4)
            .attr('x', (d, i) => tourismChart.x(tourismChart.months[i]))
            .attr('width', tourismChart.x.bandwidth())
            .attr('y', tourismChart.height)
            .attr('height', 0)
            .merge(bars)
            .transition()
            .duration(1000)
            .attr('fill', d => tourismChart.colorScale(d))
            .attr('x', (d, i) => tourismChart.x(tourismChart.months[i]))
            .attr('y', d => tourismChart.y(d))
            .attr('height', d => tourismChart.height - tourismChart.y(d));
        
        // Update stored data
        tourismChart.data = newData;
    }

    // Initialize the map
    initMap();

    // Initialize the charts
    initCharts();
});