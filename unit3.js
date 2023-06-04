//Задание 1.

function lab (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop.obj[prop])
        }
    }
}

//Задание 2.
function lab2 (str, obj) {
    if(str in obj) {
        return true
    }
    else {
        return false
    }
}


//Задание 3.

function lab3() {
    return Object.create(null);
  }