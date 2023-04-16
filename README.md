# application-challenge
 Application made for Shaw and Partners testing code.
 
The application is divided into two folders: client and server. For application routing, the ''react-router-dom'' library was used. The application is based on the SPA concept.

The ''client'' folder should receive the command "npm start react-app'' and the ''server'' folder, ''npm start''. Both should run simultaneously.

The server will process the requests, receive the data from the API and the React application will assemble and display them correctly.

3 routes were created:

**(...)/api/users**

Lists Github users with their account information.

**(...)/api/users/username/details**

''username'' must be a valid Github user. Example: 'diego-shawandpartners' or 'lucaskraus'. The React application will assemble a card with the information coming from the API.


**(...)/api/users/username/repos**

This route also requires ''username'' to be a valid user. Will display all repositories of the given user.
