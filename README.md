Nome del Progetto: Gestore di Attività (To-Do List)
Descrizione:

Il Gestore di Attività è un'applicazione web che consente agli utenti di creare, gestire e monitorare elenchi di attività da completare.
Funzionalità Principali:

    Registrazione e Accesso Utente:
        Gli utenti devono poter registrarsi creando un account con un'email e una password.
        Gli utenti registrati possono accedere all'applicazione utilizzando le loro credenziali.

    Dashboard Principale:
        Dopo l'accesso, gli utenti vengono reindirizzati a una dashboard principale dove possono visualizzare i propri elenchi di attività.

    Creazione di Attività:
        Gli utenti possono aggiungere nuove attività specificando un titolo, una descrizione e una data di scadenza opzionale.

    Visualizzazione delle Attività:
        Gli utenti possono visualizzare tutte le loro attività presenti nell'elenco.
        Le attività devono essere ordinate per data di scadenza, con quelle più vicine alla scadenza visualizzate per prime.

    Aggiornamento delle Attività:
        Gli utenti possono segnare un'attività come completata o modificarne i dettagli come titolo, descrizione o data di scadenza.

    Eliminazione delle Attività:
        Gli utenti possono eliminare un'attività dall'elenco.

    Ricerca di Attività:
        Gli utenti possono cercare attività per titolo o data di scadenza.

    Filtri:
        Gli utenti possono filtrare le attività per stato (completate/non completate) o data di scadenza.

    Autenticazione e Sicurezza:
        Le password degli utenti devono essere crittografate prima di essere memorizzate nel database.
        Le rotte dell'applicazione devono essere protette, consentendo l'accesso solo agli utenti autenticati.

    Persistenza dei Dati:

    Utilizza un database per memorizzare le informazioni sugli utenti e sulle attività.
    Ad esempio, puoi utilizzare MongoDB per il database e Mongoose come ODM (Object Data Modeling).

Tecnologie Consigliate:

    Node.js e Express.js per la creazione del server backend.
    TypeScript per una tipizzazione statica e migliorata.
    MongoDB come database per la persistenza dei dati.
    Mongoose come ODM per la gestione del database MongoDB.
    bcrypt.js per la crittografia delle password degli utenti.
    JWT (JSON Web Tokens) per l'autenticazione basata su token.


## Routes
- register User (POST)
    http://localhost:3333/api/auth/register
{
    "firstName": "test",
    "lastName" : "-test",
    "email": "test@hotmail.com",
    "password": "password"
}