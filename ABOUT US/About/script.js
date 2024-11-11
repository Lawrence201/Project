let currentPastorSet = 1;

function showPastors(set) {
    const firstSet = document.querySelectorAll('.pastors-container')[0];
    const secondSet = document.querySelectorAll('.pastors-container')[1];
    const dots = document.querySelectorAll('.dot');

    // Slide away the first set if the second dot is clicked
    if (set === 2 && currentPastorSet !== 2) {
        firstSet.style.display = 'none';
        secondSet.style.display = 'flex';
        currentPastorSet = 2;
    }
    // Slide back the first set if the first dot is clicked
    else if (set === 1 && currentPastorSet !== 1) {
        secondSet.style.display = 'none';
        firstSet.style.display = 'flex';
        currentPastorSet = 1;
    }

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[set - 1].classList.add('active');
}



let currentMinisterSet = 1;

function showMinisters(set) {
    const firstSet = document.querySelectorAll('.ministers-container')[0];
    const secondSet = document.querySelectorAll('.ministers-container')[1];
    const dots = document.querySelectorAll('.dot');

    // Slide away the first set if the second dot is clicked
    if (set === 2 && currentMinisterSet !== 2) {
        firstSet.style.display = 'none';
        secondSet.style.display = 'flex';
        currentMinisterSet = 2;
    }
    // Slide back the first set if the first dot is clicked
    else if (set === 1 && currentMinisterSet !== 1) {
        secondSet.style.display = 'none';
        firstSet.style.display = 'flex';
        currentMinisterSet = 1;
    }

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[set - 1].classList.add('active');
}






document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.image-section img');
    const surpriseText = document.createElement('div');
    
    // Style the surprise message
    surpriseText.textContent = 'God bless our leaders!';
    surpriseText.style.position = 'fixed';
    surpriseText.style.top = '50%';
    surpriseText.style.left = '50%';
    surpriseText.style.transform = 'translate(-50%, -50%)';
    surpriseText.style.padding = '20px';
    surpriseText.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    surpriseText.style.color = '#fff';
    surpriseText.style.borderRadius = '10px';
    surpriseText.style.fontSize = '18px';
    surpriseText.style.display = 'none'; // Initially hidden
    surpriseText.style.zIndex = '1000';  // Ensures the message appears on top of everything

    document.body.appendChild(surpriseText); // Add the message to the body

    // Show the message when hovering over the image
    img.addEventListener('mouseover', () => {
        surpriseText.style.display = 'block';
    });

    // Hide the message when the mouse moves away from the image
    img.addEventListener('mouseout', () => {
        surpriseText.style.display = 'none';
    });
});



