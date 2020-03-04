# loan-company-front-page

A responsive website prototype for a loan company. Created using HTML, CSS, JavaScript, Bootstrap 4 and noSliderUi.

# noSliderUi

This plugin is used to create two sliders inside the header container.
The sliders have a functionality where if the value of Loan Amount slider
is larger than 50k then the Loam Term slider will be limited to a
selection of only 24 and 36 months.

CSS for these sliders can be found in assets/css/main.css and
vendors/noUiSlider/nouislider.css.
JS files of the sliders are under assets/js/sliders.js and
vendors/noUiSlider/nouislider.min.js.

# Form validation

The website has form validation which is using regular expressions that
can be found in the index.html inside the respective HTML tags/elements.
The website has additional validation for for user's full name input. It
only allows atleast two different words.

Files for validation are found in assets/js/formValidation.js,
assets/js/fullNameValidator.js, while regex rules are in the index.html.

# Clouds

Cloud effect is created from assets/css/clouds.css file. It is disabled
on smaller screens because header elements take up the majority of the
view and would cover up the clouds anyway. That saves performance when the website is viewed on slow networks.

# Graphical assets

Those are located under assets/icons and assets/images.
