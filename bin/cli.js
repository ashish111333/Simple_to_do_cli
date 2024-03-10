

import { Command } from "commander";
import {Task} from "../Tasktide/task.js";

import * as fs from "node:fs"
import * as os from "node:os"
import path  from "node:path"
import boxen from "boxen"



const program=new Command()



program.command("add <task>")

       .description("add's the given task")
    
       .action((task)=>{

        let t=new Task(task)
        t.printTask()
        
        
       })
program.command("init")
       .description("intializes json in home/user/Tasktide.config")
       .action(()=>{
         
      
       const homeDir=os.homedir()
       
       const path_=path.join(`${homeDir}`,"tasktide")
       const filePath=path.join(`${path_}`,"tasks.json")
   
       if(fs.existsSync(`${path_}`)){
              
              return 
              
              
       }else{
              

              fs.mkdir(path_,(err)=>{
                     if (err)
                     console.log(boxen("somer error occured while trying to create config directory",{backgroundColor:"red"}),err)
              })
              fs.appendFile(filePath,"",(err)=>{
                     
                     if (err){

                            console.log(boxen("could't create tasks.json config file",{backgroundColor:"red"}),err)
                     }
              })
              
              
       }

})

program.command("clean")
       .description("removes  the config files")
       .action(()=>{
              
              const ConfigPath=path.join(`${os.homedir()}`,"tasktide")
              if (!fs.existsSync(ConfigPath)){
                     console.log(boxen("no config files found",{backgroundColor:"green",borderStyle:"double"}))
                     return
              }

                     fs.rm(ConfigPath,{recursive:true},(err)=>{

                            if (err){
                                   console.log()
                            }
                            console.log(boxen("removed config files",{backgroundColor:"cyan",borderStyle:"arrow"}))
                            
                     })
                     
              
              
       })

program.command("v")
       .description("shows the Cli version installed on your system")
       .action(()=>{
           
         
              
       })     

program.parse(process.argv)




