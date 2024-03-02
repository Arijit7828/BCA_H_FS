const form = document.querySelector('#tracking-form');
const phoneNumberInput = document.querySelector('#phone-number');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const phoneNumber = phoneNumberInput.value;

    
    trackPhoneNumber(phoneNumber)
        .then((location) => {
            resultDiv.innerHTML = `<p>The phone number is located in ${location}.</p>`;
        })
        .catch((error) => {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});


async function trackPhoneNumber(phoneNumber) {
    
    const fakeLocation = 'New York, NY';

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (phoneNumber.length === 10) {
                resolve(fakeLocation);
            } else {
                reject(new Error('Invalid phone number'));
            }
        }, 2000);
    });
}