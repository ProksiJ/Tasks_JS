class Universe{
    constructor(){
        if(Universe.__instance){
            return Universe.__instance
        }
        Universe.__instance = this
        this.size = 300
    }
    getSize(){
        return this.size
    }

    setSize(size){
        this.size = size
    }
}

let a = new Universe();
let b = new Universe();

console.log(a === b);
console.log(a.getSize(), b.getSize()); //300, 300
a.setSize(200);
console.log(a.getSize(), b.getSize());
