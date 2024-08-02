const express = require('express');
const cors = require('cors');

const router = require('./routes/compound.route')
const app = express();

const db = require('./models/index')

app.use(express.json())

// middleware
app.use(cors());

// base url
app.use('/timestream', router);

//Database Connection
const dbConnect = () => {
    try {
        db.sequelize.sync().then(
            console.log("Connected to SQL Database")
        )
    }
    catch (err) {
        console.log(`Error connecting to SQL database. Error: `, err)
    }
}

// server listening for API calls on port 4000
app.listen(4000, () => {
    dbConnect();
    console.log("Connected to Server")
});