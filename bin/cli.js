

import { Command } from "commander";
import {Task} from "../Tasktide/task.js";

import * as fs from "node:fs"
import * as os from "node:os"
import path  from "node:path"
import boxen from "boxen"



checkForConfig()


const program=new Command()

//add command



program.command("add <task>")

       .description("add's the given task")
    
       .action((task)=>{
              
          
              const t=new Task(task)
              let JsonData=null
              
              const ConfigJson=path.join(os.homedir(),"tasktide","tasks.json")
              fs.readFile(ConfigJson,(err,data)=>{
                     

                     if(err)
                     console.log(boxen("failed to read tasks.json",{backgroundColor:"red"}))
                     JsonData=JSON.parse(data)
                     JsonData.taskCount=JsonData.taskCount+1
                     JsonData[`task${JsonData[taskCount]}`]=t.getTask()
                     
                     
              })
              fs.writeFile(ConfigJson,JSON.stringify(JsonData),(err)=>{

                     if(err)
                     console.log(boxen("some error occured while trying yo write data to tasks.json",{backgroundColor:"red"}),err)
              })

              
              
              
       
              
              
              


        
        
        
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
           
          
              fs.readFile("./package.json",(err,data)=>{
                     
                     if (err){
                          console.log(boxen("couldn't open package.json",{backgroundColor:"red"}))  
                          
                     }else{

                            const jsonData=JSON.parse(data.toString())
                            console.log(boxen(`cli-version:${jsonData.version}`))
                            
                     }
                     
                     
                     
              })
         
              
       })     

program.parse(process.argv)






function checkForConfig(){

       

       const initialJson={

              taskCount:0,
              

              
       }
       const pathToConfigDirectory=path.join(os.homedir(),"tasktide")
       const pathToConfigFile=path.join(pathToConfigDirectory,"tasks.json")
       
       if (fs.existsSync(pathToConfigDirectory)){
             return 
              
       }else{
              fs.mkdir(pathToConfigDirectory,(err)=>{

                     if (err)
                     console.log(boxen("failed to create config dir",{backgroundColor:"red"}),err)
              })

            
       }
       
       fs.appendFile(pathToConfigFile,JSON.stringify(initialJson),(err)=>{
              
              if (err)
              console.log(boxen("error occurred while trying to create json config"),err)
       })
       
       
       
}


