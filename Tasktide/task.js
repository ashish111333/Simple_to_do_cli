import * as fs from "node:fs"








export  class Task{
    
  
    
    #hasMicrotasks=false
    #task=null
    #allocTime=null
    #taskId=null
    constructor(TaskString){
        
        
        this.#task=TaskString
        
              
        
    }

    toString(){
        return  this.#task
    }
    
    printTask(){
        
        console.log(this.getTask())
    }
    addTask(){

                
        
        
    }


    getTask(){
    
    
        return {
            Task:this.#task,
            TaskId:this.#taskId,
            
            
        }
    }
    
    
    
    


}



