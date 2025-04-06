'use client';
// deployment ID AKfycbxQBhOBfi08Del4WLM_4hX7EclZJ2wOdBKx-P9DkbaU34rmzZAnEbT4prWURVai_TOt
// webapp url https://script.google.com/macros/s/AKfycbxQBhOBfi08Del4WLM_4hX7EclZJ2wOdBKx-P9DkbaU34rmzZAnEbT4prWURVai_TOt/exec

const allForms = document.querySelectorAll('.form');



allForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const email = form.children[0].value
        console.log(email)
        
        if(email) {

            await fetch('https://script.google.com/macros/s/AKfycbxQBhOBfi08Del4WLM_4hX7EclZJ2wOdBKx-P9DkbaU34rmzZAnEbT4prWURVai_TOt/exec', { 
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            }).then((response) => {
                console.log(`You're now on the waitlist!`)

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
                    title: "You're on the waitlist!"
                  });

                form.reset()
            }).catch((error) => {
                console.log(error.message)
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
                title: 'Please insert your email'
              });
        }
        
    })
})


        // await axios.post('https://script.google.com/macros/s/AKfycbxQBhOBfi08Del4WLM_4hX7EclZJ2wOdBKx-P9DkbaU34rmzZAnEbT4prWURVai_TOt/exec', { email })
        // .then((response) => {
        //     console.log(`You're on the waitlist!`)
        // }).catch((error) => {
        //     console.log(error.message)
        // })