window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  
  // Güneş: Scroll arttıkça parlaklık azalacak.
  let sun = document.querySelector('.sun');
  // Parlaklık minimum 0.5, scroll arttıkça lineer düşüş
  let brightness = Math.max(0.5, 1 - scrollTop * 0.0005);
  sun.style.filter = brightness(${brightness});

  // Ay: Scroll ile horizontal hareket ekleyelim.
  let moon = document.querySelector('.moon');
  // X ekseninde hafif kayma, scroll etkisiyle 0'dan başlayıp artan bir değerde hareket.
  let translateX = scrollTop * 0.05;
  // Mevcut 'slowFloat' animasyonunun üzerine ekliyoruz; bu nedenle önceki animasyonları korumak için 'translateX' ekleniyor.
  moon.style.transform = translateX(${translateX}px);
});