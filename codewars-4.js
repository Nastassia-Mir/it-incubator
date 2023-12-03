function isIsogram(str){
  for(i=0; i < str.length; i++)
  {
   if (str.toLowerCase().split(str[i]).length-1 > 1) 
   {
     console.log(str)
    return false;
   }  
  }
  
  return true;
}