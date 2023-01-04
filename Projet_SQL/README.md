# inf370-tp4

L'application web permet de présenter l'ensemble des données présentes dans la table Planrepas de la base de données TP4_Livraison. On peut aussi insérer, modifier ou supprimer des données.

Lors de l'insertion des données, une multitude de contrainte ont été pré-établies afin d'éviter des erreurs. Notre formulaire bloque la grande majorité des problèmes que nous pouvons rencontrer lors d'une insertion ou d'une modification d'une données. Voici quelques exemples concrèts : 
- Des "Validators" empêchent l'utilisateur d'insérer autre chose qu'un numéro de plan repas commençant par un p et ayant 3 nombres.
- Des "Validators" vérifient que le prix se situe entre 10.00 et 99.99 $
- Le nombre de personnes, le nombre de calories et la fréquence doivent être modifiée manuellement à l'aide de boutons + et -
- Le choix du fournisseur se fait au travers d'une liste où les numéros et les noms des fournisseurs disponibles y sont affichés

Finalement, si une erreur se produit à l'extérieur de ces validations, un dialog (modale) avertira le client d'une erreur.

Une confirmation au bas de la page viendra avertir le client que ses données ont bien été enregistrées.
