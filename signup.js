var allStudent = []
// matricNumber = Math.round(Math.random()*1000000)
if(localStorage.studentDetails){
    allStudent = JSON.parse(localStorage.getItem("studentDetails"))

}

function signup(){
    var newStudent = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: userEmail.value,
        password: userPassword.value,
        date: new Date()
    }
    if(firstname.value==""){
        alert("Kindly enter your FIRSTNAME to proceed")
    }else if(lastname.value==""){
        alert("Kindly enter your LASTNAME to proceed")
    }else if(userEmail.value==""){
        alert("Kindly enter your EMAIL to proceed")
    }else if(userPassword.value==""){
        alert("Kindly enter your PASSWORD to proceed")
    }else{
        allStudent.push(newStudent)
        localStorage.setItem("studentDetails", JSON.stringify(allStudent))
        window.location.href = "sign2.html"
        console.log(allStudent)
    }
    
    
}