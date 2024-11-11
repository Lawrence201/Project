function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.sermons-page').forEach(function(page) {
        page.style.display = 'none';
    });

    // Show the selected page
    document.querySelector('.page-' + pageNumber).style.display = 'block';

    // Remove active class from all buttons
    document.querySelectorAll('.page-btn').forEach(function(button) {
        button.classList.remove('active');
    });

    // Add active class to the clicked button
    document.querySelector('#btn-page-' + pageNumber).classList.add('active');
}

// Add event listeners for buttons
const totalPages = 5; // Change this number to the total number of buttons/pages you have

for (let i = 1; i <= totalPages; i++) {
    document.querySelector('#btn-page-' + i).addEventListener('click', function() {
        showPage(i);
    });
}

// Initially show page 1
showPage(1);
