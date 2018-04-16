const app = require('express')();

console.log('argv', process);

app.get('/', (res, req, next) => {
    console.log("Hello World");
    req.send('Hello World');
});

app.listen(3000, () => {
    console.log("listening to port 3000")
});