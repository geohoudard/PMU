<script>
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
    window.location.href = 'classement.html';
  });
</script>
