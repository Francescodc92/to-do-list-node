Nome del Progetto: Gestore di Attività (To-Do List)
Descrizione:

Il Gestore di Attività è un'applicazione web che consente agli utenti di creare, gestire e monitorare elenchi di attività da completare.
Funzionalità Principali:

    Registrazione e Accesso Utente:
      [X]  Gli utenti devono poter registrarsi creando un account con un'email e una password.
      [X] Gli utenti registrati possono accedere all'applicazione utilizzando le loro credenziali.

    Dashboard Principale:
       [] Dopo l'accesso, gli utenti vengono reindirizzati a una dashboard principale dove 
       [] possono visualizzare i propri elenchi di attività.

    Creazione di Attività:
      [X] Gli utenti possono aggiungere nuove attività specificando un titolo, una descrizione e una data di scadenza opzionale.

    Visualizzazione delle Attività:
       [X] Gli utenti possono visualizzare tutte le loro attività presenti nell'elenco.
       [X] Le attività devono essere ordinate per data di scadenza, con quelle più vicine alla scadenza visualizzate per prime. 
               ---> !TODO TROVARE IL MODO DI RICEVERE LE ATTIVITÀ CON SCADENZA NULL PER ULTIME <------

    Aggiornamento delle Attività:
       [X] Gli utenti possono segnare un'attività come completata o modificarne i dettagli come titolo, descrizione o data di scadenza.

    Eliminazione delle Attività:
       [X] Gli utenti possono eliminare un'attività dall'elenco.

    Ricerca di Attività:
       [X] Gli utenti possono cercare attività per titolo.

    Filtri:
       [] Gli utenti possono filtrare le attività per stato (completate/non completate).

    Autenticazione e Sicurezza:
       [X] Le password degli utenti devono essere crittografate prima di essere memorizzate nel database.
       [X] Le rotte dell'applicazione devono essere protette, consentendo l'accesso solo agli utenti autenticati.

    Persistenza dei Dati:

    Utilizza un database per memorizzare le informazioni sugli utenti e sulle attività.
    Ad esempio, puoi utilizzare MongoDB per il database e Mongoose come ODM (Object Data Modeling).

Tecnologie:
- PRISMA ORM
- MYSQL DB
- DOCKER (CREATE DB CONTAINER)
- EXPRESS
- NODEJS
- TYPESCRIPT
- ZOD (VALIDATION REQUEST DATA)
- JWT (GENERATE AUTH TOKEN)
- 


## Routes
- register User (POST) ---- (=> RES {user})
```json
    http://localhost:3333/api/auth/register
{
    "firstName": "test",
    "lastName" : "-test",
    "email": "test@hotmail.com",
    "password": "password"
}
```

- login User (POST)  ---- (=> RES {user, token})
```json
    http://localhost:3333/api/auth/login
{
    "email": "test@hotmail.com",
    "password": "password"
}
```

- create activity (POST) ---- (=> RES {activity})
```json
   http://localhost:3333/api/auth/login
   ----- ADD USER TOKEN Authorization: token login
{
    "title": "test-2",
    "status":"TODO",
    "expirationDate":"2024-04-27T23:37:04.271Z",
    "description":"descrizione test-12"  
}
```

- all activities (GET) (=> RES {activities}) paginate 10
    pageIndex (parte da 0 definisce la paginazione )
    title (ritorna tutte le attività (sempre paginate per 10 elementi ) il cui titolo contiene cio che gli viene mandato)

```json
  http://localhost:3333/api/activities?pageIndex=1&title=prov  
   ----- ADD USER TOKEN Authorization: token login
```

- find activity by ID (GET)
     ----- ADD USER TOKEN Authorization: token login

```json
  http://localhost:3333/api/activities/{activityId}   <--- assicurarsi che l'id dell'attività sia di una attività collegata all'utente altrimenti darà unauthorized
```

- find activity by ID (PUT)
     ----- ADD USER TOKEN Authorization: token login

```json
  http://localhost:3333/api/activities/{activityId}   <--- assicurarsi che l'id dell'attività sia di una attività collegata all'utente altrimenti darà unauthorized


{
    "title": "test update",
}

```


- delete activity (DELETE)
     ----- ADD USER TOKEN Authorization: token login

```json
  http://localhost:3333/api/activities/{activityId}   <--- assicurarsi che l'id dell'attività sia di una attività collegata all'utente altrimenti darà unauthorized
```