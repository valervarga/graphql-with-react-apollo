const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
