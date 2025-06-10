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
    // === HİKAYE VERİSİ === */
    // ======================================= */
    
    const storyData = [
        // ... Sahneler 1-30 aynı ...
        { text: `Evrenin sonsuz karanlığında...`, action: () => {} },
        { text: `Güneş, var oluşundan beri...`, action: () => {} },
        { text: `Ay ve Güneş, ilk bakışta...`, action: () => {} },
        { text: `Uzaktan bakıldığında sadece bir yansıma...`, action: () => { moon.classList.add('wistful'); } },
        { text: `İlk zamanlarda bu bağlılığı fark etmemişlerdi...`, action: () => {} },
        { text: `Ancak bir şey değişmeye başladı...`, action: () => { moon.style.left = '78%'; moon.classList.add('wistful'); } },
        { text: `Güneş’in yakınında olmanın ne anlama geldiğini...`, action: () => { moon.style.left = '75%'; } },
        { text: `İşte bu düşünceler, onun kaderini değiştiren...`, action: () => { moon.style.left = '72%'; } },
        { text: `Güneş ise bu değişimi fark ettiğinde şaşırdı...`, action: () => { sun.classList.add('surprised'); moon.classList.remove('wistful'); } },
        { text: `Ay’ın enerjisi değişmişti...`, action: () => { moon.style.left = '68%'; } },
        { text: `Ve o an, anladı: Bu sadece bir ışık paylaşımı değil...`, action: () => { sun.classList.remove('surprised'); moon.style.left = '60%'; } },
        { text: `Yaklaşırken, yüzeyi yavaş yavaş kızardı...`, action: () => { moon.style.background = '#FFE4E1'; moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4'; moon.classList.add('happy'); } },
        { text: `Güneş, Ay’ın bu dönüşümünü gördüğünde...`, action: () => { sun.classList.add('surprised'); } },
        { text: `Ve şimdi, bu buluşma...`, action: () => { sun.classList.remove('surprised'); sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '45%'; moon.style.left = '55%'; } },
        { text: `"Sen gecemin en parlak ışığısın…"...`, action: () => { sun.classList.add('happy'); moon.classList.add('happy'); } },
        { text: `Güneş, güçlüydü, ihtişamlıydı...`, action: () => { sun.classList.add('surprised'); } },
        { text: `Ay ise onun bu haline hayranlıkla baktı...`, action: () => { moon.classList.add('happy'); sun.classList.remove('surprised'); sun.classList.add('happy'); moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)'; } },
        { text: `"Benim mükemmel olmam gerek,"...`, action: () => { sun.classList.add('happy'); moon.classList.add('happy');} },
        { text: `Güneş, Ay’a olan sevgisinin...`, action: () => { sun.style.left = '48%'; moon.style.left = '52%'; } },
        { text: `"Gözlerime bakamasan da şu an..."...`, action: () => {} },
        { text: `Güneş, içinde ışıkla dalgalanan duygularıyla...`, action: () => {} },
        { text: `Onlar birbirlerine ulaşamayan ama...`, action: () => { sun.style.left = '30%'; moon.style.left = '70%'; } },
        { text: `Ay anladı ki, Güneş’e ulaşmak...`, action: () => {} },
        { text: `Çünkü gerçek aşk, sadece dokunmaktan ibaret değildi...`, action: () => { sun.style.left = '40%'; moon.style.left = '60%'; } },
        { text: `Belki de aşk böyleydi…`, action: () => { sun.style.left = '45%'; moon.style.left = '55%'; } },
        { text: `Güneş bunu fark ettiğinde, içinde kıskanç bir alev...`, action: () => { sun.classList.add('angry'); sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)'; } },
        { text: `Ama tam bu düşüncelere kapıldığında...`, action: () => { sun.classList.remove('angry'); moon.classList.add('happy'); } },
        { text: `Bu kez Ay'ın içinde bir kıskançlık...`, action: () => { moon.classList.add('angry'); } },
        { text: `Güneş gülümseyerek ona sordu...`, action: () => { moon.classList.remove('angry'); sun.classList.add('happy'); } },

        // GÜNCELLEME: Sahne 31 (index 30) - Yakınlaşma
        {
            text: `Bir gün Ay, rüyasında Güneş’i gördü. İçinde bir oyunbazlık vardı ve şakasına onu tanımamazlıktan geldi. Güneş, Ay’ın ne yaptığını hemen anladı.`,
            action: () => {
                moon.classList.add('wistful');
                sun.classList.add('surprised');
                // Rüyadaki yüzleşme için yakınlaşırlar
                sun.style.left = '45%';
                moon.style.left = '55%';
            }
        },
        // GÜNCELLEME: Sahne 32 (index 31) - Dünya Araya Giriyor ve Ay Sönükleşiyor
        {
            text: `Sert bir şekilde ileri doğru atıldı, yakasına sıkıca yapıştı. Ama bu güç, Ay’ı incitmek için değil, onun kaçmasına izin vermemek içindi. Ay, bu sert dokunuşu hissettiğinde kalbi hızlandı.`,
            action: () => {
                sun.classList.add('angry');
                moon.classList.add('surprised');
                // Dünya araya girdiği için ayrılırlar
                sun.style.left = '25%';
                moon.style.left = '75%';
                // Dünya araya girer
                world.style.left = '50%';
                world.style.opacity = '1';
                // Ay'ın parlaması söner
                moon.style.boxShadow = '0 0 5px #444';
                moon.style.background = '#888';
            }
        },
        // ... Kalan sahneler ve animasyonları (33'ten sonrası) önceki gibi devam ediyor ...
        {
            text: `Ayın bir yüzü hep karanlık olur diğer yüzü ise güneşe bakar ve güneşin ışığı sayesinde gözükür. Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur.`,
            action: () => {
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Ay güneşin ışıltısını kaybettiğini, Güneş ayın yansımasının bulanıklaştığını düşünür. Güneş ışıltısını hiç kaybetmemiştir ama yansımasını göremediği için kaybettiğini düşünür. Ay ise Güneşin ondan ışığını esirgediğini düşünür.`,
            action: () => {
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Aslında problem ikisinin de dünyasıdır. Güneş, dünyasını etrafında döndürür. Ay ise dünyasının etrafında döner. Güneş, dünyasının hep aydınlık tarafını görmek ister. Ay ise dünyasının karanlıkta kalan yüzünü aydınlatmak ister. Bu yüzden ikisi de bazen ters düşer.`,
            action: () => {
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Güneş dünyasının karanlıkta bıraktığı kısmını ayın aydınlatmasından sakınır ama unuttuğu bir şey var o da Ayın ışığının kaynağı kendisi. Bu yüzden bazen ışığını kesebilir ve dünyanın karanlık yüzü derin bir geceye bürünür.`,
            action: () => {
                sun.style.boxShadow = '0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)';
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Ay ise o karanlıkta evrenin boşluğuna karışır. Işık kaynağını kaybedince adeta görünmez olur.`,
            action: () => {
                moon.style.boxShadow = '0 0 5px #444';
                moon.style.background = '#888';
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Ancak Ay, karanlıkta kaybolduğunu sansa da evrenin boşluğu aslında ona yeni bir ses kazandırır. Görünmez olduğunu düşündüğünde, içsel ışığını keşfetmeye başlar.`,
            action: () => {
                moon.style.boxShadow = '0 0 10px #add8e6, 0 0 20px #4682b4';
                moon.style.background = '#f0f8ff';
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Ay, Güneş’in ışığını yansıtmayı görev bilmişti hep, ama o an fark eder ki, kendi varlığı, ışık olmadan da anlamlıdır. Güneş’in gözleri ondan uzak olsa bile, Ay evrenin sonsuz boşluğunda yankılanan kendi ışığını bulur.`,
            action: () => {
                moon.classList.remove('sad');
                moon.classList.add('happy');
                moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff';
                sun.classList.add('sad');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Güneş ise, Ay’ı göremediği zaman gerçek parlaklığını sorgulamaya başlar. Hep dünyasını aydınlatmakla meşgulken, Ay’ın ona kattığı anlamı fark etmemiştir. Kendi ışığı güçlü olsa da, onun güzelliğini en iyi yansıtanın Ay olduğunu şimdi anlar.`,
            action: () => {
                sun.classList.remove('sad');
                sun.classList.add('wistful');
                moon.classList.add('happy');
                sun.style.left = '25%';
                moon.style.left = '75%';
                world.style.left = '50%';
                world.style.opacity = '1';
            }
        },
        {
            text: `Ve Ay’ın kaybolduğunu düşündüğü o an, Güneş onun aslında karanlığın içinde yeni bir şekil aldığını görmeye başlar.`,
            action: () => { sun.classList.add('surprised'); }
        },
        {
            text: `Sonra, evrenin döngüsü devam eder. Zaman geçtikçe, tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar.`,
            action: () => { world.style.left = '120%'; world.style.opacity = '0'; sun.classList.remove('surprised'); sun.classList.add('happy'); }
        },
        {
            text: `Ama bu sefer fark vardır; Ay artık sadece Güneş’in ışığını taşıyan bir varlık değil, kendi içsel ışığını da bilen bir yıldızdır. Güneş de artık sadece parlayan bir merkez değil, Ay’ın yansıması olmadan da var olan bir varlıktır.`,
            action: () => { sun.style.left = '35%'; moon.style.left = '65%'; moon.style.background = 'var(--moon-color)'; moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)'; }
        },
        {
            text: `Ve böylece, ikisi birbirlerine daha fazla kıymet verirler. Güneş, Ay’ı kaybetmekten korkmaz artık, çünkü onun karanlıkta da var olabildiğini bilir.`,
            action: () => { sun.classList.add('happy'); moon.classList.add('happy'); }
        },
        {
            text: `Ay ise, Güneş’e muhtaç gibi hissetmez, çünkü kendini keşfetmiştir. Ama yine de, her dönüşte birbirlerine kavuşmayı isterler çünkü ışık, ancak gölge ile anlam kazanır.`,
            action: () => {
                sun.classList.add('happy');
                moon.classList.add('happy');
                sun.style.left = '48%';
                sun.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
                moon.style.left = '52%';
                moon.style.transform = 'translate(-50%, -50%) rotate(10deg)';
                moon.style.zIndex = '3';
            }
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
        moon.style.zIndex = '2';
        world.style.left = '-100px';
        world.style.opacity = '0';
    }

    function populateStory() {
        const totalScenes = storyData.length;
        storyData.forEach((scene, index) => {
            const sceneEl = document.createElement('div');
            sceneEl.classList.add('story-scene');
            sceneEl.setAttribute('data-scene-index', index);
            
            const paragraph = document.createElement('p');
            paragraph.innerHTML = scene.text;
            sceneEl.appendChild(paragraph);

            const progressIndicator = document.createElement('div');
            progressIndicator.classList.add('scene-progress');
            progressIndicator.innerText = `${index + 1} / ${totalScenes}`;
            sceneEl.appendChild(progressIndicator);
            
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