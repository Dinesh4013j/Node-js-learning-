const fsPromises=require('fs').promises;
const path=require('path')

const fileOps=async()=>{
  console.log("jd")
  try{
    const data=await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
    console.log(data)
    console.log("ak")
    await fsPromises.writeFile(path.join(__dirname,'files','hello.txt'),"hello guys")
    await fsPromises.appendFile(path.join(__dirname,'files','start.txt'
  ),"adlklad")
  await fsPromises.rename(path.join(__dirname,'files','start.txt'),path.join(__dirname,'files','starting.txt'))
  }
  catch(err){
    console.error(err)
  }

}
fileOps()


// fs.rename(path.join(__dirname,'files','start.txt'),path.join(__dirname,'files','starting.txt'),(err)=>{
//   if (err) throw err;
//   console.log("renamed")
// }

// )
// console.log("klskl");
process.on('uncaughtException',err=>{
    console.log(`there was an error:${err}`)
    process.exit(1)
})