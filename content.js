window.onload = function() {
    const birthdayElements = document.getElementsByClassName('bday');
    if (birthdayElements.length > 0) {
        const birthdayText = birthdayElements[0].textContent;
        window.alert(birthdayText);
    }
};