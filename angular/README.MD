
# Exercices Syntaxe Angular


### 1. Faire un compteur


- Il commence à 0
- On doit pouvoir l'incrémenter de 1 et de 5 (en positif et négatif)
- On doit pouvoir le reset (retour à 0)
- De plus, il change de couleur en fonction de sa valeur :
    - 0 : jaune
    - Entre 1 et 15, il sera vert clair (#4af778)
    - Entre 16 et 25, il sera vert (#00ff44)
    - 26 et plus, il sera vert foncé (#009c29)
    - Entre -1 et -15, il sera rouge clair (#c23844)
    - Entre -16 et -25, il sera rouge (#ff0016)
    - -26 et plus, il sera rouge foncé (#ab000f)


### 2. Students


Vous afficherez les Student avec leur moyenne dans une table HTML.
Vous aurez besoin de reprendre des éléments fait dans le src/index.ts :
- le tableau de **Student**
- l'interface **Student**
- la méthode **calcAverage**


### 2. Yatzee... le retour


Je vais modifier la classe Dice pour qu'elle introduise des images des valeurs des dés.

Vous devrez afficher les images des dés dans l'HTML.


### 3. Le jeu d'échec


Nous inclurons dans un premier temps les images des pièces du jeu d'échec.
Pour cela il faudra ajouter un attribut dans la classe "Piece" de nom "image" et de type string.
(Inspirez vous des dés du Yatzee)

Les images seront initialisés par défaut, dans leur classe respective.

Vous afficherez ensuite le plateau du jeu d'échec en HTML avec ses cases et les images de ses pièces.

