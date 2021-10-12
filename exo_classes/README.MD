## Exos - 08/10/2021


### 1.

Faire une classe pour un compte bancaire.

Un compte bancaire est représentée par les attributs suivant :
- balance : number ; le montant du compte
- name : string ; le nom du titulaire du compte
- active : boolean ; indique si le compte est actif ou non

Un compte lors de sa création a un solde (balance) égal à 0 et est actif.

On doit pouvoir effectuer les opérations suivantes sur un compte :
- withdraw (retrait) : retirer de l'argent du compte, si le solde est positif
- deposit (dépot) : ajouter de l'argent sur le compte

Les opérations précédentes ne peuvent pas être effectuées sur un compte non-actif.

Testez votre code avec un compte actif et un compte inactif.


### 2.

Vous devez réaliser un jeu de combat de héros.

Pour se faire, vous devez faire une classe "Hero", il aura les attributs suivant :
- name : string, le nom du hero, il sera pris en paramètre par le constructeur
- damage : number, les dégâts du héro, ils sont générés aléatoirement à la construction du héro entre 40 et 56
- lifePoint : number, les points de vie du héro, ils sont générés aléatoirement à la construction du héro entre 480 et 620

Créez la classe en question, ses attributs et son constructeur.

Vous ajouterez une méthode fight, qui prends en paramètre un "Hero".

Cette méthode permet au héro courant de faire perdre des points de vie au héro passé en paramètre.
(Pour se faire vous retirerez l'attaque du héro courant aux points de vie du héros en paramètre)
Cependant, chaque héro a 15% de chance de réaliser un coup critique, c'est-à-dire une attaque infligeant 175% des dégâts originaux du héro.
Vous devrez gérer ce cas de figure !

Faites une fonction permettant d'afficher les différentes stats de votre héro.

Testez votre classe avec plusieurs héros et faites les combattre ensemble.

### 3. Héritage

Class : Hero, caractérisé par :

- Son nom (name)
- Ses points de vie (hitPoint)
- Dégâts max (damageMax)
- Dégâts min (damageMin)
- Son niveau (level)
- Defense (defense)
- Chance de coup critique (criticalChance)

Tous les Héros commencent niveau 1 et ont par défaut 5% de chance de coup critique

Créer ensuite les classes suivantes :


- Mage, un Mage est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un mage a **toujours** les valeurs suivantes par défaut :
    - 300 points de vie
    - 52 dégâts min et 58 dégâts max
    - 2 de défense



- Warrior, un Warrior est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un Warrior a **toujours** les valeurs suivantes par défaut :
    - 360 points de vie
    - 44 dégâts min et 47 dégâts max
    - 4 de défense



- Rogue, un Rogue est un Hero
  - Pour créer un Mage on a besoin que de son nom (name)
  - Un Rogue a **toujours** les valeurs suivantes par défaut :
    - 320 points de vie
    - 42 dégâts min et 52 dégâts max
    - 3 de défense



Par la suite... Ajouter une méthode **levelUp** à la classe Héros

Commun à tous les héros :
- Augmenter leur niveau (level) de 1
- Augmenter leur coup critique (criticalChance) de 0.25% 


La méthode **levelUp** permet aussi d'augmenter les caractéristiques des héros en fonction de leur type :
- Un Mage :
  - Augmenter leur points de vie (hitPoint) de 25
  - Augmenter leur dégât (damageMin & damageMax) de 4
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 5

- Un Warrior :
  - Augmenter leur points de vie (hitPoint) de 39
  - Augmenter leur dégât (damageMin & damageMax) de 2
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 3

- Un Rogue :
  - Augmenter leur points de vie (hitPoint) de 33
  - Augmenter leur dégât (damageMin & damageMax) de 3
  - Augmenter leur défense (defense) de 1, si le niveau du héro est un multiple de 4
  - Augmenter coup critique (criticalChance) de 0.33% au lieu de 0.25%


### 4. Suite TP héritage


Ajouter une fonction "attack" dans la classe Hero, elle prend en paramètre un autre Hero


Le but de cette méthode est que le héro courant attaque le héro en paramètre, pour cela :
- Déterminer les dégâts du héro : un alétoire entre ses dégâts min et max (fonction Math.random => chercher sur internet la fonction à créer)
- Déterminer si le coup est critique, un coup critique inflige 50% en plus des dégâts normaux
- Puis le coup est réduit par la défense du héro attaqué, la défense un pourcentage (1 + (defense/100))
- Puis le héro attaqué perd ses points de vie


Enfin :
- Simuler un combat entre deux héros, l'un commence, l'autre réplique et ainsi de suite, jusqu'à qu'il n'y en ai plus qu'un.


### 5. Yatzee

Au tour du Yatzee maintenant, mais qu'est-ce que le Yatzee ?  https://fr.wikipedia.org/wiki/Yahtzee

Comment feriez-vous pour le modéliser en objet ?
Réfléchissez à ça, et appelez-moi lorsque vous avez une idée, que je vous la valide (ou pas !)

(Il faut 2 classes)

Une fois la "solution" trouvée :
- Faire une fonction qui effectue un lancé => affichage du test via un console.log
- Nous allons calculer les points réalisés par l'utilisateur, dans un premier temps on ne testera que les cas de base :
    - Brelan : 3 dés identiques, somme des dés
    - Carré : 4 dés identiques, somme des dés
    - Full : 3 dés identiques et 2 dés identiques, 25 points
    - Yatzee : 5 dés identiques, 50 points
- Faire une fonction qui informe l'utilisateur des points réalisés lors de son lancé


### 6. Découpage géographique

Représentez un découpage géographique, pour cela vous devez modéliser, avec des classes :
  - Une région, elle possède :
    - un nom (string)
    - un code (string)
    - plusieurs département
    
  - Un département, il possède :
    - un nom (string)
    - un code (string)
    - plusieurs villes

  - Une ville, elle possède :
    - un nom (string)
    - un codeInsee (string)
    - plusieurs codePostaux (string)
    - nombre d'habitant (number)
    

Une fois vos classes créées, faire des instances de chacune et les afficher et vérifier que tout fonctionne.
  

