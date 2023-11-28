var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcwMDc0MjA4MywiZXhwIjoxNzAwNzQ1NjgzfQ.I-Z0jXJCUOo56-gdj6VCAcaXZX4QeUSbRJEX-iKgJu0"

var decoded = jwt.verify(token, 'zjP9h6ZI5LoSKCRj');

console.log(decoded)

// 