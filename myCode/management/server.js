const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/customers', (req,res)=>{
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name' : 'ryan kim',
        'age' : '27',
        'gender' : 'man',
        'job' : 'software engineer'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name' : '깽나니우스',
        'age' : '51',
        'gender' : 'woman',
        'job' : '가위손'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name' : '로버트 깽나니우스 주니어',
        'age' : '25',
        'gender' : 'woman',
        'job' : '금융인'
      }
      ])
})


app.listen(port, ()=>console.log(`Listening on port ${port}`))