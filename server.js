const jsonServer = require('json-server');

const server = jsonServer.create(); 
const router = jsonServer.router('db.json'); //the database 
const middlewares = jsonServer.defaults();

//overwrite the router render method.
// this should be done before passing the router to server
router.render = (req, res) => {
    res.jsonp({
      data: { ala: 1} //res.locals.data
    });

}

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running');
})