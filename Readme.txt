Steps to run the project:

1. install pakages -> npm install
2. Run the server -> npm start
3. Once the server start open the link on the browser -> http://localhost:4000/
4. Refer the Example Queries.txt and run on GQL Window on left panel.

Note: 
This server is only for example purpose.
userData.json file is used for CRUD operations.


#Example Queries

Get All Users
---------------
{	
  users{
    id
    first_name
  }
}
---------------

Get User By Id
---------------
{	
  userById(id:2){
    first_name
    age
  }
}
---------------

Create User
---------------
mutation{	
  createUser(first_name:"Sumer",last_name:"Saraf", gender:"M", age: 25){
    id,
	first_name
  }
}
---------------

Update User
---------------
mutation{	
  updateUser(id: 1, first_name:"Sumeer",last_name:"Saraf", gender:"M", age: 25){
    first_name
  }
}
---------------

Delete User
---------------
mutation{	
  deleteUser(id: 2){
    first_name
  }
}
---------------

