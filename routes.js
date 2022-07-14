const routesHandler =(req,res)=>{
const url = req.url;
const method = req.method
// console.log(url)
if(url ==="/"){
    res.write('<html>')
    res.write('<head><title></title></head>')
    res.write('<body>')
    res.write('<h1>Hello Welcome to node js.</h1>')
    res.write('<form method="POST" action="/create-user" >')
    res.write('<label>User name:</label>')
    res.write('<input type="text" name="username"  />')
    res.write('<button type="submit">Submit</button>')

    res.write('</form>')
    res.write('</body>')
    res.write('<html>')
   return res.end()
}
if(url ==='/users'){
    
    res.write('<html><head><title></title></head><body><h1>user1</h1></body></html>')
   return res.end() 
}
if(url ==='/create-user'&& method ==="POST"){
    const body=[]
    req.on('data',(chunk)=>{
        // console.log(chunk)
        body.push(chunk )
    })
    req.on('end',()=>{
const result = Buffer.concat(body).toString()
// result.split("=")
console.log(result)
    })
    res.statusCode = 302
    res.setHeader('Location','/users')
   return res.end() 
}
res.end()

}

module.exports=routesHandler