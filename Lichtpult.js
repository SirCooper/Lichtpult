 function fire(c,v){
    var p = 'c';
    if (c.charAt(0)=='w') {p='w'; c=c.substr(1);}
    if (c.charAt(0)=='b') {p='b'; c=c.substr(1);}
    var request = new XMLHttpRequest(); 
    request.open('GET', 'ajax?'+p+'='+c+'&v='+v, true);
    request.send(null);
    if (p=='w'||c=='black'||c=='rnd'||c=='del'||c=='sceneload'){GetSwitchState(1);}
    var q= document.getElementById(c).innerHTML = v.toString();  }
  function GetSwitchState(s) {
   nocache = '&nocache='+ Math.random() * 1000000;
   var request = new XMLHttpRequest(); 
   request.onreadystatechange = function() {
   if (this.readyState == 4) {
    if (this.status == 200) {
     if (this.responseText != null) {
      var value=this.responseText.split(',')
      document.getElementById('sec').innerHTML = Math.floor(value[0]%60);
      if (value[0]>60){document.getElementById('min').innerHTML = Math.floor(value[0]/60%60);}
      if (value[0]>3600){document.getElementById('hour').innerHTML = Math.floor(value[0]/3600%24);}
      if (value[0]>86400){document.getElementById('day').innerHTML = Math.floor(value[0]/86400%7);}
      if (value[0]>604800){document.getElementById('week').innerHTML = Math.floor(value[0]/604800%52);}
      for (var j = 1; j<=26; j++){if (document.getElementById(j)) {document.getElementById(j).value = value[j];}}
      document.getElementById('master').value = value[27];
      if (document.getElementById('bblack')) {if (value[28]==1){document.getElementById('bblack').className ='functionOn';} else {document.getElementById('bblack').className ='';} };
      document.getElementById('sec').style.color = 'dimgray';
   }}}
   else {document.getElementById('sec').style.color = 'red';}
   }
   request.open('GET', 'ajax?p=/.js' + nocache, true);
   request.send(null);
   if (s==0) setTimeout('GetSwitchState(0)', 5000);
   };
