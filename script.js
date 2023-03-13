// Your Script here.
function rot13(str) {
  var decodedStr = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // A-Z range
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      decodedStr += str[i];
    }
  }
  return decodedStr;
}
