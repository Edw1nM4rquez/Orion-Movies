# Orion Movies 

It is an interactive platform, where you can see the premieres of movies that you like the most.Within the platform, there is an administrative section where logged in users can access it.

Contains search filters, pagination, responsive design. With the representative color palette from https://www.oriongovernance.com/.

## Justification

In order to solve the exercise, the systems administration part was taken into account. Therefore, a private part of the system and a public part are proposed. 
Within the private part, we would generate the components (protected), following the security concepts. So that a user with authentication can make changes within the system. With it fulfilling the points of: creation, edition, elimination of a movie in the database.
All users can see the details of the movies, and the movies are listed in order of genre and alphabetical order.  

## Structure

- Division by components

Dividing the project based on components is another way that can be structured. In this case, we will put all the files related to a component together in a folder with the name of the component.

<img src="/src/assets/img-report/structure.png" style="width:100px; height:auto; text-aling:center" />

## Performance testing

<img src="/src/assets/img-report/test.png" style="width:500px; height:auto; text-aling:center" />

## Get started 🚀

Read the step-by-step instructions so you can run the following project locally.

### Pre requirements 📋

- Node JS y npm

  <a href="https://nodejs.org">Node JS</a>

- React

  <a href="https://es.react.dev/">React</a>

- Json Server

```
npm i json-server
```

```
npm install -g json-server
```

### Facility 🔧

```
git clone https://github.com/Edw1nM4rquez/Orion-Movies.git
```

Once the project has been downloaded to our local computer, we are going to end up in the root directory of the project and install the dependencies. 

```
npm install
```

if it does not work, apply 

```
npm install --legacy-peer-deps
```

or force the installation 

```
npm install --force
```

- Serving the application

  The application will be executed at the following address http://localhost:3001/.

```
npm start
```

- Run fake api

In the root directory we open a new terminal, and execute the following command. To run the server in this case (json-server)
  
```
json-server --watch src/assets/db.json
```

## Welcome to Orion Movies - Orion Movies

<img src="/src/assets/img-report/home.png" style="width:700px; height:auto; text-aling:center" />

## What it contains 📦
  
- Filters  

<img src="/src/assets/img-report/filters.png" style="width:400px; height:auto; text-aling:center" />

- Movie details 

<img src="/src/assets/img-report/detailmovie.png" style="width:700px; height:auto; text-aling:center" />

- Movies administration 
<img src="/src/assets/img-report/adminuser.png" style="width:700px; height:auto; text-aling:center" />
- Login

- Register

- If you wish you can register inside the application, otherwise use the default credentials registered for this example.📝

Nickname

```
admin
```

Password

```
admin
```
