
function calculate() {
    const display = document.getElementById('display');
    try {
        
        display.value = eval(display.value);
    } catch (error) {
       
        display.value = "Error";
    }
}


document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        const display = document.getElementById('display');

        if (value === '=') {
            calculate();
        } 
    });
});