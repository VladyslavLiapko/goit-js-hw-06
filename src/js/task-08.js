const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentTargets = event.currentTarget.elements
    const isEmailAbsent = currentTargets.email.value.length === 0
    const isPasswordAbsent = currentTargets.password.value.length === 0

    if (isEmailAbsent || isPasswordAbsent) {
        alert("Всі поля повинні бути заповнені")
    } else {
        const formData = new FormData(event.currentTarget);
    
        formData.forEach((value, name) => {
            console.log(name + " " + value);
        });
        document.querySelector("form").reset();
    }
});
