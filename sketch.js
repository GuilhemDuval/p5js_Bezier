//////// QUESTIONS

// J'ai produit plusieurs exemples d'utilisation des courbes de Bézier pour de la création graphique. J'ai d'abord utilisé des fonctions simples pour expliciter le principe des courbes Bézier. Puis j'ai présenté une application plus artistique et interactive des courbes de Bézier.

// Coder et pouvoir voir le résultat simultanément m'a permis de facilement tester les différentes fonctions de Bézier. J'ai ainsi pu manipuler les fonctions, leurs valeurs et voir directement l'impact de mes modifications. Ainsi, les fonctions devenaient simples à prendre en main.

// Plus que les lire des références ou même écrire, je dialoguais avec le code. Mes interactions causent un impact direct. Je pouvais ainsi modifier mes actions suivant le résultat obtenu. Coder est donc pour moi un dialogue entre l'humain et la machine.

// Grâce à cet exercice, j'ai pu voir le code comme une réelle forme de langage.


//////// REFLEXIONS SUPPLEMENTAIRES

// Les courbes de Bézier sont des outils mathématiques qui ouvrent la porte à une représentation. Comme de nombreuses techniques, elles ont été inventé par des ingénieurs et non pour l'art en soi. En tant qu'artistes-ingénieurs, nous devons nous réapproprier des formes variées de représentation. L'art peut naître de tout et donc aussi de la science.

// Pour se réapproprier un outil comme les courbes de Bézier, il faut d'abord le comprendre. Appréhender ses règles et son fonctionnement est essentiel pour l'utiliser à bon escient. Cela s'applique à tous les domaines de l'art même ceux non liés directement à la science. Il est important de comprendre le fonctionnement de l'anatomie pour un danseur, de son matériel de peinture pour un peintre et ainsi de suite.

// Les mathématiques, précisément, nous offrent beaucoup d'outils. En effet, nous pouvons dire qu'ils nous permettent de comprendre le monde, le qualifier, le représenter. Il est donc logique de faire appel aux mathématiques pour proposer une représentation artistique quelle qu'elle soit. Les mathématiques comme l'art, nous rapproche de notre réalité complexe.

// En conclusion, un artiste doit comprendre ses outils. Nos outils sont entre autres la science et les mathématiques que ce soit en général ou par l'utilisation de l'informatique. Nous, en tant qu'artistes, devons nous intéresser à notre outil le plus versatile, les mathématiques.

function setup() {
  createCanvas(400, 400);
  print('hello world');
  background(255);
}

function draw() {
  // REFERENCE bezier 1
  fill(255);
  stroke(160);
  rect(0, 0, 100, 100);
  stroke(0, 0, 0);
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  stroke(255, 106, 0);
  line(85, 20, 10, 10);
  circle(10, 10, 5);
  line(90, 90, 15, 80);
  circle(90, 90, 5);

  // REFERENCE bezier 2
  stroke(160);
  rect(100, 0, 100, 100);
  stroke(0, 0, 0);
  bezier(183, 83, 100, 33, 133, 0, 133, 0);
  stroke(178, 0, 255);
  line(183, 83, 100, 33);
  circle(100, 33, 5);
  line(133, 0, 133, 0);
  circle(133, 0, 5);

  // REFERENCE bezierPOINT
  stroke(160);
  rect(200, 0, 100, 100);
  let x1 = 285,
    x2 = 210,
    x3 = 290,
    x4 = 215;
  let y1 = 20,
    y2 = 10,
    y3 = 90,
    y4 = 80;
  stroke(0, 0, 0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(255);
  stroke(76, 255, 0);
  let steps = 10;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    circle(x, y, 5);
  }

  // REFERENCE bezierTangent
  stroke(160);
  rect(300, 0, 100, 100);
  stroke(0, 0, 0);
  bezier(385, 20, 310, 10, 390, 90, 315, 80);
  steps = 6;
  fill(255);
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    // Get the location of the point
    let x = bezierPoint(385, 310, 390, 315, t);
    let y = bezierPoint(20, 10, 90, 80, t);
    // Get the tangent points
    let tx = bezierTangent(85, 10, 90, 15, t);
    let ty = bezierTangent(20, 10, 90, 80, t);
    // Calculate an angle from the tangent points
    let a = atan2(ty, tx);
    a += PI;
    stroke(0, 148, 255);
    line(x, y, cos(a) * 30 + x, sin(a) * 30 + y);
    // The following line of code makes a line
    // inverse of the above line
    // line(x, y, cos(a)*-30 + x, sin(a)*-30 + y);
    ellipse(x, y, 5, 5);
  }

  // EXEMPLE
  fill(0);
  stroke(160);
  rect(0, 100, 400, 400);
  noFill();
  stroke(255);
  colorMode(HSB, height, height, height);

  for (let i = 0; i < 200; i += 20) {
    stroke(i*2, height, height);
    bezier(
      mouseX - i / 2.0,
      100 + 40 + i,
      410,
      100 + 20,
      440,
      100 + 300,
      50 + 240 - i / 16.0,
      50 +300 + i / 8.0
    );
  }

  colorMode(RGB, 255);

}
