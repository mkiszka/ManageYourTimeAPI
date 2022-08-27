
module.exports = (req, res, next) => {
  
    res.header('X-Hello', 'World');
    res.alaMaKota = 'jojo';
    // res.jsonp({
    //     id: "a23e1b13-cf69-461c-aa8a-a0eb99e41350",
    //   //  name: req.body['name'],
    //     revision: "1"
    // });
    
    next()
  }