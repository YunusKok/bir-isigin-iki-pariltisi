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
    
    const storyData = [
    { // Sahne 0: Başlangıç
        text: `
          Evrenin sonsuz karanlığında, yıldızların sessizce parladığı bir boşlukta, ışık ve gölge birbirine fısıldıyordu.
          Güneş, var oluşundan beri ışığını saçıyor, gezegenleri ısıtıyor, yıldızlara bile ilham kaynağı oluyordu.
          Ama ışığını her gece taşıyan bir varlık vardı: Ay. O, Güneş’in ışığında büyüyen, onun sıcaklığını derin bir bağlılıkla dünyaya yansıtan sessiz bir sadakat timsaliydi.
          Ay ve Güneş, ilk bakışta birbirinden uzak, ayrı varlıklardı. Biri geceyi süslerken, diğeri gündüzü aydınlatıyordu.
        `,
        action: () => {}
    },
    { // Sahne 1: Ay'ın Özlemi
        text: `
          İlk zamanlarda bu bağlılığı fark etmemişlerdi. Ancak bir şey değişmeye başladı: Ay artık sadece ışık taşıyan bir varlık olmaktan öteye geçmek istiyordu.
          O hep oradaydı, ama bunun farkına varmak için zamanın akmasını beklemişti. Ve bir gün, içindeki özlem büyüdü.
          Güneş’in yakınında olmanın ne anlama geldiğini sorgulamaya başladı. O sadece bir yansıma mıydı, yoksa Güneş’in içinde kaybolmaya cesaret edebilir miydi?
          İşte bu düşünceler, onun kaderini değiştiren ilk kıvılcımı ateşledi. Ay, ışığını alıp sadece taşımak istemedi artık; Güneş’in yanına gitmek, ona gerçekten ulaşmak istiyordu.
        `,
        action: () => {
            moon.classList.add('wistful');
            moon.style.left = '75%';
        }
    },
    { // Sahne 2: Güneş'in Fark Edişi
        text: `
          Güneş ise bu değişimi fark ettiğinde şaşırdı.
          Ay her zaman dingin, uzak ve kendi halinde olmuştu. Ama şimdi, ışığında bir kırılma görüyordu.
          Ay’ın enerjisi değişmişti; ona doğru akıyordu, yaklaşmanın, sınırlarını aşmanın kıyısında duruyordu.
          Güneş bir an duraksadı, içindeki sıcaklığın Ay’a nasıl dokunduğunu hissetti. Ve o an, anladı: Bu sadece bir ışık paylaşımı değil, bir bağlılığın ortaya çıkışıydı.
        `,
        action: () => {
            sun.classList.add('surprised');
            moon.classList.remove('wistful');
            moon.style.left = '70%';
        }
    },
    { // Sahne 3: Yaklaşma ve Dönüşüm
        text: `
          Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı. Onun ışığı artık yalnızca geceleri değil, kalbinin en derin noktasında yankılanıyordu.
          Yaklaşırken, yüzeyi yavaş yavaş kızardı; Güneş’in etkileyiciliği karşısında kendisini durduramıyordu. İlk defa, ışığın yalnızca bir parçası olmadığını, onun içinde yaşayan bir duyguya dönüştüğünü hissediyordu.
          Güneş, Ay’ın bu dönüşümünü gördüğünde şaşkınlıkla ona baktı. Onun kendisini nasıl gördüğünü anladı: yalnızca bir ışık kaynağı değil, Ay’ın içinde saklı bir his, bir bağlılık… Kıskançlık, özlem ve tutku iç içe geçmişti.
        `,
        action: () => {
            sun.classList.add('happy');
            moon.style.left = '60%';
            moon.style.background = '#FFE4E1';
            moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4';
        }
    },
    { // Sahne 4: Güneş'in Sakarlıkları
        text: `
          Güneş, güçlüydü, ihtişamlıydı... Ama gün içinde, bazen kendisini bile şaşırtan küçük sakarlıklar yapıyordu. Sabah kahvesini döküyor, telefonu elinden kayıp düşüyordu.
          Ay ise onun bu haline hayranlıkla baktı ve fısıldadı: "Biliyor musun, tam olarak böyle olduğun için seni seviyorum. Küçük sakarlıkların… Kahveni döktüğünde tatlı telaşın... Bütün bunlar seni daha tatlı yapıyor."
          Güneş duraksadı. Hiç böyle düşünmemişti. Ay ona farklı bir bakış açısı sunuyordu. "Benim mükemmel olmam gerek," diye mırıldandı. Ama Ay başını salladı. "Hayır, sen zaten en mükemmel halinlesin. Çünkü seni sadece ışığın için değil, içindeki heyecanlı çocukla seviyorum."
        `,
        action: () => {
            sun.classList.add('surprised');
            moon.classList.add('happy');
            sun.style.left = '45%';
            moon.style.left = '55%';
            moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)';
        }
    },
    { // Sahne 5: Güneş'in Kıskançlığı
        text: `
          Güneş, tüm gezegenleri ışığıyla beslerken, Ay’ın onun için farklı olduğunu fark etti. Etrafında dev gezegenler vardı ama hiçbiri Ay gibi değildi. Hiçbiri onun ışığını böylesine saf bir şekilde taşımıyordu.
          Güneş bunu fark ettiğinde, içinde kıskanç bir alev parladı. Gezegenlerin gökyüzünde Ay’a baktığını gördü. Ay, yalnızca Güneş’e ait değil miydi?
          Ama tam bu düşüncelere kapıldığında, Ay ona nazikçe parladı, sanki fısıldıyordu: “Ben senin ışığından doğdum, senin parçanım. Başkaları bana baksa da, yalnızca seninle var olabilirim.”
        `,
        action: () => {
            sun.classList.add('angry');
            moon.classList.add('surprised');
            sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)';
        }
    },
    { // Sahne 6: Ay'ın Kıskançlığı
        text: `
          Bu kez Ay'ın içinde bir kıskançlık büyümeye başladı. Güneş’in cömertçe ışığını diğer gezegenlere sunduğunu fark etti. O yalnızca Ay’a ait değil miydi?
          Güneş, Ay’ın içindeki huzursuzluğu ilk kez fark ettiğinde şaşkına döndü. Ay, kıskanç mıydı?
          Gülümseyerek ona sordu: “Sen neden böyle hissediyorsun? Hep benim ışığımda parladın, hep benim parçamdın. Işık saçmam, seni özel yapmaktan çıkarır mı?”
          Belki de kıskançlık, yalnızca sahiplenmek değil, derin bir bağın tezahürüydü.
        `,
        action: () => {
            moon.classList.add('angry');
            sun.classList.add('happy');
        }
    },
    { // Sahne 7: Rüyadaki Yüzleşme
        text: `
          Bir gün Ay, rüyasında Güneş'i gördü ve şakasına onu tanımamazlıktan geldi. Güneş, Ay’ın ne yaptığını hemen anladı. İçinde bir anda yoğun bir kıvılcım yandı.
          Sert bir şekilde ileri doğru atıldı, yakasına sıkıca yapıştı. Ama bu güç, Ay’ı incitmek için değil, onun kaçmasına izin vermemek içindi.
          Ay, bu sert dokunuşu hissettiğinde kalbi hızlandı. Ama acı yoktu, sadece heyecan vardı. Güneş’in sertliği, aynı zamanda içinde narin bir sıcaklık taşıyordu.
        `,
        action: () => {
            sun.classList.add('angry');
            moon.classList.add('surprised');
            sun.style.left = '48%';
            moon.style.left = '52%';
            sun.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    },
    { // Sahne 8: Dünyaların Araya Girişi
        text: `
          Ayın bir yüzü hep karanlık olur diğer yüzü ise güneşe bakar ve güneşin ışığı sayesinde gözükür. Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur.
          Ay, Güneşin ondan ışığını esirgediğini düşünür. Aslında problem ikisinin de dünyasıdır. Güneş, dünyasını etrafında döndürür. Ay ise dünyasının etrafında döner. Güneş, dünyasının hep aydınlık tarafını görmek ister. Ay ise dünyasının karanlıkta kalan yüzünü aydınlatmak ister.
        `,
        action: () => {
            sun.classList.add('sad');
            moon.classList.add('sad');
            sun.style.left = '20%';
            moon.style.left = '80%';
            world.style.left = '50%';
            world.style.opacity = '1';
        }
    },
    { // Sahne 9: Tutulma ve Karanlık
        text: `
          Güneş ışıltısını hiç kaybetmemiştir ama yansımasını göremediği için kaybettiğini düşünür. Bu yüzden bazen ışığını kesebilir ve dünyanın karanlık yüzü derin bir geceye bürünür. Ay ise o karanlıkta evrenin boşluğuna karışır. Işık kaynağını kaybedince adeta görünmez olur.
        `,
        action: () => {
            sun.classList.add('sad');
            moon.classList.add('sad');
            sun.style.left = '20%';
            moon.style.left = '80%';
            world.style.left = '50%';
            world.style.opacity = '1';
            moon.style.boxShadow = '0 0 5px #444';
            moon.style.background = '#888';
        }
    },
    { // Sahne 10: İçsel Işığın Keşfi
        text: `
          Ancak Ay, karanlıkta kaybolduğunu sansa da evrenin boşluğu aslında ona yeni bir ses kazandırır. Görünmez olduğunu düşündüğünde, içsel ışığını keşfetmeye başlar. Ay, Güneş’in ışığını yansıtmayı görev bilmişti hep, ama o an fark eder ki, kendi varlığı, ışık olmadan da anlamlıdır. Güneş ise, Ay’ı göremediği zaman gerçek parlaklığını sorgulamaya başlar. Kendi ışığı güçlü olsa da, onun güzelliğini en iyi yansıtanın Ay olduğunu şimdi anlar.
        `,
        action: () => {
            sun.classList.add('sad');
            moon.classList.remove('sad');
            moon.classList.add('happy');
            world.style.left = '50%';
            world.style.opacity = '1';
            moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff';
            moon.style.background = '#f0f8ff';
        }
    },
    { // Sahne 11: Yeniden Kavuşma
        text: `
          Sonra, evrenin döngüsü devam eder. Tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar. Ama bu sefer bir fark vardır; Ay artık sadece Güneş’in ışığını taşıyan bir varlık değil, kendi içsel ışığını da bilen bir yıldızdır. Güneş de artık sadece parlayan bir merkez değil, Ay’ın yansıması olmadan da var olan bir varlıktır. Ve böylece, ikisi birbirlerine daha fazla kıymet verirler.
        `,
        action: () => {
            sun.classList.add('happy');
            moon.classList.add('happy');
            sun.style.left = '35%';
            moon.style.left = '65%';
        }
    },
    { // Sahne 12: Son Sözler
        text: `
          "Sen gecemin en parlak ışığısın… Ben Güneş olmayı senin yanında öğrendim. Çünkü seninle her kaybolan parçamı buldum."
          "Gözlerime bakamasan da şu an, bildiğim bir şey var: Sen benim içimde, en derin yerde yaşayan en güzel 'iyi ki'msin. Ve ben, bu uzaklığa rağmen her geçen gün sana daha da yaklaşıyorum."
          "Seni çok seviyorum. Hem çocuk halimle, hem sakar halimle, hem de seni her kelimemde taşıyan bu deli kalbimle. Benim Ay’ım, benim sessizliğim, benim sonsuzluğum…"
        `,
        action: () => {
            sun.classList.add('happy');
            moon.classList.add('happy');
            sun.style.left = '45%';
            moon.style.left = '55%';
            moon.style.transform = 'translate(-50%, -50%) rotate(15deg)';
        }
    }
];

    function resetAllStates() {const expressions = ['happy', 'sad', 'surprised', 'angry', 'wistful']; sun.classList.remove(...expressions); moon.classList.remove(...expressions); sun.style.left = '20%'; sun.style.top = '50%'; sun.style.transform = 'translate(-50%, -50%) scale(1)'; sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`; moon.style.left = '80%'; moon.style.top = '50%'; moon.style.transform = 'translate(-50%, -50%) rotate(0deg)'; moon.style.background = 'var(--moon-color)'; moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)'; world.style.left = '-100px'; world.style.opacity = '0'; }

    function populateStory() {storyData.forEach((scene, index) => { const sceneEl = document.createElement('div'); sceneEl.classList.add('story-scene'); sceneEl.setAttribute('data-scene-index', index); const topDecoration = document.createElement('div'); topDecoration.classList.add('flower-decoration', 'top'); const bottomDecoration = document.createElement('div'); bottomDecoration.classList.add('flower-decoration', 'bottom'); for (let i = 0; i < 15; i++) { const flower = document.createElement('div'); if (index % 2 === 0) { flower.classList.add('lale'); } else { flower.classList.add('zambak'); } topDecoration.appendChild(flower); bottomDecoration.appendChild(flower.cloneNode(true)); } const paragraph = document.createElement('p'); paragraph.innerHTML = scene.text; sceneEl.appendChild(topDecoration); sceneEl.appendChild(paragraph); sceneEl.appendChild(bottomDecoration); storyContainer.appendChild(sceneEl); }); }

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