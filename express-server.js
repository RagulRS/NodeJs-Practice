import express from 'express';

const server = express();
let students = [{
    id: "1",
    name:'Rahul',
    age:20,
    gender:'Male'
}]
server.get('/students', (req, res) => {
    res.send({students});
});


const port =3000;
server.listen(port, ()=>{
    console.log(Date().toString(),": server listineng on", port);
});