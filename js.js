let users = [];
function signUp(){
    users.push({
        name : document.getElementById("1n").value,
        fname : document.getElementById("2n").value,
        Email : document.getElementById("Ema").value,
        Password : document.getElementById("Pw").value,
    })
    console.log(users);
}
function signIn(){
    let Email = document.getElementById("Em").value;
    let Password = document.getElementById("Pwd").value;
    for (i=0; i<users.length; i++){
        if (Email == users[i].Email && Password == users[i].Password){
            alert("Login successfully")
            }
            else{
                alert("Invalid Email or Password")
            }
    }
    }