const fs = require('fs')
const users = require('../users.json')
function getAllUser(req,res) { 
    res.json(users)
}

function getParticularUser(req,res){
    let id = parseInt(req.params.id)
    let user = users.find(user=>user.id==id)
    res.json(user)
}
function addUser(req,res){
    console.log(req.body);
    req.body.id = user.length+1
    user.push(req.body)
    fs.writefile('user.json',JSON.stringify(users),(err)=>{
        if(err){
        console.log("error....");
        } else {
            res.end('add successfully...')
        }
    })
    res.end('add in program')
}
module.exports = {
    getAllUser,
    getParticularUser,
    addUser
}