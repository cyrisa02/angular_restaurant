1/ Installation d'une Navbar avec Material
2/ Installation de JSON -Server 
https://www.npmjs.com/package/json-server
création d'un fichier db.json

json-server --watch db.json   pour lancer le serveur
3/ Créer un component dashboard-> ng g c dashboard
4/ Routing
5/ Créer le Service ng g s restaurant --skip-tests pour le HttpClient
6/ Dans AppModule appeler le HttpClientModule
7/ generer l'interface (la classe)-> ng g i restaurant
8/ configuer le fichier restaurant.ts en json
9 / Tableau  + getAll 
10/ Fonction addRestaurant ng g c addRestaurant puis la route // puis la méthode ds restaurant.service / [(ngModel)] dans le html + FormsModule dans app.module 
11/ Edit componenent ng g c editRestaurant puis la route avec /:id //   puis la méthode ds restaurant.service 
12/ Delete création de la méthode dans le service / chercher dans Material une boite de Dialog / ng g c deleteRestaurant
pbm mauvaise version de cdk Open up package.json file
Add  "@angular/cdk": "^14.2.1", to dependencies section:
Run npm install to update download the new package
delete() dans le dashboard car le bouton delete est dans le dashboard