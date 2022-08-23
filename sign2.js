
function search(){
        allStudent = JSON.parse(localStorage.getItem("studentDetails"))
        display.innerHTML = "first name; " + allStudent[index.value].firstname + "<br> last name; " + allStudent[index.value].lastname + "<br> email; " + allStudent[index.value].email + "<br> password; " + allStudent[index.value].password + "<br> date; "+ allStudent[index.value].date   
}
