//A JS library
function encrypt(text, key) {
  //console.log("----------------");
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� ";
  //var chars = sessionStorage.getItem("charStorage");
  //var chars = "abcdefghijklmnopqrstuvwxyz"
  var output = "";
  var keyNum = 0;
  var char = "";
  var keychar = "";
  var finalchar = "";
  for (var i = 0; i < text.length; i++) {
    char = chars.indexOf((text.substring(i, i+1)))+parseInt(sessionStorage.getItem("charCount"));
    keychar = (chars.indexOf(key.substring(keyNum, keyNum+1)));
    finalchar = chars[parseFloat(char)-parseFloat(keychar)];
    output = output + finalchar;
    if (keyNum >= key.length-1) {
      keyNum = 0;
    } else {
      keyNum++;
    }
  }
  return output;
}

function decrypt(text, key) {
  //console.log("----------------");
  //var text = document.getElementById("text").value;
  //var key = document.getElementById("key").value;
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!�$%^&_={}:;@'~#<,>./|`� ";
  //var chars = sessionStorage.getItem("charStorage");
  var output = "";
  var keyNum = 0;
  var char = "";
  var keychar = "";
  var finalchar = "";
  for (var i = 0; i < text.length; i++) {
    char = chars.indexOf((text.substring(i, i+1)));
    //console.log("char "+char);
    //keychar = chars.search(key.substring(keyNum, KeyNum+1));
    //document.getElementById("output").innerHTML = key.substring(keyNum, keyNum+1);
    keychar = (chars.indexOf(key.substring(keyNum, keyNum+1)))+parseInt(sessionStorage.getItem("charCount"));
    //console.log("keychar "+keychar);
    //console.log("char - keychar "+parseFloat(char)-parseFloat(keychar));
    finalchar = chars[parseFloat(char)+parseFloat(keychar)];
    output = output + finalchar;
    if (keyNum >= key.length-1) {
      keyNum = 0;
    } else {
      keyNum++;
    }
  }
  return output;
}
