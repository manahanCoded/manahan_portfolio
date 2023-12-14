const FullNameInput = document.getElementById('FullNameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const dobInput = document.getElementById('dobInput');
const formProgress = document.getElementById('formProgress');

FullNameInput.addEventListener('input',function(){
    validateFullname(this);
});
ageInput.addEventListener('input',function(){
    validateAge(this);
});
emailInput.addEventListener('input',function(){
    validateEmail(this);
});
dobInput.addEventListener('input',function(){
    validateInput(this);
});

function validateFullname(field) {
    if (/^[A-Za-z\s\-.]+$/.test(field.value)) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
    updateProgressBar();
  }

function validateAge(field){
    if (/^[0-9]+$/.test(field.value)){
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      } else {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
      }
      updateProgressBar();
    }

    function validateEmail(field) {
        const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (emailRegex.test(field.value)) {

          field.classList.remove('is-invalid');
          field.classList.add('is-valid');
        } else {

          field.classList.remove('is-valid');
          field.classList.add('is-invalid');
        }
        updateProgressBar();
      }

      function validateDob(field) {
        if (moment(field.value, 'YYYY-MM-DD').isValid()) {
          const minAge = 18; 
          const maxAge = 100; 
          const userAge = moment().diff(moment(field.value, 'YYYY-MM-DD'), 'years');
          if (userAge >= minAge && userAge <= maxAge) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
          } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            const errorMessage = `Please enter a date within the range of ${minAge}-${maxAge} years.`;
            field.setCustomValidity(errorMessage); 
          }
        } else {
          field.classList.remove('is-valid');
          field.classList.add('is-invalid');
          field.setCustomValidity('Please enter a valid date.'); 
        }
        updateProgressBar();
      }

      function validateInput(field) {
        if (field.value.trim() === "") {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
        updateProgressBar();
    }

const inputs = document.querySelectorAll('.form-control');

function updateProgressBar() {
    const inputs = document.querySelectorAll('.form-control');
    const validInputs = Array.from(inputs).filter(input => input.classList.contains('is-valid')).length;
    const totalInputs = inputs.length;
    const progress = (validInputs / totalInputs) * 100;
    formProgress.style.width = progress + '%';
    formProgress.textContent = progress + ' %';
}
