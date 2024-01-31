
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

// Change the language from the Language Selector
function changeLanguage() {
  let selectedLanguage = document.getElementById("languages-selector").value;

  
  // Load translations dynamically from JSON file
  fetch(`translations/${selectedLanguage}.json`)
    .then(response => response.json())
    .then(data => updateContent(data));
  
}

function updateContent(translations) {
  // Iterate over elements with data-translation-key attribute
  document.querySelectorAll('[data-translation-key]').forEach(element => {
    let translationKey = element.getAttribute('data-translation-key');

    if (translations.hasOwnProperty(translationKey)) {
      element.textContent = translations[translationKey];
    }
  });
}

// Initial content load with default language (English)
document.addEventListener("DOMContentLoaded", function() {
  changeLanguage();
});