'use strict';

let user = {};

function addProperty() {
    const name = document.getElementById('inputName').value.trim();
    const value = document.getElementById('inputValue').value.trim();

    if (name && value) {
        user[name] = value;
        showProfile();

        document.getElementById("error").innerHTML = '';
        document.getElementById('inputName').value = '';
        document.getElementById('inputValue').value = '';
    } else {
        document.getElementById("error").innerHTML = 
        `<div class="alert alert-warning alert-dismissible fade show shadow-sm" role="alert">
            Заполните оба поля перед добавлением
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
    }
    
}

function resetProfile() {
    for (let key in user) {
        delete user[key];
    }
    document.getElementById("accountUser").innerHTML = '';
    document.getElementById("error").innerHTML = '';
    document.getElementById('inputName').value = '';
    document.getElementById('inputValue').value = '';
}

function showProfile() {
    let output = '';
    for (let name in user) {
        output += `<p class="text-start"><span class="fw-bold">${name}:</span> ${user[name]}</p>`;
    }
    document.getElementById("accountUser").innerHTML = output;
}
