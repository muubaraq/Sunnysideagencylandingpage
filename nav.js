     // Add event listener to hamburger icon element
     document.querySelector('.hamburger-icon').addEventListener('click', function() {
        // Toggle the 'hidden' class on the offcanvas element
      document.querySelector('.offcanvas').classList.toggle('hidden');
    });

    // Add event listener to offcanvas close button element
    document.querySelector('.offcanvas-close').addEventListener('click', function() {
        // Toggle the 'hidden' class on the offcanvas element
      document.querySelector('.offcanvas').classList.toggle('hidden');
    });