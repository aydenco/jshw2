// // Timmy & Sarah think they are in love, but around where they live, they will only know
// once they pick a flower each. If one of the flowers has an even number of petals and the
// other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if
// they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0 && flower2 % 2 != 0){
      return true
    } else if ((flower1 % 2 != 0 && flower2 % 2 == 0)){
      return true
    } else {
      return false
    }
  }


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

  function boolToWord( bool ){
    if (bool == true){
      return "Yes"
    } else {
      return "No"
    }
  }