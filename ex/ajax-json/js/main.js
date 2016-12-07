function ajax_get(url, callback) {
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                callback(data);
                console.log(data);
            } catch(err) {
                console.log(err.message + " in " + xhr.responseText);
                return;
            }
            
        }
    };
}

var array = [];
function find(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }

  return false;
}


var list = document.getElementById('select');
ajax_get('js/data.json', function(data) {
       for (var i=0; i < data.flights.length; i++) {
            text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
            text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
            text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';
            if (find(array, data.flights[i].carrier)) {
                continue;
            } else {
                list.innerHTML += '<option>' + data.flights[i].carrier + '</option>';
                array.push(data.flights[i].carrier);
            }
       }
});

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

var select = document.getElementById('select');
select.addEventListener('change', onChange);

function onChange() {
    text.innerHTML = '';
    var selectText = getSelectedText(this.getAttribute('id'));
    ajax_get('js/data.json', function(data) {
           for (var i=0; i < data.flights.length; i++) {
            if (selectText == 'All companies') {
                text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
                text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
                text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';
            } else {
               if (data.flights[i].carrier == selectText) {
                    // text.innerHTML += 'Id: ' + data.flights[i].id + '<br>';
                    text.innerHTML += data.flights[i].direction.from + ' - ' + data.flights[i].direction.to + '<br>';
                    text.innerHTML += 'Arrival: ' + data.flights[i].arrival + '<br>';
                    text.innerHTML += 'Departure: ' + data.flights[i].departure + '<br><br>';

               } else { continue;}
            }
        }
    });
}