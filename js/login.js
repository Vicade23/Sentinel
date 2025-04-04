import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js'
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyCzDDJ5lBJHMPaxi6hhRQ590od4uJ61OgQ",
    authDomain: "campus-safety-project-9f3cf.firebaseapp.com",
    projectId: "campus-safety-project-9f3cf",
    storageBucket: "campus-safety-project-9f3cf.firebasestorage.app",
    messagingSenderId: "1009160047729",
    appId: "1:1009160047729:web:4fe9cd63137494f2851fd0",
    measurementId: "G-MCZ3W7CH4M"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    
    const email = document.getElementById('email-input')
    const password = document.getElementById('password-input')
    const oauthBtn = document.getElementById('oauth-btns')
    const submitBtn = document.getElementById('submit-btn')
    const provider = new GoogleAuthProvider();
    let formData
    let isformData = false

    
    oauthBtn.addEventListener('click', async (e) => {
        
       await signInWithPopup(auth, provider).then((result) => {
            const user = result.user
            console.log('User signed up', user)
            localStorage.setItem('user-access-token', JSON.stringify(user))

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
              setTimeout(() => {
                  window.location.href= '/dashboard.html'
              }, 3000);

        }).catch((error) => {
          console.log('error signing in', error.message)
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "warning",
                title: error.message
              });
        })
    })


     const formDetail = submitBtn.addEventListener('click', (e) => {

        if(email.value && password.value) {
            
            if(password.value.length >= 8) {

                  formData = {
                    user_email: email.value,
                    user_password: password.value
                }
                signInWithEmailAndPassword(auth, formData.user_email, formData.user_password).then((userCredential) => {
                    console.log('User signed up', userCredential?.user)
                    localStorage.setItem('user-access-token', JSON.stringify(userCredential.user));

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                        });
                        Toast.fire({
                        icon: "success",
                        title: "Signed in successfully"
                        });

                        setTimeout(() => {
                            window.location.href= '/dashboard.html'
                        }, 3000);
                }).catch((error) => {
                  console.log('error signing in', error.message)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "warning",
                        title: error.message
                      });
                })
                
                isformData = true
            }else {
              
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "warning",
                title: "Password: Min of 8 characters"
              });

          }
        } else {

            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "warning",
              title: "Fill in all inputs"
            });
        }
        
        console.log(formData, isformData)
        return formData && isformData;
    })


        


