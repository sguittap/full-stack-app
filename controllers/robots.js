const express = require('express');
const router  = express.Router();
const Robots = require('../models/robots');
const robotList = require('../models/robotList');


//routes//
router.get('/', (req, res)=>{
    Robots.find({}, (err, Robots) => {
        if(err){
          console.log(err);
        } else {
          res.render('index.ejs', {robots: Robots});
        }
    })
})

//new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    Robots.create(req.body, (err, createdRobot) => {
      if(err){
        console.log(err)
      } else {
        console.log(createdRobot);
        res.redirect('/robots')
      }
    })
});
//edit
router.get('/:id/edit', (req, res) => {
    Robots.findById(req.params.id, (err, foundRobots)=>{
      res.render('edit.ejs', {
        robots: foundRobots,
        });
    })
});

//show
router.get('/:id', (req, res) => {
    Robots.findById(req.params.id, (err, foundRobots)=>{
      res.render('show.ejs', {
          robots:foundRobots,
          id:req.params.id
      })
    })
});
//delete
router.delete('/:id', (req, res) => {
    console.log(req.params.id, ' id in delete route');
    Robots.findByIdAndDelete(req.params.id, (err, deleteRobot)=>{
      res.redirect('/robots')
      })
});

router.put('/:id', (req, res) => {
    console.log(req.body)
    Robots.findByIdAndUpdate(req.params.id, req.body, (err, updatedRobots)=>{
      res.redirect('/robots');
    })
})

module.exports = router;