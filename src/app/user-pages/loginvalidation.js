function login() {
    var username = document.getElementById('lblUserName').value;
    var Password = document.getElementById('lblPassword').value;

    if (username == null || username == "") {
        alert("Name can't be blank");
        return false
    } else if (Password.length < 5) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (Password.length > 20) {
        alert("Password length must be samller then 20 characters");
        return false;
    }


}