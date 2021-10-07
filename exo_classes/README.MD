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
