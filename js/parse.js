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

var counter = 0;

function getAPI() {
  document.getElementById('response-display').innerHTML = "";
  var sourceUrl = document.getElementById('apiurl').value;

  if (validUrl(sourceUrl)){
    $.ajax({
      url: sourceUrl,
      dataType: "json",
      success: function(data) {
        /*for(var key in data) {
          if (data.hasOwnProperty(key)) {
            processEntry(key, data[key]);

          }
        }
        */
        processEntry(null, data, document.getElementById('response-display'));
        // potentially change this to a single call top processEntry with key=null and value=data
      }
    });
  }
  else {

  }
}


function processEntry(key, value, parent) {
  var type = typeof(value);
  switch(type) {
    case "string":
    case "number":
    case "boolean":
      diplayField(key, value, parent);
      break;
    case "object":
      if (Array.isArray(value)) {
        displayArray(key, value, parent);
      } else {
        for(var key1 in value) {
          // Create the dropdown button element
          var select = document.createElement("button");
          select.class = "dropfield";
          var unid = "field" + coutner;
          counter++;
          select.id = unid;
          select.onclick = "toggleDisplay(" + unid + ")";
          if(!(key == null)) {
            select.innerHTML = key;
          } else {
            select.innerHTML = "root";
          }
          parent.appendChild(select);


          if(data.hasOwnProperty(key1)) {
            processEntry(key1, value[key1], select)
          }
        }
      }
      break;
  }
}

function displayField(key, value, parent) {

  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var val = document.createElement("td");
  var box = document.createElement("td");
  var check = document.createElement("input");

  check.type = "checkbox";
  val.innerHTML = key + "  : " + value;

  box.appendChild(check);
  tr.appendChild(val);
  tr.appendChild(box);
  table.appendChild(tr);
  parent.appendChild(table);
}

function displayArray(key, value, parent) {
  if(value.length > 0) {
    key = "[" + key +"]";
    processEntry(key, value[0], parent);
  }
}
