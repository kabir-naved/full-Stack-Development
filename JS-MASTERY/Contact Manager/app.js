document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Name validation: must contain only letters and at least one character
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name || !nameRegex.test(name)) {
        alert('Please enter a valid name (letters only).');
        return;
    }

    // Phone validation: must contain only numbers and at least one digit
    const phoneRegex = /^[0-9]+$/;
    if (!phone || !phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (numbers only).');
        return;
    }

    const contactList = document.getElementById('contactList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${name} - ${phone}</span>
        <button class="delete">Delete</button>
    `;

    contactList.appendChild(li);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});

document.getElementById('contactList').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.remove();
    }
});
