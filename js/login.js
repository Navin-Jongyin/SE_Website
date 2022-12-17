const firebaseConfig = {
    apiKey: "AIzaSyAcecBrkssqhKPv9CibVD9rOdcPuU5AMlk",
    authDomain: "authentication-95400.firebaseapp.com",
    databaseURL: "https://authentication-95400-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authentication-95400",
    storageBucket: "authentication-95400.appspot.com",
    messagingSenderId: "850070028567",
    appId: "1:850070028567:web:0afb6ac76f4fe03ba93752"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const databse = firebase.databse()

  function login()
  {
    email = document.getElementById('email').value;
    password = document.getElementById('std_password').value;

    if(validate_email(email) == false || validate_field(field) == false)
    {
        alert('Please enter correct Email and Password!')
    }
    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser
        var databse_ref = databse.ref()
        var user_data = {
            last_login : Date.now()
        }
        databse_ref.child('users/' + user.uid).update(user_data)

        alert('Logged In!')
    })
    .catch(function(){
        var error_code = error.code
        var error_message = error.message
        
        alert(error_message)
    })
  }

  function validate_email(email)
  {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  function validate_field(field)
  {
    if(field == null)
    {
        return false;
    }
    else
    {
        return true;
    }
  }