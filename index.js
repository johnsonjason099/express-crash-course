const express = require('express-handlebars');
const path = require('path');
const exphbs = require(expres)
const logger = require('./middleware/logger');
const members = require('/Members');
const app = express();

//Init meddleware
//app.use(logger);

//Handlebars Middlewre
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Meddleware
app.use(express.json());
app.use(express.urlencoded({etended: false}));

//Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members,
})
);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//MEMBERS api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

