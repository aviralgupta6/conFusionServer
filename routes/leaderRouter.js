const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter= express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}) 
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req,res,next) =>{
    res.end('Will add the leader: '+req.body.name+'with details: '+req.body.name);
})
.put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation not supported on /leader ');
})
.delete((req,res,next) => {
    res.end('Deleting all the leaders');
});
leaderRouter.route('/:leaderId/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}) 
.get((req,res,next) => {
    res.end('Will send details of the leader: '+ req.params.leaderId+ ' to you');
  })
.post((req,res,next) =>{
    res.end('Will add the leader:');
  })
 .put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation not supported on /leader ');
  })
.delete((req,res,next) => {
    res.end('Deleting the leaders at point n');
  });
  

module.exports = leaderRouter;