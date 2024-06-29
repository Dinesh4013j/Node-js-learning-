const fs=require('fs')

if (fs.existsSync('./hello')){
    fs.mkdir('./hello',(err)=>{
        if (err) throw err;
        console.log("directory created")
    })
}










// if (fs.existsSync('./new')){
//     fs.rmdir('./new',(err)=>{
//         if(err) throw err
//         console.log("directory created")
//     })

// }

process.on('uncaughtException',err=>{
    console.log(`there was an error:${err}`)
    process.exit(1)
})