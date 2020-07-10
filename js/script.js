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

document.getElementById('myBtn').addEventListener('click', function(){
  window.scrollTo(0, 0);
});

var lookbook = [
{
 name : "GalleryImg1",
 link : "gallery/images/galleryimage1.jpg",
 description : "home page gallery image man in parka and pants",
},
{
 name : "GalleryImg2",
 link : "gallery/images/galleryimage2.jpg",
 description : "home page gallery image man in parka and pants",
},
{
 name : "GalleryImg3",
 link : "gallery/images/galleryimage3.jpg",
 description : "home page gallery image man in parka",
},
{
 name : "GalleryImg4",
 link : "gallery/images/galleryimage4.jpg",
 description : "home page gallery image man in jacket",
},
{
 name : "GalleryImg5",
 link : "gallery/images/galleryimage5.jpg",
 description : "home page gallery image man in jacket, vest, shirt and pants",
},
{
 name : "GalleryImg6",
 link : "gallery/images/galleryimage6.jpg",
 description : "home page gallery image man in kimono and pants",
},
{
 name : "GalleryImg7",
 link : "gallery/images/galleryimage7.jpg",
 description : "home page gallery image man in vest, shirt and pants",
},
{
 name : "GalleryImg8",
 link : "gallery/images/galleryimage8.jpg",
 description : "home page gallery image man in cap, jacket and pants",
},
{
 name : "GalleryImg9",
 link : "gallery/images/galleryimage9.jpg",
 description : "home page gallery image man in parka and pants",
},
]

for (i = 0; i < lookbook.length; i++) {
  showOptions()
}

function showOptions(){
  console.log("hello");
  document.getElementById('galleryDump').innerHTML 
  +='<div class="col12">'
  +'<img src="'+ lookbook[i].link +'" alt="'+ lookbook[i].description +'" class="col12 imageborder centered gallerybox">'
  +'</div>'
};

var products = [
{
 name : "Item",
 ImgLink : "images/new/dressshirt/dressshirt2.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "shirt",

},
{
 name : "Item",
 ImgLink : "images/new/grayhoodie1/grayhoodie.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/grayhoodiezips/grayhoodiezips.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/graypants/graypants.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "pant",

},
{
 name : "Item",
 ImgLink : "images/new/graysweatpant/graysweatpant.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "pant",

},
{
 name : "Item",
 ImgLink : "images/new/graysweatpant2/graysweatpant.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "pant",

},
{
 name : "Item",
 ImgLink : "images/new/kimono19/kimono.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/navyjacket/navyjacket.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/navypantsbaggy/navybaggy.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "pant",

},
{
 name : "Item",
 ImgLink : "images/new/nylonjacket/nylonjacket.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/ridgehat/ridgehat.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "acc",

},
{
 name : "Item",
 ImgLink : "images/new/waistcoat/waistcoat.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/new/windbreakerhoodie/windbreakerhoodie.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : true,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/sale/talljacket/talljacket.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : true,
 new : false,
 category : "outer",

},
{
 name : "Item",
 ImgLink : "images/general/backpack/backpack0.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : false,
 category : "acc",

},
{
 name : "Item",
 ImgLink : "images/general/medbag/medbag.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : false,
 category : "acc",

},
{
 name : "Item",
 ImgLink : "images/general/lilbag/lilbag1.png",
 description : "Item",
 description2 : "",
 material : "",
 measurements : "",
 productId : "",
 Img1 : "",
 Img1Alt : "",
 Img2 : "",
 Img2Alt : "",
 Img3 : "",
 Img3Alt : "",
 Img4 : "",
 Img4Alt : "",
 sale : false,
 new : false,
 category : "acc",

},

]


//activates when shop at top menu is clicked

document.getElementById('shopAll').addEventListener('click', function(){
  document.getElementById('galleryDump').innerHTML = ""
  for (i = 0; i < products.length; i++) {
  showProducts()
  }
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
  +='<div class="bglightgray left shopitembox newitem allitem shirts" id="'+ products[i].productId +'">'
  +'<div class="col11 centered gallerybox">'
  +'<img src="'+ products[i].ImgLink +'" alt="alkjacket" class="col12 imageborder bggray itemphoto centered">'
  +'</div>'
  +'<div class="black centeredtext">'
  +'<p>'+ products[i].name +'</p></a>'
  +'</div>'
  +'</div>'
};


