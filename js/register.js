import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js'
import { getFirestore, collection, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js'


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
    const db = getFirestore(app);


    
    const form = document.getElementById('form')
    const names = document.getElementById('name-input')
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
                title: "Signed up successfully"
              });
              setTimeout(() => {
                  window.location.href= '/dashboard.html'
              }, 3000);

        }).catch((error) => {
          console.log('error signing up', error.message)
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

        if(names.value && email.value && password.value) {
            
            if(password.value.length >= 8) {
                formData = {
                    user_name: names.value,
                    user_email: email.value,
                    user_password: password.value
                }
                
                const createUser = async () => {

                  const userDetails = await createUserWithEmailAndPassword(auth, formData.user_email, formData.user_password)
                  .then((userCredential) => {
                      console.log('User signed up', userCredential?.user)

                      // db.collection('users').doc(userCredential?.user.uid).set({
                      //   name: formData.user_name,
                      //   email: formData.user_email,
                      // })

                      // setDoc(doc(db, 'users', userCredential?.user.uid), {
                      //   name: formData.user_name,
                      //   email: formData.user_email,
                      //   uid: userCredential?.user.uid,
                      // })

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
                          title: "Signed up successfully"
                          });
                          
                            setTimeout(() => {
                              window.location.href= '/dashboard.html'
                          }, 3000);

                  }).catch((error) => {
                      console.log('error signing up', error.message)
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
                  });

                  console.log(formData)
                }
                createUser()
                
                isformData = true
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


        


