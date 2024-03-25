

import { Command } from "commander";
import {Task} from "../Task/task.js";

import { existsSync } from "node:fs";
import * as fs from "node:fs/promises"
import * as os from "node:os"
import path  from "node:path"
import boxen from "boxen"
import * as fss from "node:fs"




const program=new Command()
const colors =["cyan","green","red","yellow","magenta"]

//add command



program.command("add <task>")

       .description("add's the given task")
    
       .action( async (task)=>{
              
              const t=new Task(task)
              let t1=t.getTask()
              
              const intitialJson={

                     "taskCount":0,
                     "task":t1
                     
                     
              }
              const pathDir=path.join(os.homedir(),"td")
              const pathConfigJSon=path.join(pathDir,"tasks.json")
              
              

              if (!existsSync(pathDir)){

                     try{
                            await fs.mkdir(pathDir)
                            await fs.writeFile(pathConfigJSon,JSON.stringify(intitialJson))
                     }catch(err){

                            console.log("some error occured while trying to create config file ",err)
                     }
              }
              
             
              
              
              
          
             
              
              
              


        
        
        
       })


program.command("clean")
       .description("removes  the config files")
       .action(()=>{
              
              
              const ConfigPath=path.join(`${os.homedir()}`,"td")
              if (!existsSync(ConfigPath)){
                     console.log(boxen("no config files found",{backgroundColor:"green",borderStyle:"double"}))
                     return
              }

                     fss.rm(ConfigPath,{recursive:true},(err)=>{

                            if (err){
                                   console.log()
                            }
                            console.log(boxen("removed config files",{backgroundColor:"cyan",borderStyle:"arrow"}))
                            
                     })
                     
              
              
       })



program.command("d <task>")
       .description("mark's the task as done")
       
       .action(()=>{

              

              const ConfigPath=path.join("td","tasks.json")
              let JsonData=null
              
              fss.readFile(ConfigPath,(err,data)=>{

                     if (err)
                     console.log(boxen("failed to read tasks.json",{backgroundColor:"red"}))
              })

              
              
              
              
              

              
        
              
              
       })


program.command("v")
       .description("shows the Cli version installed on your system")
       .action(()=>{
           
          
              fss.readFile("./package.json",(err,data)=>{
                     
                     if (err){
                      
                            console.log(boxen("couldn't open package.json",{backgroundColor:"red"}))  
                          
                     }else{

                            const jsonData=JSON.parse(data.toString())
                            console.log(boxen(`cli-version:${jsonData.version}`))
                            
                     }
                     
                     
                     
              })
         
              
       })     




program.command("show")
       .description("shows all the task's")
       .action(()=>{

              const ConfigPath=path.join("td","tasks.json")
              let tasksJsoN=null
              fss.readFile(ConfigPath,(err,data)=>{

                     if(err){
                            
                            console.log(boxen("task.json not found",{backgroundColor:"red"}),err)
                            return
                     }
                     

                     tasksJsoN=JSON.parse(data)
                     
              
              })
              
              // prints all the tasks in tasks.json
              for(let i in tasksJsoN ){

                     
                     console.log(boxen(`${i["task"]} `,{backgroundColor:colors[parseInt(Math.random()*colors.length)]}))
                     
                     
              }
              

              
              
              

              
       })


       

program.parse(process.argv)







              
    

