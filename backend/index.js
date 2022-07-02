const express = require('express');
const dotenv = require ("dotenv");
const mongoose = require('mongoose')
const events = require("./data/events.js");
const userRoutes = require("./routes/userRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const path = require("path")

const { contentType } = require('express/lib/response');
const { notFound, errorHandler } = require('./middlewares/errormiddlewares.js');
const res = require('express/lib/response');
const app = express();
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=> console.log("MongoDB Connection Succesful")).catch((err)=>{console.log(err);
    }, );

app.listen(PORT,console.log('Server started on port 5000'));


app.get('/events/:eventID', (req, res) => {
    let event = events.find(e => e._id === req.params.eventID);
    if (!event) res.status(404).send('The event was not found');
    res.json(event);

})

app.get('/api/events',(req,res)=>{
    res.json(events);
});

app.use('/api/users', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/orders', orderRoutes);


__dirname = path.resolve()
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build' , 'index.html'))
    })




app.use(notFound)
app.use(errorHandler)

