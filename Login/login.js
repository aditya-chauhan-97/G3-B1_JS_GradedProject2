const credentials = {
    userName: "aditya",
    password: "aditya",
  }

document.querySelector('.resume').onclick = () => {

    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if (user != credentials.userName || password != credentials.password) {
        alert("Invalid Credentials");
        return false;
    }
	localStorage.setItem('userName', user);
	localStorage.setItem('password', password);
    return true;
};

function preventback() { window.history.forward(); }
setTimeout("preventback()", 0);
window.onunload = function() { null };