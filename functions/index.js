const functions = require('firebase-functions');
const admin = require('firebase-admin');

//Initialize the app
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin
           .firestore()
           .collection('notifications')
           .add(notification)
           .then(document => {
               console.log("Notification added: ", document);
           });
});

//Listen for a project creation event on firestore database
exports.projectCreated = functions
    .firestore
    .document('projects/{projectId}')
    .onCreate(document => {
        const project = document.data();
        const notification = {
            content: 'Added a new project',
            user: `${
                        project.authorFirstName 
                        + " " +
                        project.authorLastName
                    }`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };
        //Return statement to end the function execution
        return createNotification(notification);
    });

//Listen for a new user sign up event 
//using the auth service of firebase
exports.userJoined = functions
    .auth
    .user()
    .onCreate(user => {
        return admin
            .firestore() //DO NOT forget parenthesis here
            .collection('users')
            .doc(user.uid)
            .get()
            .then(document => {
               const newUser = document.data();
               const notification = {
                   content: 'New user signup',
                   user: `${
                       newUser.firstName
                       + " " +
                       newUser.lastName
                   }`,
                   time: admin.firestore.FieldValue.serverTimestamp(),
               };
               return createNotification(notification);
            });
    });