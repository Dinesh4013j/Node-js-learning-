const fsPromises=require('fs').promises;
const path=require('path')

const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile(path.join(__dirname,'files','hello.txt'),'utf8')
        console.log(data)
        

        await fsPromises.writeFile(path.join(__dirname,'files',"jd.txt"),"fsdsds")
        
    }catch(err){
        console.error(err);
    }
}
fileOps();

// fsPromises.writeFile(path.join(__dirname,'files','jd.txt'),"hi dinesh",(err)=>{
//     if (err) throw err;
//     console.log("write complete ");
//     fsPromises.appendFile(path.join(__dirname,'files','jd.txt'),"\n \n hello world",(err)=>{
//         if (err) throw err;
//         console.log("append complete")
//     })
    
// })

// process.on("uncaughtException",(err)=>{
//     console.log(`thre was an error ${err}`);
// })
