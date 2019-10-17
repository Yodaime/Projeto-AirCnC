const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');



const app = express();
 
mongoose.connect('mongodb+srv://OmniStack:omnistack@omnistack-qtqtm.mongodb.net/semana9?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição(para criação, edição)

app.use(express.json());

app.use(routes);

app.post('/users', (req, res) => {
  return res.json(req.body)
});

app.listen(8000);
