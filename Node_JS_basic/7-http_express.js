const express = require('express');
const fs = require('fs');

const database = process.argv[2];

function getStudentsData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      let output = `Number of students: ${students.length}\n`;

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  getStudentsData(database)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
