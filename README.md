# Ceate a Virtual Machine (VM)

La création d'une machine virtuelle (VM) sur le portail Azure implique plusieurs étapes. Voici un guide étape par étape pour créer une VM sur le portail Azure :

1. **Connexion à Azure :** Connectez-vous à votre compte Azure sur le portail Azure à l'adresse suivante : [https://portal.azure.com/](https://portal.azure.com/).

2. **Navigation vers le service "Machines virtuelles" :** Dans le portail Azure, cliquez sur "Créer une ressource" dans le menu de gauche, puis recherchez et sélectionnez "Machine virtuelle".

3. **Configuration de base :** Remplissez les informations de base pour la machine virtuelle, telles que le nom de la machine virtuelle, le système d'exploitation, le groupe de ressources, la région, etc.

4. **Choix de l'image :** Sélectionnez l'image du système d'exploitation que vous souhaitez utiliser. Azure propose plusieurs images préconfigurées pour différents systèmes d'exploitation.

5. **Taille de la machine virtuelle :** Choisissez la taille de la machine virtuelle en fonction de vos besoins en termes de performances et de ressources. Azure propose différents types de tailles de machines virtuelles.

6. **Configuration des paramètres facultatifs :** Configurez d'autres paramètres facultatifs tels que le stockage, le réseau, l'extension de script, etc. Ces options dépendent de vos besoins spécifiques.

7. **Sécurité et accès :** Configurez les règles de pare-feu et les règles de réseau selon vos besoins en matière de sécurité. Vous pouvez également définir des clés SSH ou des mots de passe pour l'authentification.

8. **Disques :** Configurez les disques pour votre machine virtuelle, y compris le disque de système d'exploitation et d'autres disques de données si nécessaire.

9. **Vérification et création :** Passez en revue toutes les configurations que vous avez définies, puis cliquez sur le bouton "Vérifier + créer" pour valider la configuration.

10. **Validation et déploiement :** Azure effectuera une validation de votre configuration. Si la validation réussit, cliquez sur "Créer" pour déployer la machine virtuelle.

11. **Suivi du déploiement :** Une fois la machine virtuelle créée, vous pouvez suivre le déploiement dans le portail Azure. Une fois le déploiement terminé, vous pouvez accéder à votre machine virtuelle.
![Screenshot](Screenshot_2.png)
![Screenshot](Screenshot_1.png)
![Screenshot](Screenshot_3.png)
![Screenshot](Screenshot_4.png)


# Set Up Blob Storage

La création d'un compte de stockage Azure avec un conteneur Blob Storage peut être réalisée en suivant ces étapes sur le portail Azure :

1. **Connexion à Azure :** Connectez-vous à votre compte Azure sur le portail Azure à l'adresse [https://portal.azure.com/](https://portal.azure.com/).

2. **Navigation vers le service "Stockage" :** Dans le portail Azure, cliquez sur "Créer une ressource" dans le menu de gauche, puis recherchez et sélectionnez "Stockage" dans la section "Tous les services". Vous pouvez également trouver le service en naviguant directement vers "Tous les services" > "Stockage".

3. **Création d'un compte de stockage :**
   - Cliquez sur le bouton "+ Ajouter" pour créer un nouveau compte de stockage.
   - Remplissez les informations nécessaires comme le nom du compte de stockage, le modèle de déploiement, le groupe de ressources, la région, et choisissez le type de réplication de données (Localement Redondant, Géoredondant, etc.).

4. **Configuration avancée (facultative) :** Vous pouvez configurer des options avancées telles que les paramètres réseau, les tags, la gestion avancée, etc. Ces options sont facultatives et peuvent être laissées par défaut si vous n'avez pas de besoins spécifiques.

5. **Vérification et création :** Passez en revue toutes les configurations que vous avez définies, puis cliquez sur le bouton "Vérifier + créer" pour valider la configuration.

6. **Validation et déploiement :** Azure effectuera une validation de votre configuration. Si la validation réussit, cliquez sur "Créer" pour déployer le compte de stockage.

7. **Accéder au compte de stockage :** Une fois le déploiement terminé, accédez au compte de stockage nouvellement créé. Vous pouvez le trouver dans le portail Azure en naviguant vers "Tous les services" > "Stockage" > [Nom du compte de stockage].

8. **Création d'un conteneur Blob Storage :**
   - Dans la section du compte de stockage, cliquez sur "Conteneurs" dans le menu de gauche.
   - Cliquez sur le bouton "+ Conteneur" pour créer un nouveau conteneur Blob Storage.
   - Donnez un nom unique au conteneur, choisissez l'accès public (privé ou public en lecture) et configurez d'autres options si nécessaire.

9. **Validation et déploiement du conteneur :** Passez en revue les configurations du conteneur, puis cliquez sur "OK" pour créer le conteneur.

10. **Accès au conteneur :** Une fois le conteneur créé, vous pouvez y accéder et commencer à stocker des blobs (objets) dans le stockage.

![Screenshot](Screenshot_5.png)
![Screenshot](Screenshot_6.png)
![Screenshot](Screenshot_7.png)
![Screenshot](Screenshot_8.png)
![Screenshot](Screenshot_9.png)
![Screenshot](Screenshot_10.png)

# Deploy a Web App

Le déploiement d'une application web sur Azure peut être réalisé en suivant ces étapes générales sur le portail Azure :

1. **Connexion à Azure :** Connectez-vous à votre compte Azure sur le portail Azure à l'adresse [https://portal.azure.com/](https://portal.azure.com/).

2. **Navigation vers le service "App Service" :** Dans le portail Azure, cliquez sur "Créer une ressource" dans le menu de gauche, puis recherchez et sélectionnez "App Service" dans la section "Tous les services". Vous pouvez également trouver le service en naviguant directement vers "Tous les services" > "App Service".

3. **Création d'un nouvel App Service :**
   - Cliquez sur le bouton "+ Ajouter" pour créer un nouvel App Service.
   - Remplissez les informations nécessaires, telles que le nom de l'App Service, le modèle de déploiement, le groupe de ressources, la région, le système d'exploitation, etc.

4. **Configuration de l'hébergement :**
   - Choisissez un plan tarifaire (tarification de l'App Service) en fonction de vos besoins.
   - Configurez d'autres paramètres tels que la pile d'exécution (Node.js, .NET, Python, etc.) et la version de runtime.

5. **Configuration des paramètres avancés (facultatif) :** Configurez des options avancées telles que la mise à l'échelle automatique, la gestion des paramètres, les règles d'arrêt automatique, etc. Ces options sont facultatives et peuvent être ajustées en fonction de vos besoins spécifiques.

6. **Vérification et création :** Passez en revue toutes les configurations que vous avez définies, puis cliquez sur le bouton "Vérifier + créer" pour valider la configuration.

7. **Validation et déploiement :** Azure effectuera une validation de votre configuration. Si la validation réussit, cliquez sur "Créer" pour déployer l'App Service.

8. **Accès à l'App Service :** Une fois le déploiement terminé, accédez à votre App Service depuis le portail Azure en naviguant vers "Tous les services" > "App Services" > [Nom de l'App Service].

9. **Déploiement de l'application :**
   - Dans la section de votre App Service, cliquez sur "Déploiements" dans le menu de gauche.
   - Sélectionnez la méthode de déploiement souhaitée, comme le déploiement continu depuis un référentiel Git, un référentiel Azure DevOps, ou le déploiement manuel.

10. **Suivi du déploiement :** Suivez le processus de déploiement dans la section "Déploiements" pour vous assurer que votre application est correctement déployée.

![Screenshot](Screenshot_11.png)
![Screenshot](Screenshot_12.png)
![Screenshot](Screenshot_13.png)

# Create a SQL Database

La création d'une base de données SQL sur Azure peut être réalisée en suivant ces étapes générales sur le portail Azure :

1. **Connexion à Azure :** Connectez-vous à votre compte Azure sur le portail Azure à l'adresse [https://portal.azure.com/](https://portal.azure.com/).

2. **Navigation vers le service "Bases de données SQL" :** Dans le portail Azure, cliquez sur "Créer une ressource" dans le menu de gauche, puis recherchez et sélectionnez "Bases de données SQL" dans la section "Tous les services". Vous pouvez également trouver le service en naviguant directement vers "Tous les services" > "Bases de données SQL".

3. **Création d'une nouvelle base de données SQL :**
   - Cliquez sur le bouton "+ Ajouter" pour créer une nouvelle base de données SQL.
   - Remplissez les informations nécessaires, telles que le nom de la base de données, le modèle de déploiement, le groupe de ressources, la région, le serveur SQL, etc.

4. **Configuration du serveur SQL :**
   - Si vous n'avez pas encore de serveur SQL, créez-en un en spécifiant un nom unique, un nom d'administrateur et un mot de passe.
   - Configurez d'autres paramètres du serveur, tels que la version du serveur, la capacité, etc.

5. **Configuration des paramètres avancés (facultatif) :** Configurez des options avancées telles que la sécurité avancée, la rétention automatique, etc. Ces options sont facultatives et peuvent être ajustées en fonction de vos besoins spécifiques.

6. **Configuration des règles pare-feu :** Configurez les règles pare-feu pour spécifier quels clients peuvent accéder à votre base de données SQL. Vous pouvez autoriser l'accès à partir d'une plage d'adresses IP spécifique.

7. **Vérification et création :** Passez en revue toutes les configurations que vous avez définies, puis cliquez sur le bouton "Vérifier + créer" pour valider la configuration.

8. **Validation et déploiement :** Azure effectuera une validation de votre configuration. Si la validation réussit, cliquez sur "Créer" pour déployer la base de données SQL.

9. **Accès à la base de données :** Une fois le déploiement terminé, accédez à votre base de données SQL depuis le portail Azure en naviguant vers "Tous les services" > "Bases de données SQL" > [Nom de la base de données].

10. **Gestion de la base de données :** Vous pouvez gérer votre base de données, y compris la configuration, la surveillance, et l'exécution de requêtes SQL, depuis le portail Azure.

![Screenshot](Screenshot_14.png)
![Screenshot](Screenshot_15.png)
![Screenshot](Screenshot_16.png)
![Screenshot](Screenshot_17.png)


```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
