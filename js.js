let users = [];
function signUp(){
    users.push({
        name : prompt("Enter your 1st name"),
        fname : prompt("Enter your 2nd"),
        Email : prompt("Enter your Email"),
        Password : prompt("Enter your Password"),
    })
    console.log(users);
}
function signIn(){
    let Email = prompt("Enter your Email");
    let Password = prompt("Enter your Password");
    for (i=0; i<users.length; i++){
        if (Email == users[i].Email){
            document.write("Login successfully")
            }
    }
    }