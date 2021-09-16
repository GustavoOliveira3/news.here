# NEWS.HERE
My first project with node.js.<br>
A api using node.js for news, for post and get news with midia (image).

### Make database tables
Run <code>dbInstall.js</code> on "src" folder after configure your credentials on <code>db.js</code><br>
The ORM on this project is Sequelize, the database chosed is mysql.

## Requests to api examples:
### GET /News
This is request for get news limited by param QTD (Integer)
```bash
$ curl http://localhost:8080/news/QTD
```

### POST /News
This is request for post new news, using JSON with informations about.
```js
{
  "title": String, 
  "body": String,
  "categoryid": Integer
}
```

### PUT /News/midia
This is request for attach midia (Image) on news.
```bash
$ curl http://localhost:8080/news/midia/idNews
```
```js
{
  "image": Image (png, jpeg, jpg)
}
```

### GET /Categories
This is request for get a category for param ID (integer).
```bash
$ curl http://localhost:8080/categories/ID
```

### POST /Categories
This is request for create new category, to be used after on post news.
```js
{
  "description": String
}
```


