

export  class Task{

  
    
    #hasMicrotasks=false
    #task=null
    #allocTime=null
    constructor(TaskString){
        
        
        this.#task=TaskString
        
              
        
    }

    getTask(){
        return  this.#task
    }
    
    printTask(){
        
        console.log(this.getTask())
    }
    
    
    


}