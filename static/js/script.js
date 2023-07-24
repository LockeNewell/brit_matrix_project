// Get the form elements and the submit button
const form = document.getElementById('myForm');
const dropdownL1 = document.getElementById('id_l1_choice');
const dropdownL2 = document.getElementById('id_l2_choice');
const submitButton = document.getElementById('submitButton');

// Function to check if both dropdowns have a non-default option selected
function isFormValid() {
  return dropdownL1.value !== 'default' && dropdownL2.value !== 'default';
}
// Function to check if both dropdowns have a non-default option selected
function isFormClearable() {
  return dropdownL1.value !== 'default' || dropdownL2.value !== 'default';
}

// Event listener for dropdown changes
function onDropdownChange() {
  clearButton.disabled = !isFormClearable(); // Enable/disable the submit button based on form validity
  submitButton.disabled = !isFormValid(); // Enable/disable the submit button based on form validity
}

// Event listeners for dropdown changes
dropdownL1.addEventListener('change', onDropdownChange);
dropdownL2.addEventListener('change', onDropdownChange);