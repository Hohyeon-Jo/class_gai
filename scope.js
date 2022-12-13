console.log("start");

class Human{
    constructor(param1){
        this.type = param1;
    }

    static isHuman(param1) {
        let tempVar = param1 instanceof Human;
        return tempVar;
    }

    breath() {
        alert(h-a-a-a-m);
    }
}

class Zero extends Human {
    constructor(param1, param2, param3){
        super(param1);
        this.firstname = param2;
        this.lastname = param3;
    }
}

const newZero = new Zero ('human', 'Zero', 'Cho');
Human.isHuman(newZero);

function wrapper() {
    let varLet5 = 1;
    const varConst5 = 2;
    var varVar5 = 3;
    varNone5 = 4;
    function inner() {
        let varLet6 = 1;
        const varConst6 = 2;
        var varVar6 = 3;
        varNone6 = 4;
    }
}




{
    
    let varLet = 1;
    var varVar = 2;
    {
            console.log(1);
            let varLet2 = 1;
            var varVar2 = 2;
        }
}

console.log("bk");
function func() {
    let varLet1 = 1;
    var varVar1 = 2;
}

func();


console.log("let:", varLet); 
console.log("var:", varVar);

console.log("let:", varLet1); 
console.log("var:", varVar1);

console.log("123")