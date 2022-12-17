
function myFunction() {
  // Declare variables
  var search, ul, li, counter, txtValue, img, caption, input;
  search = document.getElementById('search');
  input = search.value.toLowerCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  img = document.getElementbyId('img');
 caption = img.caption("search") ;

  // Loop through all list items, and hide those who don't match the search query
  for (counter = 0; counter < li.length; i++)
   {
    if(input === caption ) 
    {
      li[p].style.display = "";
    } else {
      li[p].style.display = "none";
    }
  }
}


//    If user input matches 3 letters of the caption text, display that image from the list. 









  


