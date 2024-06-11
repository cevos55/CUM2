<?php
  // Connexion à la base de données
  $db = mysqli_connect('localhost', 'username', 'password', 'database');

  // Vérification de la connexion
  if (!$db) {
    die('Erreur de connexion : '. mysqli_connect_error());
  }

  // Récupération des événements envoyés par le client
  $events = json_decode(file_get_contents('php://input'), true);

  // Insertion des événements dans la base de données
  foreach ($events as $event) {
    $query = "INSERT INTO events (date, title, description) VALUES ('$event[date]', '$event[title]', '$event[description]')";
    mysqli_query($db, $query);
  }

  // Fermeture de la connexion
  mysqli_close($db);
?>