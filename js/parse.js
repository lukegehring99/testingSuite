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
  return !(url == '');
}

var counter = 0;

function getAPI() {
  document.getElementById('response-display').innerHTML = "";
  counter = 0;
  var sourceUrl = document.getElementById('apiurl').value;

  console.log("called");
  console.log(sourceUrl);
  console.log(validUrl(sourceUrl));
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
	console.log("success function called");
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
      displayField(key, value, parent);
      break;
    case "object":
      if (Array.isArray(value)) {
        displayArray(key, value, parent);
      } else {

        // Create the dropdown button element
        var select = document.createElement("button");
        select.classList.add("dropfield");
        var unid = "field" + counter;
        counter++;
        select.id = unid;
        select.onclick = function(){toggleDisplay(this.id);};
        if(!(key == null)) {
          select.innerHTML = key;
        } else {
          select.innerHTML = "root";
        }
        parent.appendChild(select);


	// Create the element to store the content
        var place = document.createElement("div");
        place.classList.add("dropdown-content");
        place.id = unid + "list";

        parent.appendChild(place);


        for(var key1 in value) {
          if(value.hasOwnProperty(key1)) {
            console.log(key1)
            processEntry(key1, value[key1], place)
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

  check.classList.add("selection-box");
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
