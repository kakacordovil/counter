let inputStart = document.getElementById("start");
let inputEnd = document.getElementById("end");
let inputStep = document.getElementById("step");
let result = document.getElementById("result");

function randomHello() {
    let x = Math.floor((Math.random() * 10) + 1);
    let hello = document.getElementById("hello");
    switch (x) {
        case 1:
            hello.innerHTML = "Olá Mundo";
            break;
        case 2:
            hello.innerHTML = "Salut Le Monde";
            break;
        case 3:
            hello.innerHTML = "Ciao Mondo";
            break;
        case 4:
            hello.innerHTML = "Kon´nichiwa Sekai";
            break;
        case 5:
            hello.innerHTML = "Namaste Duniya";
            break;
        case 6:
            hello.innerHTML = "Shubh prabhat Duniya";
            break;
        case 7:
            hello.innerHTML = "Hallo Welt";
            break;
        case 8:
            hello.innerHTML = "Hola Mundo";
            break;
        case 9:
            hello.innerHTML = "Privet Mir";
            break;
        default:
            hello.innerHTML = "Hello World";
    }
    
  }

function toCount() {
    if (inputStart.value.length == 0 || inputEnd.value.length == 0 || inputStep.value.length == 0) {
        window.alert('[ERROR] Data missing!');
    } else {

        result.innerHTML =  `Counting:`;
        
        let valueStart = Number(inputStart.value);
        let valueEnd = Number(inputEnd.value);
        let valueStep = Number(inputStep.value);

        if (valueStep <= 0) {
            window.alert(`Invalid step, changing to 1.`)
            valueStep = 1
        }
        if (valueStart < valueEnd) {
            //to up
            for(let c = valueStart; c <= valueEnd; c += valueStep) {    
            result.innerHTML +=  ` ${c} \u{1F449}`;

            }
            
        } else {
            //to down
            for(let c = valueStart; c >= valueEnd; c-=valueStep) {
                result.innerHTML +=  ` ${c} \u{1F449}`;
            }
        }
        //flag in the end
        result.innerHTML +=  ` \u{1F3C1}`;
    }
}

    
    
