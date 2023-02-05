

const firebaseConfig = {
  apiKey: "AIzaSyCWoXS9vg6TXKAs69lcieLyOWWPYzRdDnI",
  authDomain: "myportfolio-a0cbe.firebaseapp.com",
  databaseURL: "https://myportfolio-a0cbe-default-rtdb.firebaseio.com",
  projectId: "myportfolio-a0cbe",
  storageBucket: "myportfolio-a0cbe.appspot.com",
  messagingSenderId: "674699487278",
  appId: "1:674699487278:web:914fb749a84e1c246897bf"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var subject = getElementVal("subject");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, subject, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, subject, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    subject: subject,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};