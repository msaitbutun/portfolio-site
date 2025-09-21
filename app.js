// Basit etkileşim: tema toggle, e-posta kopyalama, yıl doldurma
(function(){
  const tgl = document.getElementById('themeToggle');
  const copyBtn = document.getElementById('copyEmail');
  const year = document.getElementById('year');

  // yıl
  year.textContent = new Date().getFullYear();

  // tema: koyu/aydınlık (basit)
  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';
  const apply = (light) => {
    if(light){
      document.documentElement.setAttribute('data-theme','light');
      document.body.style.background = '#f7fafc';
      document.body.style.color = '#042033';
      document.querySelectorAll('.btn').forEach(b=>b.style.color='#042033');
      tgl.textContent = '🌞';
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      document.body.style.background = 'linear-gradient(180deg,#071025 0%,#071827 100%)';
      document.body.style.color = '';
      tgl.textContent = '🌙';
    }
  };

  // başlangıç: koyu
  apply(false);

  tgl.addEventListener('click', () => {
    apply(isDark());
  });

  copyBtn && copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('btn.sait@gmail.com');
      copyBtn.textContent = 'Kopyalandı ✓';
      setTimeout(()=> copyBtn.textContent = 'E-postayı kopyala',1500);
    } catch(e){
      alert('Kopyalama başarısız. E-postayı manuel kopyalayın: btn.sait@gmail.com');
    }
  });
})();
