const fs = require('fs');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
    host: 'qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'n8z9qmtovfdgqsp6',
    password: 'yl9icj9a2y1y1e3u',
    database: 'e7y9urgbr98aql8n',
    connectTimeout: 20000,
});


const sqlScript = fs.readFileSync('seeds.sql', 'utf8');

const sqlStatements = sqlScript.split(';').filter((statement) => statement.trim() !== '');

db.connect();

sqlStatements.forEach((sqlStatement) => {
  db.query(sqlStatement, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Query executed successfully.');
    }
  });
});

db.end();