// Get the form elements and the submit button
const reading_intervention_recommendation = document.getElementById('reading_intervention_recommendation');
const phonemic_awareness_intervention_recommendation = document.getElementById('phonemic_awareness_intervention_recommendation');
const form = document.getElementById('myForm');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submitButton');
const csrf_middleware_token = document.querySelector('[name=csrfmiddlewaretoken]')
const language_proficiency_panel = document.getElementById('language_proficiency_panel');
const language_proficiency_L1 = document.getElementById('language_proficiency_L1');
const language_proficiency_L2 = document.getElementById('language_proficiency_L2');
const reading_connected_text_panel = document.getElementById('reading_connected_text_panel');
const reading_connected_text_L1 = document.getElementById('reading_connected_text_L1');
const reading_connected_text_L2 = document.getElementById('reading_connected_text_L2');
const reading_words_panel = document.getElementById('reading_words_panel');
const reading_words_L1 = document.getElementById('reading_words_L1');
const reading_words_L2 = document.getElementById('reading_words_L2');
const decoding_panel = document.getElementById('decoding_panel');
const decoding_L1 = document.getElementById('decoding_L1');
const decoding_L2 = document.getElementById('decoding_L2');
const phonemic_awareness_panel = document.getElementById('phonemic_awareness_panel');
const phonemic_awareness_L1 = document.getElementById('phonemic_awareness_L1');
const phonemic_awareness_L2 = document.getElementById('phonemic_awareness_L2');


function clearRecommendation() {
  reading_intervention_recommendation.innerText = '';
  phonemic_awareness_intervention_recommendation.innerText = '';

}

// Function to reset all options to default
function resetDropdowns() {
  resetLanguageProficiencyDropdowns();
  resetPhonemicAwarenessDropdowns();
  resetReadingConnectedTextDropdowns();
  reading_connected_text_panel.classList.add('d-none');
  reading_words_panel.classList.add('d-none');
  decoding_panel.classList.add('d-none');

  submitButton.disabled = true;
  clearRecommendation();
}

function resetLanguageProficiencyDropdowns() {
  language_proficiency_L1.value = 'default';
  language_proficiency_L2.value = 'default';
  resetReadingWordsDropdowns();
}

function resetPhonemicAwarenessDropdowns() {
  phonemic_awareness_L1.value = 'default';
  phonemic_awareness_L2.value = 'default';
  resetReadingWordsDropdowns();
}

function resetReadingConnectedTextDropdowns() {
  reading_connected_text_L1.value = 'default';
  reading_connected_text_L2.value = 'default';
  resetReadingWordsDropdowns();
}

function resetReadingConnectedTextDropdowns() {
  reading_connected_text_L1.value = 'default';
  reading_connected_text_L2.value = 'default';
  resetReadingWordsDropdowns();
}

function resetReadingWordsDropdowns() {
  reading_words_L1.value = 'default';
  reading_words_L2.value = 'default';
  resetDecodingDropdowns();
}

function resetDecodingDropdowns() {
  decoding_L1.value = 'default';
  decoding_L2.value = 'default';
}

// Event listener for dropdown changes
function onLanguageProficiencyChange() {
  clearRecommendation();
  if (language_proficiency_L1.value !== 'default' && language_proficiency_L2.value !== 'default') {
    reading_connected_text_panel.classList.remove('d-none');
  } else {
    submitButton.disabled = true;
    reading_connected_text_panel.classList.add('d-none');

  }
}
function onReadingConnectedTextChange() {
  clearRecommendation();
  if (reading_connected_text_L1.value !== 'default' && reading_connected_text_L2.value !== 'default') {
    if (reading_connected_text_L1.value === 'not_accurate' && reading_connected_text_L2.value === 'not_accurate') {
      submitButton.disabled = true;
      resetReadingWordsDropdowns();
      reading_words_panel.classList.remove('d-none');
    }
    else {
      submitButton.disabled = false;

      reading_words_panel.classList.add('d-none');
      decoding_panel.classList.add('d-none');
    }
  } else {
    submitButton.disabled = true;
    reading_words_panel.classList.add('d-none');
    decoding_panel.classList.add('d-none');
    resetReadingWordsDropdowns();
  }
}
function onReadingWordsChange() {
  clearRecommendation();
  if (reading_words_L1.value !== 'default' && reading_words_L2.value !== 'default') {
    if (reading_words_L1.value === 'not_accurate' && reading_words_L2.value === 'not_accurate') {
      submitButton.disabled = true;
      resetDecodingDropdowns();
      decoding_panel.classList.remove('d-none');
    } else {
      submitButton.disabled = false;
    }
  } else {
    submitButton.disabled = true;
    decoding_panel.classList.add('d-none');
    resetDecodingDropdowns();
  }
}
function onDecodingChange() {
  clearRecommendation();
  if (decoding_L1.value !== 'default' && decoding_L2.value !== 'default') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
function onPhonemicAwarenessChange() {
  clearRecommendation();
}

// Event listener for the clear button
clearButton.addEventListener('click', function () {
  // Reset the dropdown to the default option
  resetDropdowns();
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData();

  formData.append('csrfmiddlewaretoken', csrf_middleware_token.value);
  formData.append('language_proficiency_L1', language_proficiency_L1.value);
  formData.append('language_proficiency_L2', language_proficiency_L2.value);
  formData.append('reading_connected_text_L1', reading_connected_text_L1.value);
  formData.append('reading_connected_text_L2', reading_connected_text_L2.value);
  formData.append('reading_words_L1', reading_words_L1.value);
  formData.append('reading_words_L2', reading_words_L2.value);
  formData.append('decoding_L1', decoding_L1.value);
  formData.append('decoding_L2', decoding_L2.value);
  formData.append('phonemic_awareness_L1', phonemic_awareness_L1.value);
  formData.append('phonemic_awareness_L2', phonemic_awareness_L2.value);

  console.log('language_proficiency_L1:', language_proficiency_L1.value);
  for (var [ key, value ] of formData.entries()) {
    console.log(key, value);
  }

  fetch('formResponse/', {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': csrf_middleware_token.value,
    },
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('reading_intervention_recommendation').innerText = data.reading_intervention_recommendation;
      document.getElementById('phonemic_awareness_intervention_recommendation').innerText = data.phonemic_awareness_intervention_recommendation;
    })
    .catch(error => {
      console.error('Error:', error);
    });
})


// Event listener for dropdowns
reading_connected_text_L1.addEventListener('change', onReadingConnectedTextChange);
reading_connected_text_L2.addEventListener('change', onReadingConnectedTextChange);
reading_words_L1.addEventListener('change', onReadingWordsChange);
reading_words_L2.addEventListener('change', onReadingWordsChange);
decoding_L1.addEventListener('change', onDecodingChange);
decoding_L2.addEventListener('change', onDecodingChange);
phonemic_awareness_L1.addEventListener('change', onPhonemicAwarenessChange);
phonemic_awareness_L2.addEventListener('change', onPhonemicAwarenessChange);
language_proficiency_L1.addEventListener('change', onLanguageProficiencyChange);
language_proficiency_L2.addEventListener('change', onLanguageProficiencyChange);