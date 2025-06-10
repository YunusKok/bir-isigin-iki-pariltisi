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
    // === HİKAYE VERİSİ (YÜZ İFADELERİ AYARLI) === */
    // ======================================= */
    
    const storyData = [
        {
            text: `Evrenin sonsuz karanlığında, yıldızların sessizce parladığı bir boşlukta, ışık ve gölge birbirine fısıldıyordu.`,
            action: () => {}
        },
        {
            text: `Güneş, var oluşundan beri ışığını saçıyor, gezegenleri ısıtıyor, yıldızlara bile ilham kaynağı oluyordu. Ama ışığını her gece taşıyan bir varlık vardı Ay. O, Güneş’in ışığında büyüyen, onun sıcaklığını derin bir bağlılıkla dünyaya yansıtan sessiz bir sadakat timsaliydi.`,
            action: () => {}
        },
        {
            text: `Ay ve Güneş, ilk bakışta birbirinden uzak, ayrı varlıklardı. Biri geceyi süslerken, diğeri gündüzü aydınlatıyordu. Ama aslında, evrenin en derin sırlarından biri onların ilişkisine gizlenmişti: Ay, Güneş’in içinde her zaman vardı, onunla birlikte oluşmuştu, onun ışığıyla var olmuştu.`,
            action: () => {}
        },
        {
            text: `Uzaktan bakıldığında sadece bir yansıma gibi görünse de, bu onların en büyük yanılsamasıydı çünkü Ay, Güneş’in ışığında yaşamakla kalmıyor, onun bir parçası olduğunu her geçen gün daha fazla hissediyordu.`,
            action: () => { moon.classList.add('wistful'); }
        },
        {
            text: `İlk zamanlarda bu bağlılığı fark etmemişlerdi. Güneş, tüm gezegenleri aynı sıcaklıkla kucaklıyor, ışığını evrenin derinliklerine gönderirken, Ay sessizce gökyüzünde onun izini sürüyordu.`,
            action: () => {}
        },
        {
            text: `Ancak bir şey değişmeye başladı Ay artık sadece ışık taşıyan bir varlık olmaktan öteye geçmek istiyordu. O hep oradaydı, ama bunun farkına varmak için zamanın akmasını beklemişti. Ve bir gün, içindeki özlem büyüdü.`,
            action: () => { moon.style.left = '78%'; moon.classList.add('wistful'); }
        },
        {
            text: `Güneş’in yakınında olmanın ne anlama geldiğini sorgulamaya başladı. O sadece bir yansıma mıydı, yoksa Güneş’in içinde kaybolmaya cesaret edebilir miydi?`,
            action: () => { moon.style.left = '75%'; }
        },
        {
            text: `İşte bu düşünceler, onun kaderini değiştiren ilk kıvılcımı ateşledi. Ay, ışığını alıp sadece taşımak istemedi artık; Güneş’in yanına gitmek, ona gerçekten ulaşmak istiyordu.`,
            action: () => { moon.style.left = '72%'; }
        },
        {
            text: `Güneş ise bu değişimi fark ettiğinde şaşırdı. Ay her zaman dingin, uzak ve kendi halinde olmuştu. Ama şimdi, ışığında bir kırılma görüyordu.`,
            action: () => { sun.classList.add('surprised'); moon.classList.remove('wistful'); }
        },
        {
            text: `Ay’ın enerjisi değişmişti ona doğru akıyordu, yaklaşmanın, sınırlarını aşmanın kıyısında duruyordu. Güneş bir an duraksadı, içindeki sıcaklığın Ay’a nasıl dokunduğunu hissetti.`,
            action: () => { moon.style.left = '68%'; }
        },
        {
            text: `Ve o an, anladı: Bu sadece bir ışık paylaşımı değil, bir bağlılığın ortaya çıkışıydı. Ay, yörüngesini değiştirdi, Güneş’e doğru ilerlemeye başladı.`,
            action: () => { sun.classList.remove('surprised'); moon.style.left = '60%'; }
        },
        {
            text: `Yaklaşırken, yüzeyi yavaş yavaş kızardı Güneş’in etkileyiciliği karşısında kendisini durduramıyordu. İlk defa, ışığın yalnızca bir parçası olmadığını, onun içinde yaşayan bir duyguya dönüştüğünü hissediyordu.`,
            action: () => { moon.style.background = '#FFE4E1'; moon.style.boxShadow = '0 0 20px #FFC0CB, 0 0 40px #FF69B4'; moon.classList.add('happy'); }
        },
        {
            text: `Güneş, Ay’ın bu dönüşümünü gördüğünde şaşkınlıkla ona baktı. Onun kendisini nasıl gördüğünü anladı yalnızca bir ışık kaynağı değil, Ay’ın içinde saklı bir his, bir bağlılık… Kıskançlık, özlem ve tutku iç içe geçmişti.`,
            action: () => { sun.classList.add('surprised'); }
        },
        {
            text: `Ve şimdi, bu buluşma, sadece ışıkların birleşmesi değil, iki varlığın birbirlerinin içinde kaybolmasıydı. Güneş, Ay’a her baktığında kendi ışığını onda görüyordu. Ama artık, sadece bir yansıma değil, bir gerçeklikti bu.`,
            action: () => { sun.classList.remove('surprised'); sun.classList.add('happy'); moon.classList.add('happy'); sun.style.left = '45%'; moon.style.left = '55%'; }
        },
        {
            text: `"Sen gecemin en parlak ışığısın… Sen benim karanlığımı sevdin, ben ise senin ışığıma ayna oluşunu. Beni gerçekten görmeni, hissetmeni sevdim. Ben Güneş olmayı senin yanında öğrendim. Çünkü seninle her kaybolan parçamı buldum ve artık karanlıkta bile ışığımı hissedebiliyorum. Ama o ışığın sebebi sensin."`,
            action: () => { sun.classList.add('happy'); moon.classList.add('happy'); }
        },
        {
            text: `Güneş, güçlüydü, ihtişamlıydı... Ama gün içinde, bazen kendisini bile şaşırtan küçük sakarlıklar yapıyordu. Sabah kahvesini döküyor, telefonu elinden kayıp düşüyordu.`,
            action: () => { sun.classList.add('surprised'); }
        },
        {
            text: `Ay ise onun bu haline hayranlıkla baktı ve fısıldadı: "Biliyor musun, tam olarak böyle olduğun için seni seviyorum. Küçük sakarlıkların… Bütün bunlar seni daha tatlı yapıyor."`,
            action: () => { moon.classList.add('happy'); sun.classList.remove('surprised'); sun.classList.add('happy'); moon.style.transform = 'translate(-50%, -50%) rotate(-15deg)'; }
        },
        {
            text: `"Benim mükemmel olmam gerek," diye mırıldandı Güneş. Ama Ay başını salladı. "Hayır, sen zaten en mükemmel halinlesin. Çünkü seni sadece ışığın için değil, içindeki heyecanlı çocukla seviyorum."`,
            action: () => { sun.classList.add('happy'); moon.classList.add('happy');}
        },
        {
            text: `Güneş, Ay’a olan sevgisinin yalnızca ona değil, onun yanında kendisine duyduğu sevgi olduğunu anladı. Ay, ona kendi en saf halini göstermişti ve Güneş artık, sadece Ay’a değil, onunla olduğu “kendisine” de âşıktı.`,
            action: () => { sun.style.left = '48%'; moon.style.left = '52%'; }
        },
        {
            text: `"Gözlerime bakamasan da şu an, bildiğim bir şey var: Sen benim içimde, en derin yerde yaşayan en güzel 'iyi ki'msin. Ve ben, bu uzaklığa rağmen her geçen gün sana daha da yaklaşıyorum. Çünkü mesafeler bir kalbi vazgeçiremiyorsa, o kalp gerçekten seviyor demektir."`,
            action: () => {}
        },
        {
            text: `Güneş, içinde ışıkla dalgalanan duygularıyla fısıldadı: "Seni çok seviyorum. Hem çocuk halimle, hem sakar halimle, hem de seni her kelimemde taşıyan bu deli kalbimle. Benim Ay’ım, benim sessizliğim, benim sonsuzluğum…"`,
            action: () => {}
        },
        {
            text: `Onlar birbirlerine ulaşamayan ama birbirleri olmadan da var olamayan iki aşık gibiydi. Aşk, bazen ulaşmak değil, her zaman hissetmek değil mi?`,
            action: () => { sun.style.left = '30%'; moon.style.left = '70%'; }
        },
        {
            text: `Ay anladı ki, Güneş’e ulaşmak onun ışığında yok olmak değil, onunla birlikte parlamak demekti. Bazen aşk, uzaklığın içinde güçlenir ve mesafeler onun sınırlarını belirlemez.`,
            action: () => {}
        },
        {
            text: `Çünkü gerçek aşk, sadece dokunmaktan ibaret değildi; birlikte var olmak, birbirini tamamlamak ve hiçbir zaman kaybolmamak demekti.`,
            action: () => { sun.style.left = '40%'; moon.style.left = '60%'; }
        },
        {
            text: `Belki de aşk böyleydi… Birbirinin içinde var olmak, ama yine de kendi ışığını taşımak. Ay ve Güneş birbirlerine bakarken gerçeği anladılar. Onların ışıkları hiçbir zaman ayrı değildi hep iç içeydi.`,
            action: () => { sun.style.left = '45%'; moon.style.left = '55%'; }
        },
        {
            text: `Güneş bunu fark ettiğinde, içinde kıskanç bir alev parladı. Gezegenlerin gökyüzünde Ay’a baktığını gördü. Ay, yalnızca Güneş’e ait değil miydi?`,
            action: () => { sun.classList.add('angry'); sun.style.boxShadow = '0 0 70px #FF4500, 0 0 140px #FF0000, 0 0 200px var(--sun-color)'; }
        },
        {
            text: `Ama tam bu düşüncelere kapıldığında, Ay ona nazikçe parladı: “Ben senin ışığından doğdum, senin parçanım. Başkaları bana baksa da, yalnızca seninle var olabilirim.”`,
            action: () => { sun.classList.remove('angry'); moon.classList.add('happy'); }
        },
        {
            text: `Bu kez Ay'ın içinde bir kıskançlık büyümeye başladı. Güneş’in cömertçe ışığını diğer gezegenlere sunduğunu fark etti. O yalnızca Ay’a ait değil miydi?`,
            action: () => { moon.classList.add('angry'); }
        },
        {
            text: `Güneş gülümseyerek ona sordu: “Sen neden böyle hissediyorsun? Işık saçmam, seni özel yapmaktan çıkarır mı?” Ay sustu. Çünkü kelimeler yetmiyordu.`,
            action: () => { moon.classList.remove('angry'); sun.classList.add('happy'); }
        },
        {
            text: `Bir gün Ay, rüyasında Güneş’i gördü. İçinde bir oyunbazlık vardı ve şakasına onu tanımamazlıktan geldi. Güneş, Ay’ın ne yaptığını hemen anladı.`,
            action: () => { moon.classList.add('wistful'); sun.classList.add('surprised'); }
        },
        {
            text: `Sert bir şekilde ileri doğru atıldı, yakasına sıkıca yapıştı. Ama bu güç, Ay’ı incitmek için değil, onun kaçmasına izin vermemek içindi. Ay, bu sert dokunuşu hissettiğinde kalbi hızlandı.`,
            action: () => { sun.classList.add('angry'); moon.classList.add('surprised'); sun.style.left = '48%'; moon.style.left = '52%'; sun.style.transform = 'translate(-50%, -50%) scale(1.1)'; }
        },
        {
            text: `Ayın bir yüzü hep karanlık olur diğer yüzü ise güneşe bakar ve güneşin ışığı sayesinde gözükür. Ama bazen araya ikisinin de dünyaları girer; ay için güneş, güneş için ay tutulması oluşur.`,
            action: () => { sun.classList.add('sad'); moon.classList.add('sad'); sun.style.left = '30%'; moon.style.left = '70%'; }
        },
        {
            text: `Ay güneşin ışıltısını kaybettiğini, Güneş ayın yansımasının bulanıklaştığını düşünür. Güneş ışıltısını hiç kaybetmemiştir ama yansımasını göremediği için kaybettiğini düşünür. Ay ise Güneşin ondan ışığını esirgediğini düşünür.`,
            action: () => { world.style.left = '50%'; world.style.opacity = '1'; sun.classList.add('sad'); moon.classList.add('sad'); }
        },
        {
            text: `Aslında problem ikisinin de dünyasıdır. Güneş, dünyasını etrafında döndürür. Ay ise dünyasının etrafında döner. Güneş, dünyasının hep aydınlık tarafını görmek ister. Ay ise dünyasının karanlıkta kalan yüzünü aydınlatmak ister. Bu yüzden ikisi de bazen ters düşer.`,
            action: () => { sun.classList.add('sad'); moon.classList.add('sad'); }
        },
        {
            text: `Güneş dünyasının karanlıkta bıraktığı kısmını ayın aydınlatmasından sakınır ama unuttuğu bir şey var o da Ayın ışığının kaynağı kendisi. Bu yüzden bazen ışığını kesebilir ve dünyanın karanlık yüzü derin bir geceye bürünür.`,
            action: () => { sun.style.boxShadow = '0 0 20px var(--sun-color), 0 0 40px var(--sun-glow1)'; }
        },
        {
            text: `Ay ise o karanlıkta evrenin boşluğuna karışır. Işık kaynağını kaybedince adeta görünmez olur.`,
            action: () => { moon.style.boxShadow = '0 0 5px #444'; moon.style.background = '#888'; }
        },
        {
            text: `Ancak Ay, karanlıkta kaybolduğunu sansa da evrenin boşluğu aslında ona yeni bir ses kazandırır. Görünmez olduğunu düşündüğünde, içsel ışığını keşfetmeye başlar.`,
            action: () => { moon.style.boxShadow = '0 0 10px #add8e6, 0 0 20px #4682b4'; moon.style.background = '#f0f8ff'; }
        },
        {
            text: `Ay, Güneş’in ışığını yansıtmayı görev bilmişti hep, ama o an fark eder ki, kendi varlığı, ışık olmadan da anlamlıdır. Güneş’in gözleri ondan uzak olsa bile, Ay evrenin sonsuz boşluğunda yankılanan kendi ışığını bulur.`,
            action: () => { moon.classList.remove('sad'); moon.classList.add('happy'); moon.style.boxShadow = '0 0 20px #add8e6, 0 0 35px #4682b4, 0 0 50px #ffffff'; }
        },
        {
            text: `Güneş ise, Ay’ı göremediği zaman gerçek parlaklığını sorgulamaya başlar. Hep dünyasını aydınlatmakla meşgulken, Ay’ın ona kattığı anlamı fark etmemiştir. Kendi ışığı güçlü olsa da, onun güzelliğini en iyi yansıtanın Ay olduğunu şimdi anlar.`,
            action: () => { sun.classList.remove('sad'); sun.classList.add('wistful'); }
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
            action: () => { sun.style.left = '42%'; moon.style.left = '58%'; sun.style.boxShadow = '0 0 70px var(--sun-color), 0 0 140px var(--sun-glow1), 0 0 200px var(--sun-glow2)'; }
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