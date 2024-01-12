
// Import express and ejs

var express = require ('express')
var ejs = require('ejs')
var shopData = {shopName: "Monster & Redbull",
		shopLocation: ["London", "Ilford", "Grayes", "Luton"],
		productCategories:["Monster", "Redbull", "Hot Drinks", "Tea", "Coffee"]}
var bodyParser= require ('body-parser')
// Create the express application object
const app = express()
const port = 8000
app.use(bodyParser.urlencoded({ extended: true }))

// Set the directory where Express will pick up HTML files
// __dirname will get the current directory
app.set('views', __dirname + '/views');

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);

// Handle our routes
app.get('/',function(req,res){
    res.render('index.html', shopData)
 });
 app.get('/about',function(req,res){
    res.render('about.html', shopData);
});
app.get('/search',function(req,res){
     res.render("search.html", shopData);
});
app.get('/register',function(req,res){
	res.render("register.html",shopData);
});
app.get('/search-result', function (req, res) {
         // TODO:search in the database
        // res.send(req.query);
	res.send("You searched for: " + req.query.keyword);
      });
app.get('/register', function (req,res) {
	res.render('register.html');
});
app.post('/registered', function (req,res) {
	// saving data in database
	//res.send(req.body)
	res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!'+ ' '+
	'We will send you an email to you at '+ req.body.email);
});
// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
