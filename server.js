var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bp       = require('body-parser'),
    app      = express();


app.use(express.static( path.join( root, 'client' )));
app.use(express.static( path.join( root, 'bower_components' )));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json())

app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( 'server running on port ${ port }' );
});