const calc = {
    add: (a, b) => {return a+b;},      
    sub: (a, b) => {return a-b;},
    mul: (a,b) => {return a*b;},
    div: (a,b) => {return a/b;},      
};

function Calculation() {
    const oper = document.querySelector('select[name="operation"]').value;
    const a = Number(document.querySelector('#value1').value);
    const b = Number(document.querySelector('#value2').value);
    let result = 0;
    switch(oper) {
        case "add": result = calc.add(a,b); break;
        case "sub": result = calc.sub(a,b); break;
        case "mul": result = calc.mul(a,b); break;
        case "div": result = calc.div(a,b); break;
    }
    console.log(result);
    $('#result').val(result);
}