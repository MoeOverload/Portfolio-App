document.addEventListener('DOMContentLoaded', () =>{
  //CONTACT FORM STUFF
  const contactForm = document.getElementById('ContactForm')
  const nName = document.getElementById('name');
  const nEmail = document.getElementById('email');
  const nMessage = document.getElementById('message');
  const nFormSubmit = document.getElementById('formSubmit');
  
  //disable the submit button
  nFormSubmit.disabled = true;
  nMessage.onkeyup = () =>{
    if (nEmail.value.length > 0 & nName.value.length > 0){
      nFormSubmit.disabled = false;
    }
    else{
      nFormSubmit.disabled = true
    }
  }
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

   // Listen for submission of form
  contactForm.addEventListener("submit", async function(e) {
    const timeSubmit = new Date().toLocaleString();
    e.preventDefault();
    const formData = {
      name : nName.value,
      email : nEmail.value,
      message: nMessage.value,
      timeSent: timeSubmit.value
    };
    const response = await fetch('/Contact/', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
  })
});
