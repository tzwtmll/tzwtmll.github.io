const express = require('express')
const path = require('path')
const app = express()

const PUBLIC_PATH = path.join(__dirname, 'out')

app.use(express.static(PUBLIC_PATH))

app.get('*', (_, res) => {
  res.sendFile(path.join(PUBLIC_PATH, 'index.html'))
})

app.listen(8080, () => {
  console.log(`预览环境已经启动请访问============>  :http://localhost:8080`)
})
