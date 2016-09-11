 function checkSpam(str) {
     var str = str.toLowerCase();
     return !!( ~str.indexOf( "viagra" ) || ~str.indexOf( "xxx" ) );
     
 }
 
 alert ( checkSpam('buy er now') );