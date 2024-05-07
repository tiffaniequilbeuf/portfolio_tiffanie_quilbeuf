# Portfolio de Tiffanie QUILBEUF


L'objectif de ce portfolio est de donner une première image de mon travail en tant que développeur, en dehors de mon CV. Ce projet pourra également appuyer :

- la recherche d'une alternance en **Concepteur Développeur d'Application du 14 octobre 2024 au 6 octobre 2025**
- donner un élément d'appui supplémentaire à mon dossier de démission-reconversion.

Mon objectif n'est pas de faire un portfolio artistique. J'opte pour un visuel simple tout en montrant mes compétences. Ce projet ne doit pas empiéter sur la formation que je suis actuellement. Ma priorité reste la montée en compétences avec la formation Développeur Web et Web Mobile du Cefim (Tours).

J'aimerais poster régulièrement les avancées du projet. Toute la partie CSS sera créée en SASS. J'exporterai régulièrement un build pour montrer l'avancée physique du projet.
___

- README généré le 07-04-2024 par Tiffanie QUILBEUF
- Dernière mise à jour le : 20-04-2024 
- Dernière mise à jour du Build en ligne le : 21-04-2024 19:15

## DO
ajout momentanée des préférences thème utilisateurs (dark en commentaire). Il évoluera par la suite en JS.
Sémantique : nav sur html
Début du layout avec les skips-links actifs et la partie main-header.
Gestion SASS séparée de la navigation (comportement spécifique).
Modification du script avec ajout du comportement bouton (à améliorer en js)

## TODO
_Cette section est éphémère. Elle me servira, en plus des tâches à faire (TODO), à me laisser un repère sur l'avancée du projet.
Focus SCSS/CSS en premier_  

- se prévoir une session ajout des images après le layout.  
- bien repasser sur la navigation et ses comportements. Pour l'instant j'ai la base.

- Et si je gérais mon formulaire contact en PHP ? Refonte à prévoir ?

- idée pour les images : classique CSS. Par la suite créer une fonction qui appelle les images suivant ce que j'ai d'écris dans la div ?
- Trouver une solution pour minimiser plus que le CSS pour la production.
___

## Phase de maquettage

J'ai créé [la maquette du projet](https://www.figma.com/file/LxMjDEEO0goxek98jR7Om6/my-portfolio?type=design&node-id=0%3A1&mode=design&t=bvFbTy1m2lHPt6Ee-1) avec Figma. 

Cette maquette comporte une visualisation du projet en version mobile, tablette et desktop. Une version desktop du projet est également disponible en mode sombre. Je la déclinerai bien sûr dans les autres formats lors de l'intégration.

Tous les contrastes ont été testés sur [Coloor Contrast Checker](https://coolors.co/contrast-checker/b4bbfa-453232). 

## Hebergement
L'école nous prête un hébergemement sur o2Switch pendant la durée de la formation. Je n'ai en revanche pas le droit de créer plus de 2 sous-domaines. Etant donné qu'il s'agit de mon nom, l'adresse sera la suivante :
J'ai demandé la sécurisation HTTPS pour plus de sécurité. 


## Phase d'intégration








**Notes** : 
 
Images des langages informatiques avec un alt, le reste aria-hidden true car n'apporte rien aun contenu.

__le 07-05__ : changement de façon de travailler sur Git. Pour m'entrainer je fonctionnerais par branche. Comme je reprends en cours de route et que j'en étais au layout je commence par une branche  feature/layout.


## Déploiement
### A propos du dossier build

Ce script se présente de la façon suivante : 

``` json
"build": 
/*Je créé le dossier CSS et le minifie. Il n'y a plus le fichier map*/
"sass scss:build/css --style=compressed --no-source-map
```
``` json
/*Je créé l'ensemble des répertoires du projet*/
&& mkdir build\\font 
&& mkdir build\\img 
```

``` json
/*Je copie les éléments dans les bons répertoires*/
&& xcopy font build\\font /s /e /i 
&& xcopy img build\\img /s /e /i 
&& copy index.html build ",
```
Dans un second temps, je chercherais une solution pour minifier et automatiser la création du build voir de l'envoie FTP.