document.addEventListener('DOMContentLoaded', () => {
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const world = document.getElementById('world');
    const storyText = document.getElementById('story-text');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    // Hikayeyi ve ilgili animasyon fonksiyonlarını bir dizi içinde saklıyoruz.
    // Her bir "scene" (sahne), metni ve o metinle tetiklenecek "action" (eylem) fonksiyonunu içerir.
    const story = [
        {
            text: "Evrenin sonsuz karanlığında, yıldızların sessizce parladığı bir boşlukta, ışık ve gölge birbirine fısıldıyordu. Ay ve Güneş, ilk bakışta birbirinden uzak, ayrı varlıklardı.",
            action: () => {
                sun.style.left = '20%';
                moon.style.left = '80%';
                moon.classList.remove('moon-blushing');
            }
        },
        {
            text: "Güneş ise bu değişimi fark ettiğinde şaşırdı. Ay her zaman dingin, uzak ve kendi halinde olmuştu. Ama şimdi, ışığında bir kırılma görüyordu. Ay’ın enerjisi değişmişti; ona doğru akıyordu...",
            action: () => {
                moon.classList.add('moon-flickering'); // Ay'ın ışığında kırılma efekti
                moon.style.left = '75%'; // Ay biraz yaklaşır
            }
        },
        {
            text: "Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı. Yaklaşırken, yüzeyi yavaş yavaş kızardı; Güneş’in etkileyiciliği karşısında kendisini durduramıyordu.",
            action: () => {
                moon.classList.remove('moon-flickering');
                moon.classList.add('moon-blushing'); // Ay'ın yüzeyi kızarır
                moon.style.left = '60%'; // Ay daha da yaklaşır
            }
        },
        {
            text: "Güneş, güçlüydü, ihtişamlıydı... Ama gün içinde, bazen kendisini bile şaşırtan küçük sakarlıklar yapıyordu. Sinirlenip kendi sıcaklığını daha da arttırıyordu.",
            action: () => {
                sun.classList.add('sun-pulsing'); // Güneş'in sıcaklığı artar gibi titreşir
            }
        },
        {
            text: "Ay ise onun bu haline hayranlıkla baktı ve fısıldadı: 'Biliyor musun, tam olarak böyle olduğun için seni seviyorum. Küçük sakarlıkların seni daha tatlı yapıyor.'",
            action: () => {
                sun.classList.remove('sun-pulsing'); // Güneş sakinleşir
            }
        },
        {
            text: "Güneş bunu fark ettiğinde, içinde kıskanç bir alev parladı. Gezegenlerin gökyüzünde Ay’a baktığını gördü. Ay, yalnızca Güneş’e ait değil miydi?",
            action: () => {
                sun.classList.add('sun-jealous-flash'); // Güneş kıskançlıktan parlar
                moon.style.left = '65%'; // Ay biraz uzaklaşır gibi olur
            }
        },
        {
            text: "Ay, rüyasında Güneş'in karşısındaydı. Güneş sert bir şekilde ileri doğru atıldı, yakasına sıkıca yapıştı. Bu güç, Ay’ı incitmek için değil, onun kaçmasına izin vermemek içindi.",
            action: () => {
                sun.classList.remove('sun-jealous-flash');
                sun.style.left = '45%'; // Güneş aniden yaklaşır
                moon.style.left = '55%'; // Ay ve Güneş çok yakınlaşır
            }
        },
        {
            text: "Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur. Güneş ışıltısını hiç kaybetmemiştir ama yansımasını göremediği için kaybettiğini düşünür.",
            action: () => {
                // Dünya araya girer (tutulma)
                sun.style.left = '20%';
                moon.style.left = '80%';
                world.style.left = '65%';
                world.style.opacity = '1';
                moon.style.boxShadow = '0 0 5px #444'; // Ay'ın ışığı söner
                moon.style.background = '#888';
            }
        },
        {
            text: "Ancak Ay, karanlıkta kaybolduğunu sansa da... kendi içsel ışığını keşfetmeye başlar. Güneş’in gözleri ondan uzak olsa bile, Ay evrenin sonsuz boşluğunda yankılanan kendi ışığını bulur.",
            action: () => {
                 // Ay kendi ışığını bulur
                moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4'; // Mavimsi, içsel bir ışık
                moon.style.background = '#f0f8ff';
            }
        },
        {
            text: "Sonra, evrenin döngüsü devam eder. Tutulma sona erer ve Ay tekrar Güneş’in ışığını kucaklar. Artık birbirlerine daha fazla kıymet verirler.",
            action: () => {
                // Her şey normale döner ama bağları daha güçlüdür
                world.style.left = '120%'; // Dünya sahneden çıkar
                world.style.opacity = '0';
                sun.style.left = '25%';
                moon.style.left = '75%';
                moon.classList.remove('moon-blushing');
                moon.style.background = '#E0E0E0'; // Normal rengine döner
                moon.style.boxShadow = '0 0 15px #FFFFFF, 0 0 30px #B0C4DE, 0 0 40px #add8e6'; // Hem Güneş'ten hem de kendinden bir parıltı
            }
        },
         {
            text: "Çünkü gerçek aşk, sadece dokunmaktan ibaret değildi; birlikte var olmak, birbirini tamamlamak ve hiçbir zaman kaybolmamak demekti. Işıkları hep iç içeydi.",
            action: () => {
                // Son sahne, birbirlerine yakın ve uyum içinde
                sun.style.left = '40%';
                moon.style.left = '60%';
            }
        }
    ];

    let currentSceneIndex = 0;

    function resetStates() {
        // Her sahne değişiminden önce animasyon sınıflarını temizle
        sun.className = '';
        moon.className = '';
    }

    function updateScene() {
        resetStates();

        const scene = story[currentSceneIndex];
        storyText.style.opacity = '0'; // Metni yumuşak geçiş için gizle

        setTimeout(() => {
            storyText.innerHTML = scene.text;
            scene.action();
            storyText.style.opacity = '1'; // Metni göster
        }, 500); // 0.5 saniye sonra metni ve animasyonu başlat

        // Butonların durumunu güncelle
        prevBtn.disabled = currentSceneIndex === 0;
        nextBtn.disabled = currentSceneIndex === story.length - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentSceneIndex < story.length - 1) {
            currentSceneIndex++;
            updateScene();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSceneIndex > 0) {
            currentSceneIndex--;
            updateScene();
        }
    });

    // Sayfa yüklendiğinde ilk sahneyi göster
    updateScene();
});