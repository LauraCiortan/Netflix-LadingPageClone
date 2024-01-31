
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question-btn');

  questions.forEach(question => {
    question.addEventListener('click', function() {
      // Get the next sibling element of the clicked question, which is the corresponding answer.
      const answer = this.nextElementSibling;

      // Toggle the 'active' class to show/hide the answer
      answer.classList.toggle('active');
    });
  });
});