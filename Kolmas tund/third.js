let fname, lname, email, saveLocal, loadLocal, deleteLocal, dataContainer;

window.onload = function(){
    console.log("leht on laetud.")
    init();
}

function init(){
    fname = document.querySelector('#fname');
    lname = document.querySelector('#lname');
    email = document.querySelector('#email');
    saveLocal = document.querySelector('#saveLocal');
    loadLocal = document.querySelector('#loadLocal');
    deleteLocal = document.querySelector('#deleteLocal');
    dataContainer = document.querySelector('#dataContainer');

    saveLocal.addEventListener('click', localSave);
    loadLocal.addEventListener('click', localLoad);
    deleteLocal.addEventListener('click', localDelete);
    //addEventListener Добавим обработчик события, который срабатывает при нажатии пользователем на кнопку
}

function localSave(){
    console.log('save');
    let error = false;
    if(fname.value.length < 2){
        error = true;
        fname.style.borderColor = 'red';
    } else{
        fname.style.borderColor = '#ccc';
    }

    if(lname.value.length < 2){
        error = true;
        lname.style.borderColor = 'red';
    } else{
        lname.style.borderColor = '#ccc';
    }

    if(email.value.length < 2){
        error = true;
        email.style.borderColor = 'red';
    } else{
        email.style.borderColor = '#ccc';
    }


    if(!error){
        let data = {
            firstName: fname.value,
            lastName: lname.value,
            email: email.value
        }

        console.log(data);
    
        localStorage.setItem('personData', JSON.stringify(data));
        //localstorage - хранение
        // JSON JSON (JavaScript Object Notation) — это формат для хранения и обмена информацией, доступной для чтения человеком. 
        //Файл содержит только текст и использует расширение .json. 
    }


}

function localLoad(){
    console.log('load');
    const localData = JSON.parse(localStorage.getItem('personData'));
    /*dataContainer.innerHTML = 'Eesnimi: ' + localData.firstName + '<br> Perekonnanimi: ' + localData.lastName + 
    '<br> Email: ' + localData.email;*/
    dataContainer.innerHTML = `Eesnimi: ${localData.firstName} <br> Perekonnanimi: ${localData.lastName}
    <br> Email: ${localData.email}`;

}

function localDelete(){
    localStorage.removeItem('personData');
}