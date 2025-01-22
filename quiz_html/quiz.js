document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;
    const answers = {
        q1: 'Option 1', // Correct answer for Question 1
        q2: 'Option 2', // Correct answer for Question 2
        q3: 'Option 3'  // Correct answer for Question 3
    };

    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    alert(`You scored ${score} out of ${Object.keys(answers).length}`);
});