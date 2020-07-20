window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("title").className = "hideme";
    document.getElementById("logo").className = "hideme";
    document.getElementById("header").style.height = "50px";
    document.getElementById("headerbg").style.height = "50px";
     document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("title").className = "headerbrandname centeredtext";
    document.getElementById("logo").className = "centered bottom";
    document.getElementById("header").style.height = "120px";
    document.getElementById("headerbg").style.height = "120px";
    document.getElementById("myBtn").style.display = "none";
  }                               
}

// about section Js

$("#aboutNav").click(function() {
  $("#cart, #menuBox, #shopBack, #lookBookTitle",).css({
    "display" : "none",
  });
  window.scrollTo(0, 0);
  document.getElementById('galleryDump').innerHTML = "";
  showAbout();
});

//lookbook section js

$("#lookBookNav, #title").click(function() {
  $("#lookBookTitle",).css({
    "display" : "block",
  });
  $("#cart, #menuBox, #shopBack",).css({
    "display" : "none",
  });
  document.getElementById('galleryDump').innerHTML = "";
  for (i = 0; i < lookbook.length; i++) {
    showOptions()
  }
  window.scrollTo(0, 0);
});

//Return to top button

document.getElementById('myBtn').addEventListener('click', function(){
  window.scrollTo(0, 0);
});

//lookbook 

for (i = 0; i < lookbook.length; i++) {
  showOptions()
}

function showOptions(){ 
  document.getElementById('galleryDump').innerHTML 
  +='<div class="col12">'
  +'<img src="'+ lookbook[i].link +'" alt="'+ lookbook[i].description +'" class="col12 imageborder centered gallerybox">'
  +'</div>'
};

//activates when shop at top menu is clicked

document.getElementById('shopAll').addEventListener('click', function(){
  
  $("#cart, #menuBox",).css({
    "display" : "block",
  });
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) {
  showProducts()
  }
  window.scrollTo(0, 0);
});

document.getElementById('shopBack').addEventListener('click', function(){
  
  $("#cart, #menuBox",).css({
    "display" : "block",
  });
  $("#shopBack",).css({
    "display" : "none",
  });
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) {
  showProducts()
  }
  window.scrollTo(0, 0);
});


//activates when ALL is clicked in side menu

document.getElementById('shopAllMenu').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) {
  showProducts()
  }
});

//activates when ALL OUTER is clicked in side menu

document.getElementById('shopAllOuter').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].category === "outer") {
  showProducts()
  }
});

//activates when ALL SHIRT is clicked in side menu

document.getElementById('shopAllShirt').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].category === "shirt") {
  showProducts()
  }
});

//activates when ALL PANT is clicked in side menu

document.getElementById('shopAllPant').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].category === "pant") {
  showProducts()
  }
});


//activates when ALL SHIRT is clicked in side menu

document.getElementById('shopAllAcc').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].category === "acc") {
  showProducts()
  }
});


//activates when NEW  is clicked in side menu

document.getElementById('shopAllNew').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].new === true) {
  showProducts()
  }
});

//activates when NEW SHIRT is clicked in side menu

document.getElementById('shopNewShirt').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if((products[i].new === true) && (products[i].category === "shirt")) {
  showProducts()
  }
});

//activates when NEW OUTER is clicked in side menu

document.getElementById('shopNewOuter').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if((products[i].new === true) && (products[i].category === "outer")) {
  showProducts()
  }
});

//activates when NEW PANT is clicked in side menu

document.getElementById('shopNewPant').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if((products[i].new === true) && (products[i].category === "pant")) {
  showProducts()
  }
});

//activates when NEW ACC is clicked in side menu

document.getElementById('shopNewAcc').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if((products[i].new === true) && (products[i].category === "acc")) {
  showProducts()
  }
});

//activates when SALE is clicked in side menu

document.getElementById('shopSale').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) 
    if(products[i].sale === true) {
  showProducts()
  }
});

function showProducts(){
  document.getElementById('galleryDump').innerHTML 
  +='<div class="bglightgray left shopitembox newitem allitem shirts" onclick="singleProduct(this.id)" id="'+ products[i].productId +'">'
  +'<div class="col11 centered gallerybox">'
  +'<img src="'+ products[i].ImgLink +'" alt="alkjacket" class="col12 imageborder bggray itemphoto centered">'
  +'</div>'
  +'<div class="black centeredtext">'
  +'<p>'+ products[i].name +'</p></a>'
  +'</div>'
  +'</div>'
};

// item page

// var cost = 0;
// var prod = "";
// var total = "";

function singleProduct(clicked_id){
  document.getElementById('galleryDump').innerHTML = ""
  var product = clicked_id;
    $("#shopBack",).css({
    "display" : "block",
  });
  for (i = 0; i < products.length; i++) {
    if (products[i].productId === product) {
      document.getElementById('galleryDump').innerHTML 
      +='<div class="col9 centered">'
      +'<h3 class="centeredtext">'+ products[i].name +'</h3>'
      +'<br>'
      +'</div>'
      +'<div class="col9 centered homegallery">'
      +'<div class="col12 homegallery centered mainitemboxing">'
      +'<div class="col12 itemmainphoto homegallery left">'
      +'<img src="'+ products[i].ImgLink +'" class="col12 bggray imageborder">'
      +'</div>'
      +'<div class="itemdescriptionbox homegallery"> '
      +'<p>'+ products[i].description +'</p>'
      +'<br>'
      +'<p>'+ products[i].description2 +'</p>'
      +'<br>'
      +'<p>'+ products[i].material +'</p>'
      +'<br>'
      +'<p>'+ products[i].measurements +'</p>'
      +'<br>'
      +'<div class="col12">'
      +'<div class="col4 left">'
      +'<p>$'+ products[i].price +'</p>'
      +'<br>'
      +'</div>'
      +'<div class="col4 left">'
      +'<p>Sizes</p>'
      +'<form action="/action_page.php" class="col12">'
      +'<select name="size">'
      +'<option value="xs">Extra-Small</option>'
      +'<option value="s">Small</option>'
      +'<option value="m" selected>Medium</option>'
      +'<option value="l">Large</option>'
      +'<option value="xl">Extra-Large</option>'
      +'</select>'
      +'</form>'
      +'</div>'
      +'<div class="col4 left">'
      +'<p>number</p>'
      +'<form action="/action_page.php" class="col12">'
      +'<select name="number" id="productNum">'
      +'<option value="1" selected>1</option>'
      +'<option value="2">2</option>'
      +'<option value="3">3</option>'
      +'<option value="4">4</option>'
      +'<option value="4">5</option>'
      +'</select>'
      +'</form>'
      +'</div>'
      +'</div>'
      +'<p class="col12 left addCart"> add to cart </p>'
      +'</div>'
      +'</div>'
      +'<br>'
      +'<div class="col12 left homegallery itemotherphotos">'
      +'<img src="'+ products[i].Img1 +'" class="col12 bggray imageborder">'
      +'</div>'
      +'<div class="col12 right homegallery toppaddingonly itemotherphotos">'
      +'<img src="'+ products[i].Img2 +'" class="col12 bggray imageborder">'
      +'</div>'
      +'<div class="col12 left homegallery toppaddingonly itemotherphotos">'
      +'<img src="'+ products[i].Img3 +'" class="col12 bggray imageborder">'
      +'</div>'
      +'<div class="col12 right homegallery toppaddingonly itemotherphotos">'
      +'<img src="'+ products[i].Img4 +'" class="col12 bggray imageborder">'
      +'</div>'
      +'</div>'
      // cost = products[i].price;
      // prod = products[i].productId;
    }
  }
  window.scrollTo(0, 0);
};

// add item to cart

// function clearCartVars() {
//   var cost = 0;
//   var prod = "";
// }

// var cartClicks = 0;
// var cartObj = {}; 

// function addToCart(){
//   var cartClicks = (cartClicks + 1);
//   var n = document.getElementById("productNum");
//   var nTotal= n.options[n.selectedIndex].value;
//   var total = (nTotal * cost);
//   // var prodN = (prod + cartClicks);
//   console.log(cartClicks);
//   cartObj['prod' + cartClicks] = prod;
//   console.log(cartObj);
//   clearCartVars();
// }

// function addToCart(){
//   var n = document.getElementById("productNum");
//   var nTotal= n.options[n.selectedIndex].value;
//   var total = (nTotal * cost);
//   sessionStorage.setItem('product', prod);
//   sessionStorage.setItem('cost', total);
//   console.log(sessionStorage);
//   clearCartVars();
// }

//cart stand in 

document.getElementById('cartLink').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  newCart();
});


