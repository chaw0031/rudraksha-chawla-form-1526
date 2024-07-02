// Accessing references
// function validateForm() {

let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let btn = document.getElementById('submit');
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

// this is the event handler 
function validateForm(event) {
event.preventDefault();
// creating bucket for user-inputs and for errors 

// this is a bucket 
let ui = {};
let errors = [];

// console.log(em.value);
// trim removes the whitespace 

fn.value = fn.value.trim();
em.value = em.value.trim();
msg.value = msg.value.trim();

// if (em.value) {
//   ui.whatever = em.value
// }
// if (pattern.test(em.value)) {
//   ui.userEmail = em.value
// }


if (fn.value) {
  ui.user_fullname = fn.value;
} else {
  errors.push('<p>Please enter your full name!</p>');
}


if (em.value) {
  // then check the email format
  if (pattern.test(em.value)) {
    // pass the user-input into the newly created prperty user_email:
    ui.user_email = em.value
  } else {
    errors.push('<p>Your email is invalid!</p>')
  }
} else {
  // You could add the new array element to the initially empty array like this:
  // errors[0] = '<p>Please enter your email!</p>';
  // or by using the push() method of Array!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  errors.push('<p>Please enter your email!</p>');
}


if (msg.value) {
  ui.user_message = msg.value;
} else {
  errors.push('<p>Please enter your message!</p>');
}


// validate fill full name 
// validate the message 
/* if array errors has no elemenrs print the feedback
otherwise print the errors */


// PRINT YOUR FEEDBACK/ERROR MESSAGE HERE 

fn.value = ' ';
em.value = ' ';
msg.value = ' ';
    
console.log(ui, errors);
}

// }

form.addEventListener('submit', validateForm);
