// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if (name === '' || phone === '') {
        alert('Please enter both name and phone number.');
        return;
    }
    
    const contactList = document.getElementById('contactList');
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name} - ${phone}`));
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteButton);
    
    contactList.appendChild(li);
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});

document.getElementById('contactList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        contactList.removeChild(li);
    }
});



