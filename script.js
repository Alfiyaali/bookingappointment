window.onload = function(){
    if(localStorage){
     document.getElementById('contactform').addEventListener('submit',function(){
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var phone = document.getElementById('phone').value;
            var date = document.getElementById('date').value;
            var time = document.getElementById('time').value;
            let myObj = {name, mail, phone,date,time};

            let myObj_serialized = JSON.stringify(myObj);
            
            localStorage.setItem("myObj",myObj_serialized);
        });
    }
}