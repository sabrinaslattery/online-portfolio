
var cells;
var swapped;

function setup() {
   cells = [
	[ 0,0,0,0],
	[ 0,0,0,0],
	[ 0,0,0,0],
	[ 0,0,0,0],
   ]
    const N = 4;
    for (var i=0; i < N; ++i ) {
	for (var j=0; j < N; ++j ) {
	    s = "cell" +i + j ;
	    cells[i][j] = document.getElementById( s );
	}
    }
    for (i=0; i<4; ++i ) {
	for (j=0; j<4; ++j ) {
	    const x = i;
	    const y = j;
	    // xxx fill in the missing codes ...
	    cells[ i ][ j ].addEventListener( "click", function() {
		doClick( x, y );
	    }, false );
	}
    }
    
    placeNumbers();
}

function placeNumbers() {
   var numbers = [];
   var randomLoc;
   var temp;

// xxx Explain the purpose of the following loop. Type your answers below:     
	 // xxx 
	 // xxx 
   for ( var i = 0; i < 16 ; i++ )
      numbers[ i ] = i;
   
// xxx Explain the purpse of the following loop. Type your answers below:     
	 // xxx 
	 // xxx 
   for ( i = 0; i < 16 ; i++ ) { 
      randomLoc = Math.floor( Math.random() * 15 + 1 );
      temp = numbers[ i ];
      numbers[ i ] = numbers[ randomLoc ];
      numbers[ randomLoc ] = temp;
   }

   i = 0;

 // xxx Explain the purpse of the following loop. Type your answers below:     
	 // xxx 
	 // xxx 
   for ( var row = 0; row < cells.length; ++row )
      for ( var col = 0; col < cells[row].length; ++col ) {
         if (numbers[ i ] != 0 )
            cells[ row ][ col ].innerHTML = numbers[ i ];
         else
            cells[ row ][ col ].innerHTML = "";
         ++i;
      }
}

function doClick( row, col ) {
   var top = row - 1;
   var bottom = row + 1;
   var left = col - 1;
   var right = col + 1;

   swapped = false;

   if ( top != -1 && cells[ top ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ top ][ col ] );
   else if ( right != 4 && cells[ row ][ right ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ right ] );
   else if ( bottom != 4 && cells[ bottom ][ col ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ bottom ][ col ] );
   else if ( left != -1 && cells[ row ][ left ].innerHTML == "")
      swap( cells[ row ][ col ], cells[ row ][ left ] );
   else
      alert( "Illegal move." );
}

function swap( firstCell, secondCell ) {
   swapped = true;
   secondCell.innerHTML = firstCell.innerHTML;
   firstCell.innerHTML = "";
}

window.addEventListener( "load", setup, false );


