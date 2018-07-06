function addVariable {

}

function addField {

}

function removeVariable {

}

function removeField {

}


function getAPI() {
  var url = document.getElementById('apiurl');

  $.getJSON(url, function(results) {
    $.each(results, function(key, val) {
      console.log(key + "  "  +  results.key);
    }
    return 0;
  });
  alert('URL is invalid');
}
