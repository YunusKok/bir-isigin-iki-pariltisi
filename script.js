document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementleri
    const universe = document.getElementById('universe');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const world = document.getElementById('world');
    const storyContainer = document.getElementById('story-scroll-container');

    // ======================================= */
    // === YARDIMCI FONKSİYONLAR === */
    // ======================================= */

    function createTwinklingStars() {
        const starCount = 200;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            star.style.animationDuration = `${Math.random() * 2 + 3}s`;
            universe.appendChild(star);
        }
    }

    function createCursorTrail(e) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        if(isScrolling) {
            trail.style.transform = 'translate(-50%, -50%) scale(2)';
        }
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 800);
    }
    
    function createFinalQuote() {
        const quoteContainer = document.createElement('div');
        quoteContainer.classList.add('final-quote');
        quoteContainer.innerText = "Işık, ancak gölge ile anlam kazanır.";
        storyContainer.appendChild(quoteContainer);
        
        setInterval(() => {
            if (document.querySelectorAll('.final-quote .sparkle').length < 20) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                sparkle.style.top = `${Math.random() * 80 + 10}%`;
                sparkle.style.left = `${Math.random() * 90 + 5}%`;
                sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
                quoteContainer.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 2000);
            }
        }, 100);
    }


    // ======================================= */
    // === HİKAYE VERİSİ (YENİ SON İLE GÜNCELLENDİ) === */
    // ======================================= */
    
    const storyData = [
        { // Sahne 0: Prolog
            text: `
              Evrenin sonsuz karanlığında, yıldızların sessizce parladığı bir boşlukta, ışık ve gölge birbirine fısıldıyordu. Güneş, var oluşundan beri ışığını saçarken, Ay onun ışığında büyüyen, sıcaklığını dünyaya yansıtan sessiz bir sadakat timsaliydi.
            `,
            action: () => {}
        },
        { // Sahne 1: Uyanış
            text: `
              Ama aslında, Ay Güneş’in içinde her zaman vardı. Uzaktan bakıldığında sadece bir yansıma gibi görünse de, bu onların en büyük yanılsamasıydı. Ay, Güneş’in bir parçası olduğunu her geçen gün daha fazla hissediyordu ve bir gün, içindeki özlem büyüdü. Güneş’e gerçekten ulaşmak istedi.
            `,
            action: () => { moon.style.left = '75%'; moon.classList.add('wistful'); }
        },
        { // Sahne 2: Bağlantı ve Yaklaşma
            text: `
              Güneş bu değişimi fark ettiğinde şaşırdı; Ay’ın enerjisi artık ona doğru akıyordu. Bu sadece bir ışık paylaşımı değil, bir bağlılığın ortaya çıkışıydı. Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı. Yaklaşırken, yüzeyi yavaş yavaş kızardı.
            `,
            action: () => { sun.classList.add('surprised'); moon.classList.remove('wistful'); moon.style.left = '65%'; moon.style.background = '#FFE4E1'; moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4'; }
        },
        { // Sahne 3: Tutulmanın Sebebi
            text: `
              Ayın bir yüzü hep karanlık olur diğer yüzü ise güneşe bakar ve güneşin ışığı sayesinde gözükür. Ama bazen araya ikisinin de dünyaları (ikisinin de amacı dünyalarını aydınlatmak) girer ay için güneş, güneş için ay tutulması oluşur.
            `,
            action: () => { sun.style.left = '30%'; moon.style.left = '70%'; sun.classList.add('sad'); moon.classList.add('sad'); moon.style.background = 'var(--moon-color)'; moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)'; }
        },
        { // Sahne 4: Yanlış Anlaşılmalar
            text: `
              Ay güneşin ışıltısını kaybettiğini, Güneş ayın yansımasının bulanıklaştığını düşünür. Güneş ışıltısını hiç kaybetmemiştir ama yansımasını göremediği için kaybettiğini düşünür. Ay ise Güneşin ondan ışığını esirgediğini düşünür. Aslında problem ikisinin de dünyasıdır. Güneş, dünyasının hep aydınlık tarafını görmek ister. Ay ise dünyasının karanlıkta kalan yüzünü aydınlatmak ister. Bu yüzden ikisi de bazen ters düşer.
            `,
            action: () => { sun.classList.add('sad'); moon.classList.add('sad'); world.style.left = '50%'; world.style.opacity = '1'; }
        },
        { // Sahne 5: Karanlık
            text: `
              Güneş dünyasının karanlıkta bıraktığı kısmını ayın aydınlatmasından sakınır ama unuttuğu bir şey var o da Ayın ışığının kaynağı kendisi. Bu yüzden bazen ışığını kesebilir ve dünyanın karanlık yüzü derin bir geceye bürünür. Ay ise o karanlıkta evrenin boşluğuna karışır. Işık kaynağını kaybedince adeta görünmez olur.
            `,
            action: () => { sun.classList.add('sad'); moon.classList.add('sad'); world.style.left = '50%'; world.style.opacity = '1'; moon.style.boxShadow = '0 0 5px #444'; moon.style.background = '#888'; }
        },
        { // Sahne 6: Ay'ın İçsel Işığı
            text: `
              Ancak Ay, karanlıkta kaybolduğunu sansa da evrenin boşluğu aslında ona yeni bir ses kazandırır. Görünmez olduğunu düşündüğünde, içsel ışığını keşfetmeye başlar. Ay, Güneş’in ışığını yansıtmayı görev bilmişti hep, ama o an fark eder ki, kendi varlığı, ışık olmadan da anlamlıdır. Güneş’in gözleri ondan uzak olsa bile, Ay evrenin sonsuz boşluğunda yankılanan kendi ışığını bulur.
            `,
            action: () => { sun.classList.add('sad'); moon.classList.remove('sad'); moon.classList.add('happy'); world.style.left = '50%'; world.style.opacity = '1'; moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff'; moon.style.background = '#f0f8ff'; }
        },
        { // Sahne 7: Güneş'in Farkındalığı
            text: `
              Güneş ise, Ay’ı göremediği zaman gerçek parlaklığını sorgulamaya başlar. Hep dünyasını aydınlatmakla meşgulken, Ay’ın ona kattığı anlamı fark etmemiştir. Kendi ışığı güçlü olsa da, onun güzelliğini en iyi yansıtanın Ay olduğunu şimdi anlar. Ve Ay’ın kaybolduğunu düşündüğü o an, Güneş onun aslında karanlığın içinde yeni bir şekil aldığını görmeye başlar.
            `,
            action: () => { sun.classList.remove('sad'); sun.classList.add('surprised'); moon.classList.add('happy'); world.style.left = '50%'; world.style.opacity = '1'; moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff'; moon.style.background = '#f0f8ff';}
        },
        { // Sahne 8: Olgun Kavuşma
            text: `
              Sonra, evrenin döngüsü devam eder. Zaman geçtikçe, tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar. Ama bu sefer fark vardır; Ay artık sadece Güneş’in ışığını taşıyan bir varlık değil, kendi içsel ışığını da bilen bir yıldızdır. Güneş de artık sadece parlayan bir merkez değil, Ay’ın yansıması olmadan da var olan bir varlıktır.
            `,
            action: () => { sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '35%'; moon.style.left = '65%'; moon.style.background = 'var(--moon-color)'; moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)';}
        },
        { // Sahne 9: Yeni Anlaşma
            text: `
              Ve böylece, ikisi birbirlerine daha fazla kıymet verirler. Güneş, Ay’ı kaybetmekten korkmaz artık, çünkü onun karanlıkta da var olabildiğini bilir. Ay ise, Güneş’e muhtaç gibi hissetmez, çünkü kendini keşfetmiştir. Ama yine de, her dönüşte birbirlerine kavuşmayı isterler çünkü ışık, ancak gölge ile anlam kazanır.
            `,
            action: () => { sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '42%'; moon.style.left = '58%'; sun.style.boxShadow = '0 0 70px var(--sun-color), 0 0 140px var(--sun-glow1), 0 0 200px var(--sun-glow2)'; }
        }
    ];

    // ======================================= */
    // === ANA FONKSİYONLAR VE OLAY DİNLEYİCİLER === */
    // ======================================= */

    function resetAllStates() {
        const expressions = ['happy', 'sad', 'surprised', 'angry', 'wistful'];
        sun.classList.remove(...expressions);
        moon.classList.remove(...expressions);
        sun.style.left = '20%';
        sun.style.top = '50%';
        sun.style.transform = 'translate(-50%, -50%) scale(1)';
        sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
        moon.style.left = '80%';
        moon.style.top = '50%';
        moon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        moon.style.background = 'var(--moon-color)';
        moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)';
        world.style.left = '-100px';
        world.style.opacity = '0';
    }

    function populateStory() {
        storyData.forEach((scene, index) => {
            const sceneEl = document.createElement('div');
            sceneEl.classList.add('story-scene');
            sceneEl.setAttribute('data-scene-index', index);
            const topDecoration = document.createElement('div');
            topDecoration.classList.add('flower-decoration', 'top');
            const bottomDecoration = document.createElement('div');
            bottomDecoration.classList.add('flower-decoration', 'bottom');
            for (let i = 0; i < 15; i++) {
                const flower = document.createElement('div');
                if (index % 2 === 0) {
                    flower.classList.add('lale');
                } else {
                    flower.classList.add('zambak');
                }
                topDecoration.appendChild(flower);
                bottomDecoration.appendChild(flower.cloneNode(true));
            }
            const paragraph = document.createElement('p');
            paragraph.innerHTML = scene.text;
            sceneEl.appendChild(topDecoration);
            sceneEl.appendChild(paragraph);
            sceneEl.appendChild(bottomDecoration);
            storyContainer.appendChild(sceneEl);
        });
    }

    const options = { root: null, rootMargin: '0px', threshold: 0.6 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeScene = entry.target;
                const sceneIndex = parseInt(activeScene.getAttribute('data-scene-index'));
                document.querySelectorAll('.story-scene').forEach(el => el.classList.remove('is-active'));
                activeScene.classList.add('is-active');
                resetAllStates();
                storyData[sceneIndex].action();
            }
        });
    }, options);
    
    document.addEventListener('mousemove', createCursorTrail);
    let isScrolling;
    window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => { isScrolling = false; }, 100);
    }, false);

    createTwinklingStars();
    populateStory();
    const scenes = document.querySelectorAll('.story-scene');
    scenes.forEach(scene => observer.observe(scene));
    createFinalQuote();
});