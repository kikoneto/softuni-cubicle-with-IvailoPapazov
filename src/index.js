const express = require('express');
const handlebars = require('express-handlebars');

const port = 5000;

const app = express();

app.use('/static', express.static('../public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => console.log(`App is listening on port ${port}...`));