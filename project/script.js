function gameguess(){
    var guessnum = 5;
    var ournum = prompt('Введите число');
    if (ournum > guessnum){
        alert('Число должно быть меньше');
        return gameguess();
    }
    else if(ournum < guessnum){
        alert('Число должно быть больше');
        return gameguess();
    }
    else{
        alert('Вы угадали')
    }
}

//gameguess()

function reminder(){
    alert('Че ты тут забыл');
    window.close();
}
//setTimeout(reminder, 5000)

function valide(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    var reg_name = /^[a-zа-я]+$/i;
    var pass_name = /^[a-z0-9]{5,100}/i;
    
    if (reg_name.test(name) == false){
        alert('ФИО должно содержать только буквы!')
    }
    if (pass_name.test(password) == false){
        alert('Пароль должен содержать английский алфавит, цифры. Длина 5-100 символов')
    }
}
document.querySelector(".button").addEventListener("click", valide)