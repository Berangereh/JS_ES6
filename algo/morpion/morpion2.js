const array = [4,2,9,5,1,8,9];


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }
    
    const insert = (value) => {
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          let current = this.root;
          while(current){
              if(value === current.value) return undefined;
              if(value < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } 
                  current = current.right;
              }
          }
          console.log(insert(array));

      }

  
  }


