let express = require('express')
let bodyParser = require('body-parser')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Static directory
app.use(express.static('app/public'))

// Routes
require('./app/routes/api-routes.js')(app)
require('./app/routes/html-routes.js')(app)

app.listen(port, () => {
    console.log('App listening on PORT ' + port)
})