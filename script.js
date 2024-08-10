document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const chatRoom = document.getElementById('chatRoom');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const logoutLink = document.getElementById('logoutLink');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatMessages = document.getElementById('chatMessages');

    let currentUser = null;
    // Show login form by default
     showLoginForm();

    // Event listeners
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        showLoginForm();
       

    });

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        showRegisterForm();
       
    });

    const loginbtn = document.getElementById('loginBtn');
//my adition
//loginbtn.addEventListener('submit',showChatRoom());
var username;
var password;
var usname;
var paword;
loginbtn.onclick= function()
{
     username = document.getElementById('username').value;
     password = document.getElementById('password').value;
    //password=null;
    //password = password;
        // Simulated login logic (replace with actual logic)
        //alert('error');
       if((username==username) && (password==paword)  )
       {
        currentUser = username;
          showChatRoom();
            loginForm.reset();
       }
    else{
        alert('Invalid username or password. Please try again.');
    }
           // currentUser = username;
           
               
            
           
           // alert('Invalid username or password. Please try again.');
    
};

var regbtn=document.getElementById('registerBtn');
regbtn.onclick = function()
{
    usname = document.getElementById('newUsername').value;
    paword = document.getElementById('newPassword').value;
    
    if(usname && paword)
    {
        username=usname;
        password=paword;
        showLoginForm();
    }
    else{
        alert('please input valid information');
    }

};
   // loginbtn.addEventListener('submit', function(event) {
       
     //   event.preventDefault();
    //     const username = loginForm.username.value;
    //     const password = loginForm.password.value;
    //     // Simulated login logic (replace with actual logic)
    //     alert('error');
       
    //     if (username && password) {
    //         currentUser = username;
    //         showChatRoom();
    //         loginForm.reset();
    //     } else {
    //         alert('Invalid username or password. Please try again.');
    //     }
    // });




    // registerForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     const newUsername = registerForm.newUsername.value;
    //     const newPassword = registerForm.newPassword.value;
    //     // Simulated registration logic (replace with actual logic)
    //     if (newUsername && newPassword) {
    //         currentUser = newUsername;
    //         showChatRoom();
    //         registerForm.reset();
    //     } else {
    //         alert('Please fill out all fields.');
    //     }
    // });

    sendMessageBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            displayMessage(currentUser, message);
            messageInput.value = '';
        }
    });

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        currentUser = null;
        showLoginForm();
    });

    // Helper functions
    function showLoginForm() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        chatRoom.classList.add('hidden');
    }

    function showRegisterForm() {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        chatRoom.classList.add('hidden');
    }

    function showChatRoom() {
        chatRoom.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerForm.classList.add('hidden');
    }

    function displayMessage(username, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        // Automatically scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
