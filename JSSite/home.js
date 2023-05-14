let selectedSection = 'section1';
const DISPLAY_BLOCK = 'display-block';


function onClickSecbtn(id) {
    if (selectedSection === id) {
        return;
    }
    document.getElementById(id).classList.add('display-block');
    document.getElementById(selectedSection).classList.remove('display-block');
    selectedSection = id;
}

function validateNumber() {
    var id = document.getElementById("id").value;
    if (isNaN(id)) {
      alert("Please enter only numbers.");
      
      return false;
    }
    return true;
  }
