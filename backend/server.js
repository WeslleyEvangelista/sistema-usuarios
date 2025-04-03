const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));