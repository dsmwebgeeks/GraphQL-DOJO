const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools')
const port = 3000
const app = express()

const typeDefs = `
  type Query {
    greeting: String
  }
`
const resolvers = {
  Query: {
    greeting: () => 'Hello World!'
  }
}

const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors(), bodyParser.json())
app.use('/graphql', graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
app.listen(port, () => console.log(`Server running on port ${port}`))
