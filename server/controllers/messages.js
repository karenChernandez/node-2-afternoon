let messages= [];

let id =0;

module.exports={
create:(req,res)=>{
    const{text, time} = req.body;
    console.log('req.body', req.body)
    messages.push({id,text, time})
        id++;
        res.status(200).send(messages);
},
read:(req, res)=>{
    res.status(200).send(messages);
},
update:(req, res) =>{
    const {text, time} = req.body
    
    const {id}= req.params
    const index = messages.findIndex(message => message.id === +id)
        if(index === -1){
            res.sendStatus(404)
        }else{
            messages[index].text=text
            messages[index].time= time
            res.send(messages)
        }
        
    
    console.log('what is id and body', id ,text)
    
},
deleteMessage:(req, res)=>{
    const {id} = req.params

    const index = messages.findIndex(message=>message.id === +id)
    if( index !== -1){
        messages.splice(index,1)
        res.send(messages)
    }
}


}