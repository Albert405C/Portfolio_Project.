
    // Typed animation
    const typed = new Typed(".typing", {
        strings: ["Full-Stack Developer","Front-end Developer", "Server-side Developer"],
        typeSpeed: 150, // Adjust the typing speed (measured in milliseconds)
        backSpeed: 10,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
      });
      
 // JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Assuming your form has an ID of 'contact-form'
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Display a confirmation prompt
      const isConfirmed = window.confirm('Would you like to contact Albert?');
  
      if (isConfirmed) {
        // If the user confirms, show another prompt
        window.alert('Thank you, Albert will connect with you shortly');
  
        // Now you can submit the form using JavaScript if needed
        // For example, uncomment the following line if you want to submit the form programmatically
        // contactForm.submit();
        
        // Clear the form fields after submission
        contactForm.reset();
      } else {
        // If the user cancels, you can handle it accordingly
      }
    });
  });
  
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Your existing code for sending the email
  
    // Clear the form fields after submission
    document.getElementById('contact-form').reset();
  }
  