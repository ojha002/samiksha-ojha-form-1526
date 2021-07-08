

// Access input value
let fm = document.getElementById('contact-form');
let fn = document.getElementById('fname');
let me = document.getElementById('details');
let em = document.getElementById('email');
let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

// function collectData() {
//     alert(`User enetered: ${input.value}.`);
// }

// b.addEventListener('click', collectData);

function formValidator(ev) {
    // preventing default behaviour of HTML form on submit event
    // whenever used, it shoud come as the forst line of code in event handler!
    ev.preventDefault();

    // start with these 2 empty buckets at the beginning
    let errors = [];
    let data = {};

    // validation for full name
    if (fn.value !== '') {
        data.fulltName = fn.value;
    } else {
        errors.push('Please enter your Full name!');
    }

      // validation for message
      if (me.value !== '') {
        data.message = me.value;
    } else {
        errors.push('Please enter your Message!');
    }
    // check if error array is empty. If so, print in console data object,
    // otherwise print in console errors array 
    // prevent the form submission ----- do the validation

    // Trim the whitespace
    em.value = em.value.trim();
    // Get the value or write out the error message.
    if (em.value !==''){
        if(pattern.test(em.value)) {
            console.log(`User email is: ${em.value}`);
         }else {
            console.log(`Email is invalid`);
         }
    } else{
        console.log(`User email is empty`);
    }

}

fm.addEventListener('submit', formValidator);

