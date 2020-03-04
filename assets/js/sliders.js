// Get and store divs for sliders and amounts from HTML into variables
var sliderLoanTerm = document.getElementById('sliderLoanTerm');
var loanAmount = [document.getElementById('loanAmount')];
var sliderLoanAmount = document.getElementById('sliderLoanAmount');
var loanTerm = [document.getElementById('loanTerm')];

// Create loan amount slider and set options
noUiSlider.create(sliderLoanAmount, {
  start: 50000,
  step: 10000,
  connect: 'lower',
  range: {
    min: 10000,
    max: 100000
  }
});

// Create loan term slider and set options
noUiSlider.create(sliderLoanTerm, {
  range: {
    min: 12,
    '33.3%': 18,
    '66.6%': 24,
    max: 36
  },
  snap: true,
  connect: 'lower',
  start: 24
});

// Sliders' values are inserted into HTML. Decimal places removed and added prefixed ("$" and "months") accordingly
sliderLoanAmount.noUiSlider.on('update', function(values, handle) {
  loanAmount[handle].innerHTML = `$${Math.round(values[handle])}`;
});

sliderLoanTerm.noUiSlider.on('update', function(values, handle) {
  loanTerm[handle].innerHTML = `${Math.round(values[handle])} months`;
});

// Restricts Loan Term slider's selection to 24 or 36 months if Loan Amount slider's value is more than 50.000
sliderLoanAmount.noUiSlider.on('update', function(values) {
  if (values > 50000) {
    sliderLoanTerm.noUiSlider.updateOptions({
      range: {
        min: 24,
        max: 36
      }
    });
  } else {
    sliderLoanTerm.noUiSlider.updateOptions({
      range: {
        min: 12,
        '33.3%': 18,
        '66.6%': 24,
        max: 36
      }
    });
  }
});
