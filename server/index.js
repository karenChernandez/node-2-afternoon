const express= require('express');
//I have destructured const messages 
const {create, read, update, deleteMessage}= require('./controllers/messages')

const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const port= 3001;

app.post('/api/messages', create)
app.get('/api/messages', read)
app.put('/api/messages/:id', update)
app.delete('/api/messages/:id', deleteMessage)


app.listen(port, ()=>console.log(`you can do it!! You are running port ${port}`))
