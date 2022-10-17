# jquery-demo-appwrite
 Appwrite Demo App with jquery

## Installation
to start this repo, you need to at least have appwrite installed, to run appwrite you can follow this [link](https://appwrite.io/docs/installation)

After having appwrite installed, go to [http://localhost:8080/](http://localhost:8080/)
note: port based on number you entered when you first installed appwrite.

Create .env files and add these to your .env file:
```
API_ENDPOINT=[YOUR_API_ENDPOINT]
PROJECT_ID=[YOUR_PROJECT_ID]
DB_COLLECTION_ID=[YOUR_DATABASE_COLLECTION_ID]
DB_ID=[YOUR_DATABASE_ID]
```

After having these all run this code
```
npm install 
npm run dev
```

To add new task, make sure that this settings are enabled in your collection:
![image](https://user-images.githubusercontent.com/38250310/196172621-bd0f23f0-d8e8-48f7-aa91-a03ef4fb0979.png)