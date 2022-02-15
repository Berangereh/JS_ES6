document.getElementById("loto_form").submit(); // Form submission


function validateForm(){
    var name = document.getElementById("firstName").value;
    var name = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if( name ==='' || email ===''){
    alert("Please fill all fields...!!!!!!");
    return false;
    }else if(!(email).match(emailReg)){
    alert("Invalid Email...!!!!!!");
    return false;
    }else{
    return true;
    }
    };

function submit_by_id() {
    if (validation()) // Calling validation function
    {
    document.getElementById("loto_form").submit(); //form submission
    alert(" Name : " + lastName + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    }

console.log(lastName.value);
//const checkLoto = (firstName, lastName, email, lotoNumbers) => { /*... */ };
