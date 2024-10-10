function checkname() {
    var name = document.getElementById("name").value;
        if (name.length == 0){
            document.getElementById("error1").innerHTML ="Please fill out your name.";
            return false;
        }
        else if (name.length > 100){
            document.getElementById("error1").innerHTML ="Your name should not exceed 100 characters.";
            return false;
        }
        else{
            document.getElementById("error1").innerHTML ="";     
        }
    }

    function checkemail() {
        var email = document.getElementById("email").value;
            if (email.length == 0){
                document.getElementById("error2").innerHTML ="Please fill out your email.";
                return false;
            }
            else if (email.length > 100) {
                document.getElementById("error2").innerHTML ="Your email should not exceed 100 characters.";
                return false;
            }
            else{
                document.getElementById("error2").innerHTML ="";     
            }
        }

        function checksubject() {
            var subject = document.getElementById("subject").value;
                if (subject.length == 0){
                    document.getElementById("error3").innerHTML ="Please fill out the subject.";
                    return false;
                }
                else if (subject.length < 50) {
                    document.getElementById("error3").innerHTML ="Subject should not shorter than 50 characters.";
                    return false;
                }
                else if (subject.length > 250) {
                    document.getElementById("error3").innerHTML ="Subject should not exceed 250 characters.";
                    return false;
                }
                else{
                    document.getElementById("error3").innerHTML ="";     
                }
            }

            function checkmessage() {
                var message = document.getElementById("message").value;
                    if (message.length == 0){
                        document.getElementById("error4").innerHTML ="Please fill out the message.";
                        return false;
                    }
                    else if (message.length > 500) {
                        document.getElementById("error4").innerHTML ="Message should not exceed 500 characters.";
                        return false;
                    }
                    else{
                        document.getElementById("error4").innerHTML ="";     
                    }
                }
            
                function checkcontact(){
                    checkname();
                    checkemail();
                    checksubject();
                    checkmessage();
                        if (checkname() == false || checkemail() == false || checksubject() == false || checkmessage() == false) {
                            alert("Xem lại các trường nhập");
                            return false;
                        }
                }