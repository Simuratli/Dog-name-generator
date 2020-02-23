const express = require('express');
const bodyParser = require('body-parser');
const dogNames = require('dog-names');

const app = express();
app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
var name = "See your dog's name";
app.get('/', function(req, res) {
    var femaleDog = dogNames.femaleRandom();
    var maleDog = dogNames.maleRandom()
    res.render("names", { name: name })

})

app.post('/', function(req, res) {

    if (req.body.male === 'male') {
        name = dogNames.maleRandom();
    } else if (req.body.female === 'female') {
        name = dogNames.femaleRandom();
    } else {
        name = 'We cant find this!';
    }
    res.redirect('/')
})


app.listen(3000, function() {
    console.log("working")
})