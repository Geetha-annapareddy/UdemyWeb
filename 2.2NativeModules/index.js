const fs=require("fs");
fs.writeFile("message.txt","Hello Geetha",(err) => {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
  })

fs.readFile("./message.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
})