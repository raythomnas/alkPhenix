
function newCart(){
	document.getElementById('galleryDump').innerHTML 
	+='<div class="col9 centered">'
	+'<div class="col12 centered gallerybox">'
	+'<div class="col12 centeredtext">'
	+'<p>Notch hanten</p>'
	+'<br>'
	+'</div>'
	+'<div class="col12 centered cartitem">'
	+'<img src="images/new/kimono19/kimono.png" alt="kimono" class="col12 imageborder">'
	+'</div>'
	+'<div class="col12 centeredtext cartitem">'
	+'<p>Large<br>1<br>$120<br>Remove<br></p>'
	+'</div>	'
	+'</div>'
	+'<div class="col12 centered gallerybox">'
	+'<div class="col12 centeredtext">'
	+'<hr>'
	+'<p>Crank coat</p>'
	+'<br>'
	+'</div>'
	+'<div class="col12 centered cartitem">'
	+'<img src="images/new/navyjacket/navyjacket.png" alt="navy jacket" class="col12 imageborder">'
	+'</div>'
	+'<div class="col12 centeredtext cartitem">'
	+'<p>Large<br>1<br>$180<br>Remove<br></p>'
	+'</div>	'
	+'</div>'
	+'<div class="col12 centered gallerybox">'
	+'<div class="col12 centeredtext cartsummary">'
	+'<hr>'
	+'<p>$300 <br> </p>'
	+'<br>	'
	+'<p href="" id="checkOutButton">CHECKOUT</p> '
	+'<br>'
	+'</div>'
	+'</div>'

	document.getElementById('checkOutButton').addEventListener('click', function(){
  	alert('checkout function to come :)');
});

};
