const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');
const pollingRouter = require('./routes/pollingRouter');
// const contentRangeHook = require('./hooks/contentRangeHook');

try {
  mongoose.connect('mongodb://localhost:27017/notes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => {
      console.log('connected mongo db')
  })
} catch (e) {
  console.error(e);
}

// app.addHook('preHandler', contentRangeHook);
pollingRouter(app);
app.get('/', (req, res) => {
    res.send('hallo')
})

app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});