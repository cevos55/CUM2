// Utilisation de CountUp.js pour l'animation de comp
  // Utilisation de CountUp.js pour l'animation de comptage
  var options1 = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var compteur1 = new CountUp('chiffres1', 0, 90, 0, 2.5, options1);
  compteur1.start();

  var options2 = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var compteur2 = new CountUp('chiffres2', 0, 10, 0, 2.5, options2);
  compteur2.start();

  var options3 = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var compteur3 = new CountUp('chiffres3', 0, 1000, 0, 2.5, options3);
  compteur3.start();

  var options4 = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  var compteur4 = new CountUp('chiffres4', 0, 50, 0, 2.5, options4);
  compteur4.start();
