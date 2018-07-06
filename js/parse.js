function addVariable() {

}

function addField() {

}

function removeVariable() {

}

function removeField() {

}

function validUrl(url) {
  url = url.replace(/\s/g, '');
  return url == '';
}

function getAPI() {
  var sourceUrl = document.getElementById('apiurl').value;

  if validUrl(sourceUrl){
    $.ajax({
      url: sourceUrl,
      dataType: "json",
      success: function(data) {
        for(var key in data) {
          if (data.hasOwnProperty(key)) {
            processEntry(key, data[key]);

          }
        }
        // potentially change this to a single call top processEntry with key=null and value=data
      }
    });
  }
  else {

  }
}


function processEntry(key, value) {
  var type = typeof(value);
  switch(type) {
    case "string":
      break;
    case "number":
      break;
    case "boolean":
      break;
    case "object":
      if (Array.isArray(value)) {
        displayArray(key, value);
      } else {
        for(var key2 in value) {
          if(data.hasOwnProperty(key2))
          processEntry(key2, value[key2])
        }
      }
      break;
  }
}

function displayField(key, value) {

}
function displayArray(key, value) {

}
