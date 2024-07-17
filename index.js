const express=require("express");
const app=express();
console.log(app);

let port =3000;
app.listen(port,()=>{
    console.log(`app listening: ${port}`);
})
// app.use((req,res)=>{
//     console.log("new in coming request");
app.get("/",(req,res)=>{
  res.send("hello i am not")
})
app.get("/orange",(req,res)=>{
  res.send("you contact the orange path")
})
app.get("/apple",(req,res)=>{
  res.send("you contact the apple path")
})
app.get("/grapes",(req,res)=>{
  res.send("you contact the grapes path")
})
// ---------------------------
// app.get("/:username/:id",(req,res)=>{
//   console.log(req.params);
//   res.send("hello ,i am shivam");
// })
// ---------------------------
app.get("/:username/:id",(req,res)=>{
  console.log(req.params);
  let data = req.params;
  let htmlstr=`<h1>welcome to ${data}!</h1>`;
  res.send(htmlstr);
})

// query

// app.get("/search",(req,res)=>{
//   console.log(req.query);
//   res.send("success");
// })
app.get("/search",(req,res)=>{
  let {q}=req.query;
  res.send(`no result${q}`);
})

    // M-1
    // res.send({
    //     name:"apple",
    //     color:"red",
    //  } )

    // M-2
  // let code= "<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>";
  // res.send(code);
// })