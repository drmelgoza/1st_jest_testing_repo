function div(a, b) {
    return a / b;
}

function containsNumbers(text) {
    if (text.replaceAll(' ', '') === '') {
        return false;
    } else {
        for (let i = 0; i < text.length; i++) {
            if (!isNaN(text.charAt(i))) {
                return true;
            }
        }
        return false;
    }
}

export { div, containsNumbers };