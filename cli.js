import { Command } from "commander";
import {Task} from "./Tasktide/task.js";

import * as fs from "node:fs"
import * as os from "node:os"
import path  from "node:path"
import boxen from "boxen";



const program=new Command()



program.command("add <task>")

       .description("add's the given task")
    
       .action((task)=>{

        let t=new Task(task)
        t.printTask()
        
        
       })
program.command("init")
       .description("intializes json in hoome/user/Tasktide.config")
       .action(()=>{
         
      
       const homeDir=os.homedir()
       
       const path_=path.join(`${homeDir}`,"tasktide")
       const filePath=path.join(`${path_}`,"tasktide.json")
       console.log(path_)
       console.log(filePath)
       if(fs.existsSync(`${path_}`)){
              
              return 
              
              
       }else{
              
              fs.mkdir(path_,(err)=>{
                     console.log("somer error occured while trying to create config directory",err)
              })
              fs.writeFile(filePath,"",(err)=>{
                     
                     console.log("some error occurred while creating tasktide.json",err)
              })
              
              
       }

})

program.command("clean")
       .description("removes all the config files")
       .action(()=>{
              
              const ConfigPath=path.join(`${os.homedir()}`,"tasktide")
              if (!fs.existsSync(ConfigPath)){
                     console.log(boxen("no config files found",{backgroundColor:"green",borderStyle:"double"}))
                     return
              }else{

                     fs.rm(ConfigPath,{recursive:true},(err)=>{

                            console.log("failed to remove config files",err)
                     })
                     console.log(boxen("removed config files",{backgroundColor:"cyan",borderStyle:"arrow"}))
              }
              
              
       })
     


program.parse(process.argv)




