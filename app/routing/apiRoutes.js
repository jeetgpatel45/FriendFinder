
var friends = require("../data/friends.js");
console.table(friends);


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
       return res.json(friends);
    });
    

    app.post("/api/friends", function (req, res) {

        var response = req.body.scores;
        var matchName = '';
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var j = 0; j < response.length; j++) {
                difference += Math.abs(friends[i].scores[j] - response[j]);
            }

            if (difference < totalDifference) {
                console.log('closest match found = ' + difference);
                console.log('friend name = ' + friends[i].name);

                totalDifference = difference;
                matchName = friends[i].name;
            };
        };
    })
    
}