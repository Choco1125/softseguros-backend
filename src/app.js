const expess = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = expess();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(expess.json());

const clientRoutes = require('./routes/client.routes');
app.use('/api/clients', clientRoutes);

app.listen(app.get('port'), () => {
  console.log(`
    ✅ Server running on port ${app.get('port')}
    👨🏽‍💻 Developed by Sebastian Osorio Cruz
  `);
});
