function isEmpty ( obj ) {
   for ( key in obj ) {
   return false;
   }
 return true;
 }
    
    var schedule = {};
    
alert ( isEmpty(schedule) );
    
schedule["8:30"] = "подъем";
    
alert ( isEmpty(schedule) );