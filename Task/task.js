


export  class Task{
    
  
    
    #hasMicrotasks=false
    #task=null
    #allocTime=null
    
    constructor(TaskString){
        
        
        this.#task=TaskString
       
        
              
        
    }

    toString(){
        return  this.#task
    }
    
    printTask(){
        
        console.log(this.getTask())
    }
   


    getTask(){
    
    
        return {
            Task:this.#task,
            
            
            
        }
    }
    
    
    
    


}



