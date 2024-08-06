import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
};