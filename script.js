document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementleri
    const universe = document.getElementById('universe');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const world = document.getElementById('world');
    const storyContainer = document.getElementById('story-scroll-container');

    // ======================================= */
    // === YENİ FONKSİYONLAR === */
    // ======================================= */

    // 1. Göz Kırpan Yıldızları Oluşturma
    function createTwinklingStars() {
        const starCount = 200; // Oluşturulacak yıldız sayısı
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1; // 1px ile 4px arası boyut
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            // Her yıldızın animasyon başlangıcını rastgele yap
            star.style.animationDelay = `${Math.random() * 4}s`;
            star.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3-5 saniye arası süre
            universe.appendChild(star);
        }
    }

    // 2. İmleç Takip Efektini Oluşturma
    function createCursorTrail(e) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        // Performans için kaydırma sırasında daha büyük bir iz bırak
        if(isScrolling) {
            trail.style.transform = 'translate(-50%, -50%) scale(2)';
        }

        document.body.appendChild(trail);

        // İzi bir süre sonra DOM'dan kaldır
        setTimeout(() => {
            trail.remove();
        }, 800);
    }
    
    // 3. Final Yazısı ve Işıltıları Oluşturma
    function createFinalQuote() {
        const quoteContainer = document.createElement('div');
        quoteContainer.classList.add('final-quote');
        quoteContainer.innerText = "Işık, ancak gölge ile anlam kazanır.";
        storyContainer.appendChild(quoteContainer);
        
        // Yazının etrafına ışıltılar ekle
        setInterval(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.top = `${Math.random() * 80 + 10}%`;
            sparkle.style.left = `${Math.random() * 90 + 5}%`;
            sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
            quoteContainer.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000); // Işıltıyı DOM'dan temizle
        }, 200);
    }


    // ======================================= */
    // === HİKAYE VERİSİ VE MANTIĞI === */
    // ======================================= */
    
    const storyData = [ /* ... (Bu kısım öncekiyle aynı, değişmedi) ... */ { text: "Evrenin sonsuz karanlığında...", action: () => {} }, { text: "Ancak bir şey değişmeye başladı...", action: () => { moon.classList.add('wistful'); moon.style.left = '75%'; } }, { text: "Güneş ise bu değişimi fark ettiğinde şaşırdı...", action: () => { sun.classList.add('surprised'); moon.classList.remove('wistful'); moon.style.left = '70%'; } }, { text: "Ay, yörüngesini değiştirdi...", action: () => { sun.classList.add('happy'); moon.style.left = '60%'; moon.style.background = '#FFE4E1'; moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4'; } }, { text: "Güneş, güçlüydü, ihtişamlıydı ama...", action: () => { sun.classList.add('surprised'); moon.classList.add('happy'); sun.style.left = '45%'; moon.style.left = '55%'; moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)'; } }, { text: "Güneş, gezegenlerin gökyüzünde Ay’a baktığını gördü...", action: () => { sun.classList.add('angry'); moon.classList.add('surprised'); sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)'; } }, { text: "Bu kez Ay'ın içinde bir kıskançlık büyümeye başladı...", action: () => { moon.classList.add('angry'); sun.classList.add('happy'); } }, { text: "Bir gün Ay, rüyasında Güneş'i gördü...", action: () => { sun.classList.add('angry'); moon.classList.add('surprised'); sun.style.left = '48%'; moon.style.left = '52%'; sun.style.transform = 'translate(-50%, -50%) scale(1.1)'; } }, { text: "Ama bazen araya ikisinin de dünyaları girer...", action: () => { sun.classList.add('sad'); moon.classList.add('sad'); sun.style.left = '20%'; moon.style.left = '80%'; world.style.left = '50%'; world.style.opacity = '1'; } }, { text: "Güneş, Ay'ı göremediği için...", action: () => { sun.classList.add('sad'); moon.classList.add('sad'); sun.style.left = '20%'; moon.style.left = '80%'; world.style.left = '50%'; world.style.opacity = '1'; moon.style.boxShadow = '0 0 5px #444'; moon.style.background = '#888'; } }, { text: "Görünmez olduğunu düşündüğünde...", action: () => { sun.classList.add('sad'); moon.classList.remove('sad'); moon.classList.add('happy'); world.style.left = '50%'; world.style.opacity = '1'; moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff'; moon.style.background = '#f0f8ff'; } }, { text: "Sonra, evrenin döngüsü devam eder...", action: () => { sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '35%'; moon.style.left = '65%'; } }, { text: '"Gözlerime bakamasan da şu an..."', action: () => { sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '45%'; moon.style.left = '55%'; moon.style.transform = 'translate(-50%, -50%) rotate(15deg)'; } } ];

    function resetAllStates() { /* ... (Bu fonksiyon da aynı, değişmedi) ... */ const expressions = ['happy', 'sad', 'surprised', 'angry', 'wistful']; sun.classList.remove(...expressions); moon.classList.remove(...expressions); sun.style.left = '20%'; sun.style.top = '50%'; sun.style.transform = 'translate(-50%, -50%) scale(1)'; sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`; moon.style.left = '80%'; moon.style.top = '50%'; moon.style.transform = 'translate(-50%, -50%) rotate(0deg)'; moon.style.background = 'var(--moon-color)'; moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)'; world.style.left = '-100px'; world.style.opacity = '0'; }

    function populateStory() { /* ... (Bu fonksiyon da aynı, değişmedi) ... */ storyData.forEach((scene, index) => { const sceneEl = document.createElement('div'); sceneEl.classList.add('story-scene'); sceneEl.setAttribute('data-scene-index', index); const topDecoration = document.createElement('div'); topDecoration.classList.add('flower-decoration', 'top'); const bottomDecoration = document.createElement('div'); bottomDecoration.classList.add('flower-decoration', 'bottom'); for (let i = 0; i < 15; i++) { const flower = document.createElement('div'); if (index % 2 === 0) { flower.classList.add('lale'); } else { flower.classList.add('zambak'); } topDecoration.appendChild(flower); bottomDecoration.appendChild(flower.cloneNode(true)); } const paragraph = document.createElement('p'); paragraph.innerHTML = scene.text; sceneEl.appendChild(topDecoration); sceneEl.appendChild(paragraph); sceneEl.appendChild(bottomDecoration); storyContainer.appendChild(sceneEl); }); }

    const options = { root: null, rootMargin: '0px', threshold: 0.6 };
    const observer = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { const activeScene = entry.target; const sceneIndex = parseInt(activeScene.getAttribute('data-scene-index')); document.querySelectorAll('.story-scene').forEach(el => el.classList.remove('is-active')); activeScene.classList.add('is-active'); resetAllStates(); storyData[sceneIndex].action(); } }); }, options);

    
    // ======================================= */
    // === OLAY DİNLEYİCİLERİ VE BAŞLATMA === */
    // ======================================= */
    
    // İmleç hareketini dinle
    document.addEventListener('mousemove', createCursorTrail);

    // Kaydırma olayını dinle (kuyruklu yıldız efekti için)
    let isScrolling;
    window.addEventListener('scroll', () => {
        isScrolling = true;
        // Kısa bir süre sonra kaydırma durumunu sıfırla
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => { isScrolling = false; }, 100);
    }, false);


    // Her şeyi başlat
    createTwinklingStars();
    populateStory();
    const scenes = document.querySelectorAll('.story-scene');
    scenes.forEach(scene => observer.observe(scene));
    createFinalQuote(); // Final yazısını en son ekle
});