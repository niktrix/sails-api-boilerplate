# portal

a [Sails](http://sailsjs.org) application

Done
login
createuser

candidate
list candidate
create candidate
delete candidate


TODO
admin
upload file
Calander
Dashboard
Activities



payload to create candidate
```
{
"email":"nicky2@gmail.com",
"password":"password",
"data":{"name":"somename","email":"someemail@gmail.com"}
}
```

payload to list candidate by pagination

```
{
"email":"nicky2@gmail.com",
"password":"password",
"page":{"limit":2,"page":3}
}
```


payload to search candidate

```
{
"email":"nicky2@gmail.com",
"password":"password",
"where":{"createdBy.email":"nicky2@gmail.com"}
}
```
