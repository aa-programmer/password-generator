export function generatePassword() {
    const characters = [
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:'\",.<>?/~`"
    ];

    let input = prompt("Enter the length of the password:");
    let length = parseInt(input);

    if (isNaN(length) || length <= 0) {
        alert("Invalid input. Please enter a positive number.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    alert("Generated Password:\n" + password);
    return password;
}
