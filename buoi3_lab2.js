var caculator = require('./caculator');
const express = require('express')
const app = express()
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
}));
app.get('/', (req, res) => {
    res.render('home', { layout: 'main' });
});
app.set('view engine', '.hbs');
app.set('views', './views');
app.post('/tinhtoan', function (req, res) {
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var dau = req.body.dau;
    var kq = caculator.AddANumber(a, b, dau);
    res.render('home', { layout: 'main', kq: kq, num1: a, num2: b, dau: dau });
})

app.listen(8080, function () { });