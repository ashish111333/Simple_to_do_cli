import { Command } from "commander";
import {Task} from "./Tasktide/task.js";


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
         
      
              
              
       })





program.parse(process.argv)

       

