const express = require("express");
const { Pool } = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: "sqa",
    password: "success",
    port: "6969",
})

app.get("/hello", (req, res) => {
    res.send("Hello their !");
});

app.get("/all_data", (req, res) => {
    pool.query('select * from users', (err, result) => {
        if (err) {
            console.error("Error executing Query", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.json(result.rows)
        }
    })
});

app.listen(port, () => console.log('Server app is up and running in port 3000'))

