import { Command } from "commander";
import {Task} from "./Tasktide/task.js";

import * as fs from "node:fs"
import * as os from "node:os"
import path  from "node:path";

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
         
      
       let homeDir=os.homedir()
       
       let path_=path.join()
       
              
              
              
       })





program.parse(process.argv)

       

