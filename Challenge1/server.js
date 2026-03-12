const h = require('express');
const app= h();

const PORT = 3000;

app.get('/',(req,res) => {
    res.sendFiles(__dirname + '/views/index.html');
})

app.get('admin',(req,res)=> {
    res.sendFiles(__dirname + '/views/admin.html');
})

app.listen(8000, () => {
    console.log('Server running at https://localhost:8000');
})