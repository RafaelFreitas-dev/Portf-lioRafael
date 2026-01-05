
  // Bloquear clique direito
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Bloquear atalhos
  document.addEventListener('keydown', function (e) {
    if ( e.ctrlKey && (e.key === 'u' || e.key === 'c' || e.key === 's') ||
      e.key === 'F12'
    ) {
      e.preventDefault();
    }
  });


function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const msg = document.getElementById('mensagem');
    const telefone = '5511965562394';

    const texto = `${msg.value}`;
    const textoformatado = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${textoformatado}`;

    window.open(url, '_blank');
}