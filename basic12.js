//error handling
//try block
//catch block
//finally block
//if,ifelse,ifelseif

function login(username,password){
    try{
        if(username==="" ||password===""){
            console.log("username and password cannot be empty");
        }
        else if(username==="admin" && password==="admin123"){
            console.log("login successful");
        }
        else{
            console.log("invalid user or password");
        }

    }
    catch (error){
        console.log("unexcepted error");
        console.log("error.message");
    }
    finally{
        console.log("login process completed");
    }

}
//login("admin123", "admin12356");
login("admin", "admin123");