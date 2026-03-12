const h = require('express');
const path = require('path');
const app= h();

const PORT = 8000;

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/admin',(req,res)=> {
    res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
})

app.listen(8000,'0.0.0.0', () => {
    console.log('Server running at http://localhost:8000');
})