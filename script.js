document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementleri
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const world = document.getElementById('world');
    const storyContainer = document.getElementById('story-scroll-container');

    // HİKAYENİN TAMAMI SAHNELERE BÖLÜNDÜ
    // Her bir "scene" (sahne), metni ve o metinle tetiklenecek "action" (eylem) fonksiyonunu içerir.
    const storyData = [
        { // Sahne 0: Başlangıç
            text: "Evrenin sonsuz karanlığında... Ay ve Güneş, ilk bakışta birbirinden uzak, ayrı varlıklardı. Biri geceyi süslerken, diğeri gündüzü aydınlatıyordu. ",
            action: () => {
                resetFaces();
                sun.style.left = '20%'; sun.style.top = '50%';
                moon.style.left = '80%'; moon.style.top = '50%';
                moon.classList.remove('moon-blushing');
            }
        },
        { // Sahne 1: Ay'ın Arzusu
            text: "Ancak bir şey değişmeye başladı: Ay artık sadece ışık taşıyan bir varlık olmaktan öteye geçmek istiyordu... Güneş’in yanına gitmek, ona gerçekten ulaşmak istiyordu. ",
            action: () => {
                resetFaces();
                moon.classList.add('wistful'); // Ay'ın yüzü arzulu/düşünceli olur
                moon.style.left = '75%';
            }
        },
        { // Sahne 2: Güneş'in Fark Edişi
            text: "Güneş ise bu değişimi fark ettiğinde şaşırdı. Ay her zaman dingin, uzak ve kendi halinde olmuştu. Ama şimdi, ışığında bir kırılma görüyordu. Ay’ın enerjisi ona doğru akıyordu... ",
            action: () => {
                resetFaces();
                sun.classList.add('surprised'); // Güneş şaşırır
                moon.classList.remove('wistful');
                moon.style.left = '70%';
            }
        },
        { // Sahne 3: Yaklaşma ve Dönüşüm
            text: "Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı. Yaklaşırken, yüzeyi yavaş yavaş kızardı. İlk defa, ışığın yalnızca bir parçası olmadığını, onun içinde yaşayan bir duyguya dönüştüğünü hissediyordu. ",
            action: () => {
                resetFaces();
                sun.classList.add('happy');
                moon.style.left = '60%';
                moon.style.background = '#FFE4E1';
                moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4';
            }
        },
        { // Sahne 4: Güneş'in Sakarlıkları ve Ay'ın Sevgisi
            text: "Ama Güneş, bazen kendisini bile şaşırtan küçük sakarlıklar yapıyordu. Ay ise onun bu haline hayranlıkla baktı ve fısıldadı: 'Biliyor musun, tam olarak böyle olduğun için seni seviyorum. Seni sadece ışığın için değil, içindeki heyecanlı çocukla seviyorum.' ",
            action: () => {
                resetFaces();
                sun.classList.add('surprised'); // Sakarlıktan şaşkın
                moon.classList.add('happy');    // Ay'ın sevecen gülümsemesi
                sun.style.left = '55%'; // Birbirlerine daha yakınlar
                moon.style.left = '45%';
                moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)'; // Ay sevecen bir şekilde eğilir
            }
        },
        { // Sahne 5: Kıskançlık
            text: "Güneş, gezegenlerin Ay’a baktığını gördü. İçinde kıskanç bir alev parladı. Ay, yalnızca Güneş’e ait değil miydi? Neden başkaları da onun yumuşak parlak gümüş rengini hayranlıkla izliyordu? ",
            action: () => {
                resetFaces();
                sun.classList.add('angry'); // Güneş sinirlenir
                moon.classList.add('surprised');
                sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px #FFD700';
            }
        },
        { // Sahne 6: Tutulma
            text: "Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur. Ay, Güneşin ondan ışığını esirgediğini düşünür. Aslında problem ikisinin de dünyasıdır. ",
            action: () => {
                resetFaces();
                sun.classList.add('sad');
                moon.classList.add('sad');
                sun.style.left = '20%';
                moon.style.left = '80%';
                world.style.left = '50%'; // Dünya araya girer
                world.style.opacity = '1';
                moon.style.boxShadow = '0 0 5px #444';
                moon.style.background = '#888';
                moon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
            }
        },
        { // Sahne 7: İçsel Işığın Keşfi
            text: "Ancak Ay, karanlıkta kaybolduğunu sansa da, içsel ışığını keşfetmeye başlar. Ay artık sadece Güneş’in ışığını taşıyan bir varlık değil, kendi içsel ışığını da bilen bir yıldızdır. ",
            action: () => {
                moon.classList.remove('sad');
                moon.classList.add('happy'); // Kendini bulmanın mutluluğu
                moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff';
                moon.style.background = '#f0f8ff';
            }
        },
        { // Sahne 8: Yeniden Kavuşma ve Sonuç
            text: "Tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar. Artık birbirlerine daha fazla kıymet verirler. Çünkü gerçek aşk, sadece dokunmaktan ibaret değildi; birlikte var olmak, birbirini tamamlamak ve hiçbir zaman kaybolmamak demekti. ",
            action: () => {
                resetFaces();
                sun.classList.add('happy');
                moon.classList.add('happy');
                world.style.left = '120%'; // Dünya sahneden çıkar
                world.style.opacity = '0';
                sun.style.left = '40%';
                moon.style.left = '60%';
                moon.style.background = '#E0E0E0';
                moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px var(--moon-glow)';
                moon.style.transform = 'translate(-50%, -50%) rotate(15deg)';
            }
        }
    ];

    // Hikaye metnini HTML'e dinamik olarak ekle
    function populateStory() {
        storyData.forEach((scene, index) => {
            const sceneEl = document.createElement('div');
            sceneEl.classList.add('story-scene');
            sceneEl.setAttribute('data-scene-index', index);
            
            const paragraph = document.createElement('p');
            paragraph.innerHTML = scene.text; // innerHTML kullanarak cite etiketlerini koruyoruz
            sceneEl.appendChild(paragraph);
            
            storyContainer.appendChild(sceneEl);
        });
    }

    function resetFaces() {
        const expressions = ['happy', 'sad', 'surprised', 'angry', 'wistful'];
        sun.classList.remove(...expressions);
        moon.classList.remove(...expressions);
        sun.style.boxShadow = `0 0 50px var(--sun-color), 0 0 100px var(--sun-glow1), 0 0 150px var(--sun-glow2)`;
        moon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    }

    // Intersection Observer Kurulumu
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // Sahnenin %60'ı görününce tetiklenir
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeScene = entry.target;
                const sceneIndex = parseInt(activeScene.getAttribute('data-scene-index'));
                
                // Diğer sahnelerden aktif sınıfını kaldır
                document.querySelectorAll('.story-scene').forEach(el => el.classList.remove('is-active'));
                // Mevcut sahneye aktif sınıfını ekle
                activeScene.classList.add('is-active');

                // İlgili animasyonu çalıştır
                storyData[sceneIndex].action();
            }
        });
    }, options);

    // Başlangıç
    populateStory();
    const scenes = document.querySelectorAll('.story-scene');
    scenes.forEach(scene => observer.observe(scene));
});