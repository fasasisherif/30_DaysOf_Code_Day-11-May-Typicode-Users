document.getElementById('button').addEventListener('click', userData);
    
function userData(){
            fetch('https://jsonplaceholder.typicode.com/users/').then(response => response.json())
            
   .then(users => {
   var user_name = '';
   var user_email = '';
   var user_city = '';
   var user_street = '';
   var user_bs = ''; 
                    users.forEach(function(user) {
       user_name += `<li> ${user.name}</li>`;
       user_email += `<li> ${user.email} </li>`
       user_city += `<li> ${user.address.city} </li>`           
       user_street += `<li> ${user.address.street} </li>`  
       user_bs += `<li> ${user.company.bs} </li>`          
                    });                              
       //user_name += '</ul>'
                    document.getElementById("ans1").innerHTML = user_name;
document.getElementById("ans2").innerHTML = user_email;                    
document.getElementById("ans3").innerHTML = user_city;                    
document.getElementById("ans4").innerHTML = user_street;
document.getElementById("ans5").innerHTML = user_bs;                    
                });
        }
        