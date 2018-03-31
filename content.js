var url = window.location.href;
var test = url.substring(url.length-3, url.length);


$(window).bind('dblclick', function(){

if(test === 'jpg' || test === 'png' || test === 'peg' || test === 'svg'){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function () {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = "TEMP-1"; //filename
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove()
  };
  xhr.open('GET', url);
  xhr.send();
}

});
