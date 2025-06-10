// Scroll etkisi: Kullanıcı sayfayı kaydırdıkça Güneş'in parlaklığı kademeli olarak azalsın.
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;

  // Güneş parlaklığı: minimum 0.5, scroll ile lineer azalma
  let brightness = Math.max(0.5, 1 - scrollTop * 0.0005);
  document.getElementById('sun').style.filter = brightness($,{brightness});
});

// Güneş için: İmleç üzerine gelince "excited" sınıfını ekleyerek animasyonu başlat.
const sun = document.getElementById('sun');
sun.addEventListener('mouseenter', () => {
  sun.classList.add('excited');
});
sun.addEventListener('mouseleave', () => {
  sun.classList.remove('excited');
});

// Ay için: İmleç üzerine gelince ay büyüsün, çıkınca eski haline dönsün.
const moon = document.getElementById('moon');
moon.addEventListener('mouseenter', () => {
  moon.style.transform = 'scale(1.2)';
});
moon.addEventListener('mouseleave', () => {
  moon.style.transform = 'scale(1)';
});