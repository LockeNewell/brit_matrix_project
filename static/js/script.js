// Get the form elements and the submit button
const form = document.getElementById('myForm');
const clearButton = document.getElementById('clearButton');
const submitButton = document.getElementById('submitButton');
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
const language_proficiency_panel = document.getElementById('language_proficiency_panel');
const language_proficiency_L1 = document.getElementById('language_proficiency_L1');
const language_proficiency_L2 = document.getElementById('language_proficiency_L2');


// const dropdownL2 = document.getElementById('id_l2_choice');

// Function to reset all options to default
function resetDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="L1"], [id$="L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
  reading_words_panel.classList.add('d-none');
  decoding_panel.classList.add('d-none');
  phonemic_awareness_panel.classList.add('d-none');
  language_proficiency_panel.classList.add('d-none');

  submitButton.disabled = true;
}
// Function to reset all reading words options to default
function resetReadingWordsDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="reading_words_L1"]', '[id$="reading_words_L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
  resetDecodingDropdowns();
}
// Function to reset all reading words options to default
function resetDecodingDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="decoding_L1"]', '[id$="decoding_L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
}
// Function to reset all phonemic_awareness options to default
function resetPhonemicAwarenessDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="phonemic_awareness_L1"]', '[id$="phonemic_awareness_L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
  resetLanguageProficiencyDropdowns();
}
// Function to reset all language_proficiency options to default
function resetLanguageProficiencyDropdowns() {
  const dropdowns = form.querySelectorAll('[id$="language_proficiency_L1"]', '[id$="language_proficiency_L2"]');
  dropdowns.forEach((dropdown) => {
    dropdown.value = 'default';
  });
}


// Event listener for the clear button
clearButton.addEventListener('click', function () {
  // Reset the dropdown to the default option
  resetDropdowns();
});

/* Function to check if both dropdowns have a non-default option selected
function isFormValid() {
  return dropdownL1.value !== 'default' && dropdownL2.value !== 'default';
}
// Function to check if both dropdowns have a non-default option selected
function isFormClearable() {
  return dropdownL1.value !== 'default' || dropdownL2.value !== 'default';
}
*/


// Event listener for dropdown changes
function onReadingConnectedTextChange() {
  if (reading_connected_text_L1.value !== 'default' && reading_connected_text_L2.value !== 'default') {
    if (reading_connected_text_L1.value === 'not_accurate' && reading_connected_text_L2.value === 'not_accurate') {
      resetReadingWordsDropdowns();
      reading_words_panel.classList.remove('d-none');
      resetPhonemicAwarenessDropdowns();
      phonemic_awareness_panel.classList.add('d-none');
      language_proficiency_panel.classList.add('d-none');
    }
    else {
      phonemic_awareness_panel.classList.remove('d-none');
      reading_words_panel.classList.add('d-none');
      decoding_panel.classList.add('d-none');
    }
  } else {
    reading_words_panel.classList.add('d-none');
    decoding_panel.classList.add('d-none');
    phonemic_awareness_panel.classList.add('d-none');
    language_proficiency_panel.classList.add('d-none');
    resetReadingWordsDropdowns();
    resetPhonemicAwarenessDropdowns();
  }
}
function onReadingWordsChange() {
  if (reading_words_L1.value !== 'default' && reading_words_L2.value !== 'default') {
    if (reading_words_L1.value === 'not_accurate' && reading_words_L2.value === 'not_accurate') {
      resetDecodingDropdowns();
      decoding_panel.classList.remove('d-none');
      resetPhonemicAwarenessDropdowns();
      phonemic_awareness_panel.classList.add('d-none');
      language_proficiency_panel.classList.add('d-none');
    }
    else {
      phonemic_awareness_panel.classList.remove('d-none');
      decoding_panel.classList.add('d-none');
    }
  } else {
    decoding_panel.classList.add('d-none');
    phonemic_awareness_panel.classList.add('d-none');
    language_proficiency_panel.classList.add('d-none');
    resetDecodingDropdowns();
    resetPhonemicAwarenessDropdowns();
  }
}
function onDecodingChange() {
  if (decoding_L1.value !== 'default' && decoding_L2.value !== 'default') {
    phonemic_awareness_panel.classList.remove('d-none');
  } else {
    phonemic_awareness_panel.classList.add('d-none');
    language_proficiency_panel.classList.add('d-none');
    resetPhonemicAwarenessDropdowns();
  }
}
function onPhonemicAwarenessChange() {
  if (phonemic_awareness_L1.value !== 'default' && phonemic_awareness_L2.value !== 'default') {
    language_proficiency_panel.classList.remove('d-none');
  } else {
    language_proficiency_panel.classList.add('d-none');
    resetLanguageProficiencyDropdowns();
  }
}
function onLanguageProficiencyChange() {
  if (language_proficiency_L1.value !== 'default' && language_proficiency_L2.value !== 'default') {

    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;

  }
}


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