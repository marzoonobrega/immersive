$(document).ready(function() {

  $('.submit_on_enter').keydown(function(event) {
    // enter has keyCode = 13, change it if you want to use another button
    if (event.keyCode == 13) {
      this.form.submit();
      return false;
    }
  });

});








document.getElementById('submit01').onsubmit = function() {
    if (!this.FileName.value) {
        alert ("Please Enter a File Name");
        return false;
    }
};


//On submit run this code.


function submitName() {
    alert("The form was submitted");
}



