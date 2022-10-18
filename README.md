# jquery-demo-appwrite
 Appwrite Demo App with jquery

## Installation
to start this repo, you need to at least have appwrite installed, to run appwrite you can follow this [link](https://appwrite.io/docs/installation)

After having appwrite installed, go to [http://localhost:8080/](http://localhost:8080/)
note: port and domain based on what you entered when you first installed appwrite.

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

## Database
After having appwrite installed and run the appwrite locally, create a new Database and add new collection.

<img width="379" alt="image" src="https://user-images.githubusercontent.com/38250310/196317135-e5034769-b9cd-4aa9-9a25-9290b96802a4.png">

After database and collection successfully created, add an [attribute](https://appwrite.io/docs/databases) to save the entity of your data.
![image](https://user-images.githubusercontent.com/38250310/196317416-e7076416-a9a9-4a05-b94a-e5fb9dab2014.png)

Here I am adding String attribute called `task_list` with max length of `9999`.
![image](https://user-images.githubusercontent.com/38250310/196318024-3b45f708-e998-4a9a-b3dd-48dd85c75d33.png)

After successfully adding an attribute, you will see this screen.
<img width="496" alt="image" src="https://user-images.githubusercontent.com/38250310/196318702-540e9524-893d-4599-86f7-2b3bc748a1d9.png">

To be able to add new task, please make sure that this settings are enabled in your collection:
![image](https://user-images.githubusercontent.com/38250310/196318592-35a0ef88-1e44-4827-8510-aa94effc2772.png)

## Database Attribute
this attribute will be used when you're [creating](https://appwrite.io/docs/client/databases?sdk=web-default#databasesCreateDocument) a new data.
```
$("#btnAdd").on('click', (e) => {
    // generateApp.js line 248
    const promise = this.databases.createDocument(
        process.env.DB_ID,
        process.env.DB_COLLECTION_ID,
        ID.unique(),
        {
            [your_attribute_id]: [your_data]
        }
    )

    promise.then((response) => {
        console.log(response) // Success
    }, function (error) {
        console.log(error) // Failure
    })
})
```

You can also found this on my [dev.to](https://dev.to/leonyangela/build-your-app-with-appwrite-jquery-55ij) post.