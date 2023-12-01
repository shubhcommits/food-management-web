const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const profileData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value
    };


    console.log('Profile data:', profileData);
});

const donationForm = document.getElementById('donation-form');
donationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const donationData = {
        name: document.getElementById('Amount of food donated').value,
        phone: document.getElementById('Donation Freaquency').value,


    }
    console.log('Donation Details:', donationDataData);
})