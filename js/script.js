<script>
// API YouTube
const apiKey = 'AIzaSyAR4bvoqYM97PFWr_w8ChXV4YeFq7DvX0c';

// ID de la playlist que vous souhaitez afficher.
const playlistId = 'CIVC';

// Récupération de la liste des vidéos de la playlist.
fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${AIzaSyAR4bvoqYM97PFWr_w8ChXV4YeFq7DvX0c}`)
  .then(response => response.json())
  .then(data => {
    // Pour chaque vidéo de la playlist, créez un lecteur vidéo YouTube et ajoutez-le à la page.
    data.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const playerDiv = document.getElementById('player');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = '560';
      iframe.height = '315';
      iframe.allowFullscreen = true;
      playerDiv.appendChild(iframe);
    });
  });

  // Récupération du formulaire
  const form = document.querySelector('form');

  // Événement de soumission du formulaire
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const player1 = document.getElementById('player1').value;
    const num1 = document.getElementById('num1').value;
    const player2 = document.getElementById('player2').value;
    const num2 = document.getElementById('num2').value;

    // Stockage des données dans les cookies
    document.cookie = `player1=${player1}`;
    document.cookie = `num1=${num1}`;
    document.cookie = `player2=${player2}`;
    document.cookie = `num2=${num2}`;

    // Redirection vers la page de classement
    window.location.href = 'index.html';
  });
</script>
