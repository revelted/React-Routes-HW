# PT12 Final Projects Backend

A simple open backend that ptovides basic CRUD actions for the following models:

- [Menu](#menu)

## Instructions

- ### Add a proxy to your React project
In the `package.json` file of your project, add a `proxy` pointing to: https://pt12-final-backend.herokuapp.com/
like this:

```json
  "private": true, // existing code in your package.json
  "proxy": "https://pt12-final-backend.herokuapp.com/",  // Add THIS line
  "dependencies": { ... } // existing code in your package.json
```

Once the proxy is set, you can make requests directly to the desired endpoint. For example:

- GET
  ```javascript
  // the 1 indicates the id of one specific record
  fetch('/menus/1') 
    .then(res => res.json())
    .then(res => console.log(res))
  ```
  ```javascript
  fetch('/menus') // lists all the records
    .then(res => res.json())
    .then(res => console.log(res))
  ```
- POST
  ```javascript
  let data = {menu:{data:{ string: 'hello', number:123, array: [1,2,3], object: {a: 'A', b: 'B'}}}} 
  // creates a record sending the necessary data
  fetch('/menus', {  
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  }).then(r=>r.json()).then(res => console.log(res))
  ```
  - DELETE
  ```javascript
  // the 1 indicates the id of one specific record to be deleted
  fetch('/menus/1', {  
      method: 'DELETE'
  }).then(r=>r.json()).then(res => console.log(res))
  ```
  - PUT/PATCH (update)
  ```javascript
  let data = {menu:{data:{ string: 'bye', number:321, array: [3,2,1], object: {a: 'AA', b: 'BB'}}}} 
  // updates a specific record with id of 1 by sending the necessary data
  fetch('/menus/1', {  
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  }).then(r=>r.json()).then(res => console.log(res))
  ```
  
  
  ## Endpoints
   ### Menu
   ```bash
   /menus      => GET, POST (list all Menus, create a menu)
   /menus/:id  => GET, PATCH, PUT, DELETE (get one Menu by id, update menu by id, delete Menu by id)
   
