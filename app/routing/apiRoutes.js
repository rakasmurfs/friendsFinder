// LOAD DATA
var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
 
  app.post("/api/friends", function(req, res) {
    var userScore = 



      friendsData.push(req.body);
// Wasnt really sure how to do the selection here, but figured I just upload my code for the time being
      res.json(friendsData);


  });
};
