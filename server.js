const express = require('express') //express 라이브러리 사용
const app = express()

//nomdemon 설치 : npm install -g nodemon
//nodemon 실행 : npm start
//로그인 라이브러리 3 : npm install express-session passport passport-local

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
  secret: '20233144', //이거 털리면 망함
  resave : false,
  saveUninitialized : false
}))

app.use(passport.session()) 


app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/login', (요청, 응답) => {
    응답.send('hello')
})

