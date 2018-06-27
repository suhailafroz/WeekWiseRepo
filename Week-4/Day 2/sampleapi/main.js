const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const stu_list = [
    { "id": 1, "name": "suhail", "age": 30, "dept": "CSE" },
    { "id": 2, "name": "afroz", "age": 28, "dept": "IT" },
    { "id": 3, "name": "suha", "age": 12, "dept": "CSE" },
    { "id": 4, "name": "zohaib", "age": 05, "dept": "ECE" }
];

app.get('/api/studentInfo', (req, res) => {
    res.json(stu_list);
});

app.post('/api/studentInfo', (req, res) => {
    console.log(req);
    const newStudent = {
        name: req.body.name,
        age: req.body.age,
        dept: req.body.dept,
        id: stu_list.length + 1
    };

    stu_list.push(newStudent);
    //res.status('201');
    res.json(newStudent.id);
});

app.listen(5000);