function checkcakename(){
    var cakename = document.getElementById('cakename').value;
    if ( cakename == "default"){
        document.getElementById("error1").innerHTML ="Please select our product.";
        return false;
    }
    else{
        document.getElementById("error1").innerHTML ="";
    }
}

function checkname() {
    var name = document.getElementById("name").value;
        if (name.length == 0){
            document.getElementById("error2").innerHTML ="Please fill out your name.";
            return false;
        }
        else if (name.length > 100){
            document.getElementById("error2").innerHTML ="Your name should not exceed 100 characters.";
            return false;
        }
        else{
            document.getElementById("error2").innerHTML ="";     
        }
    }

    function checkmessage() {
        var message = document.getElementById("message").value;
            if (message.length > 30) {
                document.getElementById("error3").innerHTML ="Message should not exceed 30 characters.";
                return false;
            }
            else{
                document.getElementById("error3").innerHTML ="";     
            }
        }

        function checkdate() {
            var date = document.getElementById("date").value;
                if (date.length < 5) {
                    document.getElementById("error4").innerHTML ="Please fill out the deliver date.";
                    return false;
                }
                else{
                    document.getElementById("error4").innerHTML ="";     
                }
            }

            function checkto() {
                var to = document.getElementById("to").value;
                    if (to.length == 0) {
                        document.getElementById("error5").innerHTML ="Please fill out the address.";
                        return false;
                    }
                    else if (to.length > 500){
                            document.getElementById("error5").innerHTML ="Address should not exceed 500 characters.";
                            return false;
                        }
                    else{
                        document.getElementById("error5").innerHTML ="";     
                    }
                }

            function checkorder(){
                checkcakename();
                checkname();
                checkmessage();
                checkdate();
                checkto();
                    if (checkcakename() == false ||checkname() == false || checkmessage() == false || checkdate() == false || checkto() == false) {
                        alert("Xem lại các trường nhập");
                        return false;
                    }
            }