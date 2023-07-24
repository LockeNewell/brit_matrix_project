// Get the form elements and the submit button
const result = document.getElementById('result');
const form = document.getElementById('myForm');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submitButton');
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


// const dropdownL2 = document.getElementById('id_l2_choice');

// Function to reset all options to default
function resetDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="L1"], [id$="L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
  reading_connected_text_panel.classList.add('d-none');
  reading_words_panel.classList.add('d-none');
  decoding_panel.classList.add('d-none');

  submitButton.disabled = true;
  result.innerText = '';
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
  result.innerText = '';
  if (language_proficiency_L1.value !== 'default' && language_proficiency_L2.value !== 'default') {
    reading_connected_text_panel.classList.remove('d-none');
  } else {
    submitButton.disabled = true;
    reading_connected_text_panel.classList.add('d-none');

  }
}
function onReadingConnectedTextChange() {
  result.innerText = '';
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
  result.innerText = '';
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
  result.innerText = '';
  if (decoding_L1.value !== 'default' && decoding_L2.value !== 'default') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
function onPhonemicAwarenessChange() {
  result.innerText = '';
}

// Event listener for the clear button
clearButton.addEventListener('click', function () {
  // Reset the dropdown to the default option
  resetDropdowns();
});


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