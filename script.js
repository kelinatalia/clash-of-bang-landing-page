const slider = document.getElementById('timelineScroll');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

function centerMilestone(year) {
    const container = document.getElementById('timelineScroll');
    if (!container) return;
    const milestone = document.querySelector(`.milestone-item[data-year="${year}"]`);
    if (!milestone) return;
    
    document.querySelectorAll('.milestone-card, .timeline-node').forEach(el => {
        el.classList.remove('active');
    });

    const card = milestone.querySelector('.milestone-card');
    const node = milestone.querySelector('.timeline-node');
    if (card) card.classList.add('active');
    if (node) node.classList.add('active');

    const containerWidth = container.offsetWidth;
    const milestoneWidth = milestone.offsetWidth;
    const milestoneLeft = milestone.offsetLeft;
    
    container.scrollTo({
        left: milestoneLeft - (containerWidth / 2) + (milestoneWidth / 2),
        behavior: 'smooth'
    });
}

window.addEventListener('load', () => {
    if(slider) {
        centerMilestone('2018');
    }
});

const items = [
        { title: 'Void Reaver', rarity: 'Legendary', desc: 'A phantom warrior forged in the depths of the Dark Elixir pits.', statLabel: 'Attack Type', statValue: 'Melee / Burst', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVN4gxYByqRl3HjWTomj25ca8FRDXzoeOmaDuyJ4LkgwUzn_JQ_ErkYdss5MNHdo42i_4xr_lGqObe1yqje1TB7XNhWVYsyROQcf29b-_J84PzvSBJhBCn-B2yWWe8dpUAWiY0iBf4VBALRLgkl_NibwVEL45c0IXwnDNHdnT9chloXAcuADuBuQIMiBxw5obIVTYam_Y3s3bs7weW2-TPnaZ1c6XGPimcrN2P5KZK6C19Hh58DBc-W1fvk3hz8R2oLoqU741Tcho' },
        { title: 'Aether Citadel', rarity: 'Mythic', desc: 'Floating high above the smog, this sanctuary serves as the primary hub.', statLabel: 'Location', statValue: 'Cloud District', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhIYAYfUj2_gOwojEr3CbtfKdTrXrOnBuq-iv5-WI4KHnVIbgFSHprViSMzllCM5Sd00g3ZH6AcwwmOaj90RDajcCQWo33wAyGoGOTVN4TFeuDH53OI9AMXinqAznV6LXzlBIAWpPxrxeUCXQ4chbdETF5yU7DztJGcVUgvjLB6KAdZYvfQimMFgVSgv7MaOyv57xWGRyA1_0in621BODstngvV0vv3PW4zc2n8U8J9atHlay6OI0TOm9zkjX5ys7kBLF5PfTtGe0' },
        { title: 'Ethereal Potion', rarity: 'Rare', desc: 'Where the essence of the fallen is refined into potent Elixir.', statLabel: 'Yield Rate', statValue: 'High Energy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNM17j0U7FV3xmgvVEpf58o26zaDtpFTwIlTPcNRiWAMUSeglGc2c7PFCTnNwUvaqatNSB2CgYewhPopctqCOlc2D60eozMgg1U6Zt1_bGYgRgiRFXiRc06Ng6CCkVCaS5fbf4TDxVyD_PmS43u9glR5lFQx8RGQrM-KHZ_XkwDpUS-cFj_nztJG4T4EQRcolWBQLwkbrwrHOzFVTjO98wRINPwxtOyVxlbujkNiOZcw2pPy3mtC2y4QDX5Ds8hQ6JU_SRO1b_uQk' },
        { title: 'Dread Wolf', rarity: 'Common', desc: 'Fast, lethal, and nearly invisible in low-light environments.', statLabel: 'Stealth', statValue: 'Rank A', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9IWbveTbRm7zkhFynzbQM-Ovdqzaj2th7w-zlV4DxfpesKK73JQZ_GtQaoS34Ifd4ER1XArlfPJSnpEg5XhdF2qJW-ukPaZ8eurKvbgQC07ffKFMrAOQjEcdqoteruliBaJq2M_5GGggIfe7LLTm-QsMVHnB5aFTisjBOTLQaju3s9X4857MkFBvFV_5xgvzRq1qIrwElBfMz-1DbmxKnC94YWjvxRiY3lasFgBpa1lre_IEE0tL7tcmW2YKM-RFNC58WKgHLusM' },
        { title: 'Shadow Capital', rarity: 'Legendary', desc: 'The beating heart of the empire. Every stone laid with promise.', statLabel: 'Security', statValue: 'Maximum', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQJp7wFXxzEZBXo1YJWa11BvKU0hRu6ldwtrbetRI6nYsw_Py0DVNhjrZq0IMNEia83lwVK_T9g9b4dIHtxxkEjAYz1GbFRDsNYLZkeztI_0fzmGj4O5XPCmF1nZHLAFupStYF64ZiOevZS1ObSlCbYZmJCLZ7wNY1Xl98-yvYgsAd9CTadO0dyNudHGsdSKTNvyXYBpxznG7gHCVx2HGTpa5-aBe1sLJly5M_dwW_usUktvGFntmc8SgBHQzbZQ8hGCVVzjljnuA' },
        { title: 'Chronos Core', rarity: 'Mythic', desc: 'Experimental power source that temporarily slows time in a radius.', statLabel: 'Stability', statValue: 'Unstable', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdz5l_W9TJ8TPsK8FvcfTCu2EB4lSdKDQTJ-TtarBt3luA_qes5IY-muo-m2dlH3AUAeRuUjl5pqRGF_EpJJELCpUBCmKKTnxWtcVWFLww4SZngLqTWKzpvZNeDYhKRazx5rapehbDJnBAzfGIv-jklgvpmDRgeNdphgiKjbbwaZBzNtg8d2IuPYHqv30bSUjsriwk4LJu3ywearY-6vELZgzEU7n0ZKTreCVsb4t58I7ILqu-Pq-KjfyIGaf_HY1trDXnZVec3Hg' },
        { title: 'Elixir Golem', rarity: 'Rare', desc: 'A lumbering mass of crystalized energy that splits upon defeat.', statLabel: 'Durability', statValue: 'Immense', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP6RPQJGB1Qbe6LLZP8TkdiDjPh73T_L5ejWC8iI5A_5IrgSshauAGLwtb1CdA3kl6-YXEw9V_RQkISoL9mB9mh3UOBYHmH8i9RrZg8opnn8CD3x40yx8k1Jcs5J2aKoA2GoluGBmcyQV_5sJfrWR_PZJILkQym_ul4IsYy_kd0NYmqLl9j_tRcgKBqAo5eZa5mes7xaACyz6WbQFqpiewr1CUmptldnPG83r6Nwl7fx19WKXRtJZbmu23OPv66j3tj3Y-P_VCWBQ' },
        { title: 'Astral Archer', rarity: 'Common', desc: 'Elite marksmen who draw arrows from the stars themselves.', statLabel: 'Range', statValue: 'Infinite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL26fSTZDQVWmlXUKvj02c8fXqt3J6NWqExATb_rjGNfEjwxB_zlHKr7qBThjYn74Y_M9RAEX1P3GdS_orUDpRzh3qciZyLPsWJUEkkGAc008RJ-JFxExqyW9Ypqk8YtSNROXkypyizH2xuHbSp8fLbj5tn_LaBkcCKTKS2J2utdHkaytOqXfuNylgO-ySX-38MPt4Ks19h9L0QKO3OnBEUtbal-gMFlu5-uu9nbscyzBx1iXraq3e8SP-_l_Jq-Nzp_R2YPFiVyM' },
        { title: 'Abyssal Knight', rarity: 'Legendary', desc: 'Heavily armored juggernaut fueled by sheer dark willpower.', statLabel: 'Defense', statValue: '2500+', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkM3mnFT-PRH0XisQLS9tcJVzI3yZMndgOsKElJdVu4Fm9ZmeGGNqcY4NM3stteU4HkQJMW5-yBLV0525ujukltUxHGQEGufe6UTvYWOcm_Qa0KP0PaPui9npDCMPGu0DFWYT2jmb6uSAkGRG1eCmlFez5SRCc2SSkvWdHMdOIBiKzXsGj3vmVkrFO0LmbozmFAgb65hnzhFOceTJnledsDMXfnBvZlzQSBy8WDCRPOnTHK-oBjKMDZBIgksfd5RL9fjYtDEtGwKg' },
        
        { title: 'Flame Wyvern', rarity: 'Mythic', desc: 'Ancient dragon subspecies that exhales white-hot plasma.', statLabel: 'Element', statValue: 'Plasma', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIYIGT2t4zOND-3TBGZKL7sgm' },
        { title: 'Frost Sentinel', rarity: 'Rare', desc: 'Frozen guardians that halt intruders with absolute zero aura.', statLabel: 'Aura', statValue: 'Cryo-Lock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCANk7P4iKCQ4hPdK-Fprs931X9' },
        { title: 'Mana Wraith', rarity: 'Common', desc: 'Low-level spirits that drain magic from nearby constructs.', statLabel: 'Drain', statValue: '15 MP/s', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkFc3uVVGze9DmpVJ5mzvTLd' },
        { title: 'Cursed Obelisk', rarity: 'Legendary', desc: 'Ancient monolith that projects fear into the hearts of foes.', statLabel: 'Debuff', statValue: 'Panic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6EC8eQ50-E' },
        { title: 'Soul Harvester', rarity: 'Mythic', desc: 'Mechanical reaper designed to collect essence from the fallen.', statLabel: 'Storage', statValue: '10k Souls', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7VpJII8F_pUjHqHcwtOuok4-SM' },
        { title: 'Titan Beetle', rarity: 'Rare', desc: 'Massive insectoid carrier capable of transporting entire units.', statLabel: 'Capacity', statValue: '50 Slots', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoAZDGulP0A6' },
        { title: 'Storm Weaver', rarity: 'Common', desc: 'Magi who manipulate local atmospheric pressure for lightning.', statLabel: 'Charge', statValue: 'Rapid', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZ--mmjygZUujp9kVHtht2yeU9Y' },
        { title: 'Obsidian Guard', rarity: 'Legendary', desc: 'Indestructible statues brought to life by royal decree.', statLabel: 'Material', statValue: 'Obsidian', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZQTg3jKn1MTD1YnuyJW0HTt3' },
        { title: 'Nether Portal', rarity: 'Mythic', desc: 'Direct gateway to the core of the Dark Elixir dimensions.', statLabel: 'Risk', statValue: 'Extreme', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZdpDUflpcVjGe4MGwbXaVXBe' },
        
        { title: 'Rift Stalker', rarity: 'Rare', desc: 'Predator from between worlds that tracks targets by scent.', statLabel: 'Tracking', statValue: 'Absolute', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9CBN0QWnT3KWWpEalCncM' },
        { title: 'Eclipse Dragon', rarity: 'Legendary', desc: 'The ultimate apex predator, appearing only during cosmic events.', statLabel: 'Power', statValue: 'Godly', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQJp7wFXxzEZBXo1YJWa11Bv' }
    ];

let currentPage = 1;
const itemsPerPage = 9;
let filteredItems = [...items];

const galleryGrid = document.getElementById('galleryGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const paginationNumbers = document.getElementById('paginationNumbers');
const catalogSearch = document.getElementById('catalogSearch');
const rarityFilter = document.getElementById('rarityFilter');

function renderGalleryItems() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = filteredItems.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
        galleryGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 80px 0; color: #988d9f;">No items found in the archives.</div>';
    }

    pageItems.forEach(item => {
        const cardElement = document.createElement('article');
        cardElement.className = 'gallery-card gallery-card-item';
        
        cardElement.innerHTML = `
            <div class="card-visual-frame">
                <img alt="${item.title}" src="${item.img}"/>
                <div class="card-visual-dim"></div>
                <div class="card-visual-gradient"></div>
                <div class="card-rarity-ribbon">${item.rarity.toUpperCase()}</div>
            </div>
            <div class="card-text-details">
                <div class="card-title-group">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="card-stats-row">
                    <div class="stat-meta-column">
                        <span class="label">${item.statLabel}</span>
                        <span class="val">${item.statValue}</span>
                    </div>
                    <div class="stat-meta-column right-align">
                        <span class="label">Rarity</span>
                        <span class="val" style="color: #ddb7ff;">${item.rarity}</span>
                    </div>
                </div>
            </div>
        `;
        galleryGrid.appendChild(cardElement);
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    if (!paginationNumbers) return;
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    paginationNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const numBtn = document.createElement('button');
        numBtn.textContent = i;
        numBtn.className = 'btn-page-number';
        if (i === currentPage) {
            numBtn.classList.add('active-page-btn');
        }

        numBtn.addEventListener('click', () => {
            currentPage = i;
            renderGalleryItems();
            window.scrollTo({ top: 300, behavior: 'smooth' });
        });
        paginationNumbers.appendChild(numBtn);
    }

    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
}

function processFiltering() {
    if (!catalogSearch || !rarityFilter) return;
    const searchString = catalogSearch.value.toLowerCase();
    const chosenRarity = rarityFilter.value;

    filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchString) || item.desc.toLowerCase().includes(searchString);
        const matchesRarity = chosenRarity === 'all' || item.rarity === chosenRarity;
        return matchesSearch && matchesRarity;
    });

    currentPage = 1;
    renderGalleryItems();
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderGalleryItems();
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderGalleryItems();
        }
    });
}

if (catalogSearch) catalogSearch.addEventListener('input', processFiltering);
if (rarityFilter) rarityFilter.addEventListener('change', processFiltering);

window.addEventListener('DOMContentLoaded', () => {
    renderGalleryItems();
});

const heroContext = document.getElementById('forge-your-legacy');
const heroLayers = document.querySelectorAll('.hero-bg-layer');
let currentBgIdx = 0;
let cycleTimer;

function handleBgRotation() {
    heroLayers[currentBgIdx].classList.remove('active');
    currentBgIdx = (currentBgIdx + 1) % heroLayers.length;
    heroLayers[currentBgIdx].classList.add('active');
}

if (heroContext) {
    heroContext.addEventListener('mouseenter', () => {
        cycleTimer = setInterval(handleBgRotation, 3000);
    });

    heroContext.addEventListener('mouseleave', () => {
        clearInterval(cycleTimer);
        heroLayers.forEach((layer, i) => {
            layer.classList.toggle('active', i === 0);
        });
        currentBgIdx = 0;
    });

    window.addEventListener('scroll', () => {
        const offsetAmount = window.pageYOffset;
        const currentActiveLayer = document.querySelector('.hero-bg-layer.active');
        if (currentActiveLayer) {
            currentActiveLayer.style.transform = `translateY(${offsetAmount * 0.1}px)`;
        }
    });
}

const trackWrapperElement = document.getElementById('carousel-track-wrapper');
const prevArrowBtn = document.getElementById('carousel-prev');
const nextArrowBtn = document.getElementById('carousel-next');

if (trackWrapperElement && prevArrowBtn && nextArrowBtn) {
    nextArrowBtn.addEventListener('click', () => {
        const singleSlideWidth = trackWrapperElement.querySelector('.carousel-item-slide').offsetWidth;
        trackWrapperElement.scrollBy({ left: singleSlideWidth, behavior: 'smooth' });
    });

    prevArrowBtn.addEventListener('click', () => {
        const singleSlideWidth = trackWrapperElement.querySelector('.carousel-item-slide').offsetWidth;
        trackWrapperElement.scrollBy({ left: -singleSlideWidth, behavior: 'smooth' });
    });
}

const mapViewportFrame = document.getElementById('map-viewport');
let isMapDragging = false;
let mapStartX, mapStartY;
let mapScrollLeft, mapScrollTop;

if (mapViewportFrame) {
    mapViewportFrame.addEventListener('mousedown', (e) => {
        isMapDragging = true;
        mapStartX = e.pageX - mapViewportFrame.offsetLeft;
        mapStartY = e.pageY - mapViewportFrame.offsetTop;
        mapScrollLeft = mapViewportFrame.scrollLeft;
        mapScrollTop = mapViewportFrame.scrollTop;
    });

    mapViewportFrame.addEventListener('mouseleave', () => { isMapDragging = false; });
    mapViewportFrame.addEventListener('mouseup', () => { isMapDragging = false; });

    mapViewportFrame.addEventListener('mousemove', (e) => {
        if (!isMapDragging) return;
        e.preventDefault();
        const currentX = e.pageX - mapViewportFrame.offsetLeft;
        const currentY = e.pageY - mapViewportFrame.offsetTop;
        const distanceX = currentX - mapStartX;
        const distanceY = currentY - mapStartY;
        mapViewportFrame.scrollLeft = mapScrollLeft - distanceX;
        mapViewportFrame.scrollTop = mapScrollTop - distanceY;
    });

    mapViewportFrame.addEventListener('touchstart', (e) => {
        isMapDragging = true;
        mapStartX = e.touches[0].pageX - mapViewportFrame.offsetLeft;
        mapStartY = e.touches[0].pageY - mapViewportFrame.offsetTop;
        mapScrollLeft = mapViewportFrame.scrollLeft;
        mapScrollTop = mapViewportFrame.scrollTop;
    }, { passive: false });

    mapViewportFrame.addEventListener('touchend', () => { isMapDragging = false; });

    mapViewportFrame.addEventListener('touchmove', (e) => {
        if (!isMapDragging) return;
        const currentX = e.touches[0].pageX - mapViewportFrame.offsetLeft;
        const currentY = e.touches[0].pageY - mapViewportFrame.offsetTop;
        const distanceX = currentX - mapStartX;
        const distanceY = currentY - mapStartY;
        mapViewportFrame.scrollLeft = mapScrollLeft - distanceX;
        mapViewportFrame.scrollTop = mapScrollTop - distanceY;
    }, { passive: false });
}

const registrationForm = document.getElementById('clanRegistrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameValue = document.getElementById('joinerName').value.trim();
        const emailValue = document.getElementById('joinerEmail').value.trim();
        const genderValue = document.getElementById('joinerGender').value;
        const ageValue = document.getElementById('joinerAge').value.trim();
        const troopValue = document.getElementById('joinerTroop').value;
        const reasonValue = document.getElementById('joinerReason').value.trim();

        if (nameValue.length === 0) {
            alert('Full Name cannot be left blank.');
            return;
        }

        if (emailValue.length === 0) {
            alert('Email Address cannot be left blank.');
            return;
        }

        if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1 || emailValue.indexOf('@') > emailValue.lastIndexOf('.')) {
            alert('Please enter a valid structure of email address.');
            return;
        }

        if (genderValue === '') {
            alert('Please select your gender identity.');
            return;
        }

        if (ageValue.length === 0) {
            alert('Age field must be filled.');
            return;
        }

        const numericAge = parseInt(ageValue);
        if (numericAge < 13 || numericAge > 99) {
            alert('Age registration parameter must be between 13 and 99 years old.');
            return;
        }

        if (troopValue === '') {
            alert('You must assign a favorite troop leader.');
            return;
        }

        if (reasonValue.length < 15) {
            alert('Reason to join description must be at least 15 characters long.');
            return;
        }

        alert('Registration packet submitted successfully to the High Legion!');
        registrationForm.reset();
        window.location.href = 'index.html';
    });
}

const filterTabs = document.querySelectorAll('.filter-buttons-bar button');
const tacticalCards = document.querySelectorAll('.troop-tactical-card');

if (filterTabs && tacticalCards.length > 0) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => {
                t.classList.remove('active-filter-tab');
            });
            tab.classList.add('active-filter-tab');

            const selectedCategory = tab.textContent.trim();

            tacticalCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'All Troops' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

const troopsSearch = document.getElementById('troopsSearchInput');
if (troopsSearch && tacticalCards.length > 0) {
    troopsSearch.addEventListener('input', () => {
        const query = troopsSearch.value.toLowerCase();
        tacticalCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            if (cardTitle.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const mapViewport = document.getElementById('map-viewport');
const mapContent = document.getElementById('map-content');

if (mapViewport && mapContent) {
    let isMouseDown = false;
    let startX, startY;
    let scrollLeft, scrollTop;

    mapViewport.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        mapViewport.style.cursor = 'grabbing';
        startX = e.pageX - mapViewport.offsetLeft;
        startY = e.pageY - mapViewport.offsetTop;
        scrollLeft = mapViewport.scrollLeft;
        scrollTop = mapViewport.scrollTop;
    });

    mapViewport.addEventListener('mouseleave', () => {
        isMouseDown = false;
        mapViewport.style.cursor = 'grab';
    });

    mapViewport.addEventListener('mouseup', () => {
        isMouseDown = false;
        mapViewport.style.cursor = 'grab';
    });

    mapViewport.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - mapViewport.offsetLeft;
        const y = e.pageY - mapViewport.offsetTop;
        const walkX = (x - startX) * 1.5;
        const walkY = (y - startY) * 1.5;
        mapViewport.scrollLeft = scrollLeft - walkX;
        mapViewport.scrollTop = scrollTop - walkY;
    });
}

const mapImage = document.querySelector('#map-content img');
if (mapImage) {
    mapImage.addEventListener('dragstart', (e) => {
        e.preventDefault(); 
    });
}