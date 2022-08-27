let maths=Math;
let checkforvaluetype=function(value1,value2,dataType,callbackfunction){
    if(typeof(value1)==dataType || typeof(value2)==dataType){
        return callbackfunction;
    }
}

let checkSinglevaluetype=function(value1,dataType,callbackfunction){
    if(typeof(value1)==dataType){
        return callbackfunction;
    }
    
}

let numpy={
     dot:(firstnum,secondnum)=>{
        checkforvaluetype(firstnum,secondnum,"string",()=>{
            return new Error("you are suppose to provide a number")
        });
       return firstnum*secondnum;
    },

    add:(num1,num2)=>{
        checkforvaluetype(num1,num2,"string",()=>{
            return new Error("you are suppose to provide a number")
        });
        return num1+num2;
    },

    exp:(value)=>{
        checkforvaluetype(value,"string",()=>{
            return new Error("you are suppose to provide a number")
        });
        return maths.exp(value);
    },

    sigmoid:(_value)=>{
        checkSinglevaluetype(_value,"string",()=>{
            return new Error("you are suppose to provide a number")
        });
        return 1/1+maths.exp(-_value);
    },

    mse:(actualvalue,predictedvalue)=>{
        checkforvaluetype(actualvalue,predictedvalue,()=>{
            throw new Error("you are supposed to provide a number")
        })
        return (actualvalue-predictedvalue)**2
    },

    array:(value)=>{
        let arr=new Array(value);
        return arr;
    },

    sum:(_value)=>{
        return _value;
    },

    sqrt:(num)=>{
        checkSinglevaluetype(num,"string",()=>{
            throw new Error("a number should be provided not string");
        })
        return num**2;
    },
}

 exports.np=numpy;