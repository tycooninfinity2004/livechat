
setTimeout(() => {
  document.querySelector('.loading-bar').style.display = 'none';
}, 10000);


  






// Check if the user has already signed up
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('signedUp') === 'true') {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
});

function checkSignup() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  if (email.includes('@') && password.length >= 8) {

  
  
  
  
  
    // Save signup information in local storage
    localStorage.setItem('signedUp', 'true');
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    
    
    
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  } else {
    document.getElementById("error"). innerHTML="Signup successful, login with email and password you use to Signup!";
  }
}

function checkLogin() {
  var loginEmail = document.getElementById('login-email').value;
  var loginPassword = document.getElementById('login-password').value;
  
  var savedEmail = localStorage.getItem('email');
  var savedPassword = localStorage.getItem('password');
  
  if (loginEmail === savedEmail && loginPassword === savedPassword) {
  
  window.location.href="switchmode.html";
    
  
   document.getElementById("correct"). innerHTML="Login Successful ✔️";
    document.getElementById("correctbtn").innerHTML="Please wait...";
    document.getElementById(login-form).style.display="block";
    
    
  } else {
   document.getElementById("error"). innerHTML="Please enter email and password you use to signup!";
  }
}




function  overlay() {
document.getElementById('wait').innerHTML = 'Oops! no network, please subscribe to internet data!';


    window.location.href="main.html";
}


   function freemode() {
    document.getElementById('wait').innerHTML = '!Takes time, refresh and click earnings again';
    
const layer = document.getElementById('layer');

layer.style.display="none";

}


function clickhere() {
    window.location.href="freemode.html";
}



document.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.getElementById('progress-bar');
  var multiplyText = document.getElementById('multiply-text');
 
  var redirectButton = document.getElementById('increaseBtn');
  
  var progress = 0;
  var interval = setInterval(function() {
    if (progress < 100) {
      progress++;
      progressBar.style.width = progress + '%';
      multiplyText.innerText ='X    ' + (progress/5);
    } else {
      clearInterval(interval);
      redirectButton.style.display = 'block';
    }
  }, 800);
  
  redirectButton.addEventListener('click', function() {
    redirectButton.style.display="none";
    
    document.getElementById("pls").innerHTML="Wait for another withdraw...";    
    
    setTimeout(function() {
    document.getElementById('increaseBtn').style.display="block";
  }, 60000);
    
    
  });  
});




function copyToClipboard() {
  const text1 = document.getElementById('text1').innerText;
  const text2 = document.getElementById('text2').innerText;

  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text1 + '\n' + text2;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  document.getElementById("copyclipboard").innerHTML="Copied to clipboard";
}



