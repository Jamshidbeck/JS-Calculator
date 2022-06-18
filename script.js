let ecran = document.querySelector('.window');

document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('click', function(e){

        let point = e.target.innerText;


        if(point == 'C'){
            ecran.value = '';
        } 
        
        else if(point == '='){
            ecran.value = eval(ecran.value);
        }

        else{
            ecran.value += point;
        }

    });
});



