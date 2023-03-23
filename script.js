window.onload = function(){
    if(localStorage){
        document.getElementById('contactform').addEventListener('submit',function(){
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var phone = document.getElementById('phone').value;
            var date = document.getElementById('date').value;
            var time = document.getElementById('time').value;
            localStorage.setItem('name',name); 
            localStorage.setItem('mail',mail); 
            localStorage.setItem('phone',phone); 
            localStorage.setItem('date',date); 
            localStorage.setItem('time',time); 
        });
    }
}