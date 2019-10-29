let queNum,
    event,
    checkQue = true;

function questionMechanicMil(obj) {
    let answer = obj.answer;
    do {
        ok = false;
        event = +prompt(obj.question + obj.v1 + obj.v2 + obj.v3 + obj.v4 + '-1 - Выход из игры');
        if (event == -1 || event == 0) {
            return false;
        }
        else {
            ok = isAnswer(4, event);
            if (event == 1) event = obj.v1;
            if (event == 2) event = obj.v2;
            if (event == 3) event = obj.v3;
            if (event == 4) event = obj.v4;
            event = event.trim();
        }
    } while (!ok);
    console.log("Ответ: " + event);
    console.log("Правильный: " + answer);
    if (event == answer) {
        alert("Правильный ответ");
        return true;
    } else {
        alert("Неправильный ответ");
        return false;
    }
}

function getQue(arr) {
    let random = parseInt(Math.random()*(arr.length-1))

    return arr[random];
}
//1
function startMil() {
    queNum = 0;
    do{
        if (queNum < 5) checkQue = questionMechanicMil(getQue(easyQue));
        if (queNum >= 5 && queNum < 10) checkQue = questionMechanicMil(getQue(mediumQue));
        if (queNum > 10) checkQue = questionMechanicMil(getQue(hardQue));
        if (checkQue) document.getElementsByClassName("level")[0].innerHTML = ++queNum;
    }while (checkQue && queNum < 15)

    if (queNum == 1) document.getElementsByClassName("txt2")[0].innerHTML = "вопрос";
    if (queNum > 1 && queNum < 5) document.getElementsByClassName("txt2")[0].innerHTML = "вопроса";
    if (queNum >= 5 && queNum < 15) document.getElementsByClassName("txt2")[0].innerHTML = "вопросов";
    if (queNum == 15) document.getElementsByClassName("txt2")[0].innerHTML = "вопросов и победили!";
}