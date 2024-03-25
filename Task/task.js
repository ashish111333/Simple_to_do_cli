


export  class Task{
    
  
    
  
    #task=null
    
    #isFinished=null
    
    constructor(TaskString){
        
        
        this.#task=TaskString
        this.#isFinished=false
       
        
              
        
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
            finished:this.#isFinished,
            


            
            
        }
    }
    
    
    
    


}



