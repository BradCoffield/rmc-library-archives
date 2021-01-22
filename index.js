const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/personal-collection', db.getPersonalCollection)
app.get('/personal-collection/:id', db.getPersonalCollectionById)
app.post('/personal-collection', db.createPersonalCollection)
app.put('/personal-collection/:id', db.updatePersonalCollection)
app.delete('/personal-collection/:id', db.deletePersonalCollection)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})











// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const {pool} = require('./config')

// const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors())

// const getBooks = (request, response) => {
//   pool.query('SELECT * FROM books', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const addBook = (request, response) => {
//   const {author, title} = request.body

//   pool.query(
//     'INSERT INTO books (author, title) VALUES ($1, $2)',
//     [author, title],
//     (error) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).json({status: 'success', message: 'Book added.'})
//     },
//   )
// }

// app
//   .route('/books')
//   // GET endpoint
//   .get(getBooks)
//   // POST endpoint
//   .post(addBook)

// // Start server
// app.listen(process.env.PORT || 3002, () => {
//   console.log(`Server listening`)
// })