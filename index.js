function saturdayFun(target="roller-skate") {
    return `This Saturday, I want to ${target}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(type="special") {
        return `You are ${flair}${type}${flair}!`
    }
}

// const Calculator = new Object()
let Calculator = {
    add : function(num1, num2) {
        return num1+num2
    },
    subtract : function(num1, num2) {
        return num1-num2
    },
    multiply : function(num1, num2) {
        return num1*num2
    },
    divide : function(num1, num2) {
        return num1/num2
    }
}

function actionApplyer(integer, functions) {
    if (functions.length === 0){
        return integer
    } else {
        let total = functions[0](integer);
        functions.slice(1).forEach (function(e) {
            total = e(total)
            console.log(total)
        });
        return total}
}



