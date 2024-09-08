const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.use('/api/tennisdreamer/joueurs', require('./routes/playerRoutes'));
app.use('/api/tennisdreamer/reservations', require('./routes/reservationRoutes'));
app.use('/api/tennisdreamer/competitions', require('./routes/competitionRoutes'));
app.use('/api/tennisdreamer/statistiques', require('./routes/statisticRoutes'));
app.use('/api/tennisdreamer/boutique', require('./routes/shopRoutes'));

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API TennisDreamer');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
