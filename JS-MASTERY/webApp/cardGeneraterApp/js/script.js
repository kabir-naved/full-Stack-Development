function getUser(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        const { name, email, gender, phone, picture, location } = result.results[0];
       
       
        document.querySelector('.card').innerHTML = `
        <div class="card-header">
            <img src="${picture.large}" alt="User Photo" class="user-photo">
            <h2>${name.first} ${name.last}</h2>
        </div>
        <div class="card-content">
            <p><strong>Number:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Address:</strong> ${location.city}, ${location.country}</p>
        </div>`;
        
        console.log(result);
    });
}

document.querySelector('button').addEventListener('click', () => {
    getUser();
});
