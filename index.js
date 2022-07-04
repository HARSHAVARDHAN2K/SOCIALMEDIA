const { Console } = require('console');
const express = require('express');
const app = express();

const port = 8000;

app.get('/',(req, res)=>{
    res.send("<h1>hi</h1>");
})


app.listen(port, (err)=>{
    if(err){
        //interpolation
      console.log(`Error : ${err}`);
    }

    console.log(`Server is running on port :${port}`);
});