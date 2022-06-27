let a = '';
let b = ''; 
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick  = clearAll;
document.querySelector('.buttons').onclick  = (event) => {
    // push button
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a, b, sign);
        }
        else if (a !== '' && sign !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
            console.log(a, b, sign);
        }
        else {
            b += key;
            out.textContent = b;
            console.log(a, b, sign);
            
        }
        return; 
    }
        if( key === '=') {
            // if(b === '') b = a;
            
            switch(sign) {
                case '+':
                    console.log(a, b, sign);
                    // if(a === 0) {
                    //     a = '';
                    //     b = '';
                    //     sign = '';
                    // }
                    a = Number(a) + Number(b);
                    break;
                case 'X':
                    a = a * b;
                    break;
                case '-':
                    a = Number(a) - Number(b);
                    break;
                case '/':
                    if(b === "0") {
                        out.textContent = 'Ошибка'
                        a = '';
                        b = '';
                        sign = '';
                        return
                    }
                    
                    a = a / b;
                    break;
                    
            }
            finish = true;
            out.textContent = a;
        }
        
    

    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

}