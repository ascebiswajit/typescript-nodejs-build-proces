import express from 'express'
import path from 'path'

const app = express()
const port = 3000

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'images')))

// Example route to render an image
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Here is your image:</h1>
        <img src="/richdad.jpg" alt="Example Image" />
      </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
