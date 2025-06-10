document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementleri
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const world = document.getElementById('world');
    const storyContainer = document.getElementById('story-scroll-container');

    // HİKAYENİN TAMAMI SAHNELERE BÖLÜNDÜ
    const storyData = [
        { // Sahne 0: Başlangıç
            text: "Evrenin sonsuz karanlığında, Ay ve Güneş, ilk bakışta birbirinden uzak, ayrı varlıklardı. Biri geceyi süslerken, diğeri gündüzü aydınlatıyordu. Aslında, evrenin en derin sırlarından biri onların ilişkisine gizlenmişti: Ay, Güneş’in içinde her zaman vardı.",
            action: () => {} // Reset fonksiyonu varsayılan durumu zaten ayarlıyor.
        },
        { // Sahne 1: Ay'ın Özlemi
            text: "Ancak bir şey değişmeye başladı: Ay artık sadece ışık taşıyan bir varlık olmaktan öteye geçmek istiyordu. İçindeki özlem büyüdü. O sadece bir yansıma mıydı, yoksa Güneş’in içinde kaybolmaya cesaret edebilir miydi? Güneş’in yanına gitmek, ona gerçekten ulaşmak istiyordu.",
            action: () => {
                moon.classList.add('wistful');
                moon.style.left = '75%';
            }
        },
        { // Sahne 2: Güneş'in Fark Edişi
            text: "Güneş ise bu değişimi fark ettiğinde şaşırdı. Ay her zaman dingin, uzak ve kendi halinde olmuştu. Ama şimdi, ışığında bir kırılma görüyordu. Ay’ın enerjisi değişmişti; ona doğru akıyordu.",
            action: () => {
                sun.classList.add('surprised');
                moon.classList.remove('wistful');
                moon.style.left = '70%';
            }
        },
        { // Sahne 3: Yaklaşma ve Dönüşüm
            text: "Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı. Yaklaşırken, yüzeyi yavaş yavaş kızardı. Güneş, Ay’ın bu dönüşümünü gördüğünde şaşkınlıkla ona baktı... Kıskançlık, özlem ve tutku iç içe geçmişti.",
            action: () => {
                sun.classList.add('happy');
                moon.style.left = '60%';
                moon.style.background = '#FFE4E1';
                moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4';
            }
        },
        { // Sahne 4: Güneş'in Sakarlıkları
            text: "Güneş, güçlüydü, ihtişamlıydı ama bazen kendisini bile şaşırtan küçük sakarlıklar yapıyordu. Ay ise onun bu haline hayranlıkla baktı ve fısıldadı: 'Biliyor musun, tam olarak böyle olduğun için seni seviyorum... Bütün bunlar seni daha tatlı yapıyor.'",
            action: () => {
                sun.classList.add('surprised');
                moon.classList.add('happy');
                sun.style.left = '45%';
                moon.style.left = '55%';
                moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)';
            }
        },
        { // Sahne 5: Güneş'in Kıskançlığı
            text: "Güneş, gezegenlerin gökyüzünde Ay’a baktığını gördü. İçinde kıskanç bir alev parladı. Ay, yalnızca Güneş’e ait değil miydi? Ama tam bu düşüncelere kapıldığında, Ay ona nazikçe parladı: 'Ben senin ışığından doğdum, senin parçanım.'",
            action: () => {
                sun.classList.add('angry');
                moon.classList.add('surprised');
                sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)';
            }
        },
        { // Sahne 6: Ay'ın Kıskançlığı
            text: "Bu kez Ay'ın içinde bir kıskançlık büyümeye başladı. Güneş’in cömertçe ışığını diğer gezegenlere sunduğunu fark etti. Güneş gülümsedi: 'Işık saçmam, seni özel yapmaktan çıkarır mı?' Işıkları paylaşsalar da, Ay ile Güneş’in bağı, evrendeki hiçbir başka gök cismiyle kıyaslanamazdı.",
            action: () => {
                moon.classList.add('angry');
                sun.classList.add('happy');
            }
        },
        { // Sahne 7: Rüyadaki Yüzleşme
            text: "Bir gün Ay, rüyasında Güneş'i gördü ve şakasına onu tanımamazlıktan geldi. Güneş, Ay’ın ne yaptığını hemen anladı. Sert bir şekilde ileri doğru atıldı, yakasına sıkıca yapıştı; bu güç, Ay’ı incitmek için değil, onun kaçmasına izin vermemek içindi.",
            action: () => {
                sun.classList.add('angry');
                moon.classList.add('surprised');
                sun.style.left = '48%';
                moon.style.left = '52%';
                sun.style.transform = 'translate(-50%, -50%) scale(1.1)';
            }
        },
        { // Sahne 8: Dünyaların Araya Girişi
            text: "Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur. Ay, Güneşin ondan ışığını esirgediğini düşünür. Aslında problem ikisinin de dünyasıdır. Güneş, dünyasını etrafında döndürür. Ay ise dünyasının etrafında döner.",
            action: () => {
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '20%';
                moon.style.left = '80%';
                world.style.left = '50%'; // Dünya araya girer
                world.style.opacity = '1';
            }
        },
        { // Sahne 9: Tutulma ve Karanlık
            text: "Güneş, Ay'ı göremediği için ışıltısını kaybettiğini düşünür. Işık kaynağını kaybedince Ay adeta görünmez olur. Ancak Ay, karanlıkta kaybolduğunu sansa da evrenin boşluğu aslında ona yeni bir ses kazandırır.",
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
            text: "Görünmez olduğunu düşündüğünde, içsel ışığını keşfetmeye başlar. Ay, Güneş’in ışığını yansıtmayı görev bilmişti hep, ama o an fark eder ki, kendi varlığı, ışık olmadan da anlamlıdır. Ay artık sadece Güneş’in ışığını taşıyan bir varlık değil, kendi içsel ışığını da bilen bir yıldızdır.",
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
            text: "Sonra, evrenin döngüsü devam eder. Tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar. Güneş de artık sadece parlayan bir merkez değil, Ay’ın yansıması olmadan da var olan bir varlıktır. Ve böylece, ikisi birbirlerine daha fazla kıymet verirler.",
            action: () => {
                sun.classList.add('happy');
                moon.classList.add('happy');
                sun.style.left = '35%';
                moon.style.left = '65%';
            }
        },
        { // Sahne 12: Son Sözler
            text: '"Gözlerime bakamasan da şu an, bildiğim bir şey var: Sen benim içimde, en derin yerde yaşayan en güzel \'iyi ki\'msin." "Seni çok seviyorum. Hem çocuk halimle, hem sakar halimle, hem de seni her kelimemde taşıyan bu deli kalbimle. Benim Ay’ım, benim sessizliğim, benim sonsuzluğum…"',
            action: () => {
                sun.classList.add('happy');
                moon.classList.add('happy');
                sun.style.left = '45%';
                moon.style.left = '55%';
                moon.style.transform = 'translate(-50%, -50%) rotate(15deg)';
            }
        }
    ];

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

        // 15 adet çiçek elementi oluşturup üst ve alt süsleme alanlarına ekleyelim
        for (let i = 0; i < 15; i++) {
            const flower = document.createElement('div');
            // Sahne indeksine göre lale veya zambak sınıfı ekle
            if (index % 2 === 0) {
                flower.classList.add('lale');
            } else {
                flower.classList.add('zambak');
            }
            topDecoration.appendChild(flower);
            // Her çiçeği klonlayarak alt süslemeye de ekleyelim ki bağımsız olsunlar
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
    populateStory();
    const scenes = document.querySelectorAll('.story-scene');
    scenes.forEach(scene => observer.observe(scene));
});