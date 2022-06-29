$("#useremail").on("keyup", function(key){
    if(key.key=='Enter'){
        $("#go").click();
    }
})

$("#go").click(function(event){
    event.preventDefault();
    var email=$("#useremail").val();
    var regExp= /^[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%&'*+./0-9=?A-Z^_a-z{|}~]+$/;
    if(!regExp.test(email)){
        $("#error").removeClass("hidden");
    }
    else{
        $("#error").addClass("hidden");
    }
})