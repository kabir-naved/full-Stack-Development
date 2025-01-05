
// let contacts = [];

//         function addContact() {
//             const nameInput = document.getElementById('name');
//             const phoneInput = document.getElementById('phone');
//             const name = nameInput.value.trim();
//             const phone = phoneInput.value.trim();

//             if (name !== '' && phone !== '') {
//                 contacts.push({ name, phone });
//                 displayContacts();
//                 nameInput.value = '';
//                 phoneInput.value = '';
//             } else {
//                 alert('Please enter both name and phone number.');
//             }
//         }

//         function deleteContact(index) {
//             contacts.splice(index, 1);
//             displayContacts();
//         }

//         function displayContacts() {
//             const table = document.getElementById('contactTable');
//             table.innerHTML = `
//                 <tr>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Action</th>
//                 </tr>
//             `;

//             contacts.forEach((contact, index) => {
//                 const row = table.insertRow();
//                 const nameCell = row.insertCell(0);
//                 const phoneCell = row.insertCell(1);
//                 const actionCell = row.insertCell(2);

//                 nameCell.innerText = contact.name;
//                 phoneCell.innerText = contact.phone;
//                 actionCell.innerHTML = `<button onclick="deleteContact(${index})">Delete</button>`;
//             });
//         }



// let callback = (set) => {
//     console.log(set);
// }

// function loadscript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = callback("hello");
//     document.head.append(script);}


// Example usage:
// loadscript("path/to/your/script.js", callback);


fetch("http://api.weatherapi.com/v1/current.json?key=39f4a440de2c4404a9035857240906&q=India&aqi=yes")

         