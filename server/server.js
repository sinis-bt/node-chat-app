const path = require('path');
const expres = require('express');

const publicPath = path.join(__dirname, '../public');


const port = process.env.PORT || 3000;
var app = expres();

app.use(expres.static(publicPath));

// app.get('/', (req, res) => {
//     res.render( 'index.html' );
//  });


app.listen(port, () => {
    console.log( `Server is up on port ${port}` );
});