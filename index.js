const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

/*app.use((req,res) =>{
    //console.log(req);
    console.log("request  recevied");
    //res.send("Basic response");
    let code="<h1> Fruits</h1><ul><li>apple</li><li>orange</li><li>cherry</li></ul>";
    res.send(code);
});  */

/* routing 

app.get("/apple",(req,res) =>{    // ex:/help or /search
    res.send("you contacted apple path");
});

app.get("/orange",(req,res) =>{
    res.send("you contacted orange  path");
});*/

app.get("/",(req,res) =>{
    res.send("hello ,1 am root");
});


/* example  of path parameter */
app.get("/:username/:id",(req,res) =>{
    //console.log(req.params);
    let {username,id} = req.params;
    //res.send("hello ,1 am root");
    res.send(`welcome to page of @${username}`);
});

app.get("/search",(req,res)=>{
   // console.log(req.query);
   let {q}=req.query;
    res.send(`search results for query :${q}`);
   // res.send("no result");
});
