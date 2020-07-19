function myFunctioninfo() {
  document.getElementById("myDropdowninfo").classList.toggle("showinfo");
}

function myFunctioninfo2() {
  document.getElementById("myDropdowninfo2").classList.toggle("showinfo");
}

function myFunctioninfo3() {
  document.getElementById("myDropdowninfo3").classList.toggle("showinfo");
}

function myFunctioninfo4() {
  document.getElementById("myDropdowninfo4").classList.toggle("showinfo");
}

function myFunctioninfo5() {
  document.getElementById("myDropdowninfo5").classList.toggle("showinfo");
}

function myFunctioninfo6() {
  document.getElementById("myDropdowninfo6").classList.toggle("showinfo");
}

function myFunctioninfo7() {
  document.getElementById("myDropdowninfo7").classList.toggle("showinfo");
}

function myFunctioninfo8() {
  document.getElementById("myDropdowninfo8").classList.toggle("showinfo");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtninfo')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentinfo");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showinfo')) {
        openDropdown.classList.remove('showinfo');
      }
    }
  }
}



function showAbout(){
  document.getElementById('galleryDump').innerHTML 
+='<div class="col9 centered">'
+'  <h3 class="centeredtext" id="topofpage">ABOUT US</h3>'
+'</div>'
+'<div class="col9 centered gallerybox">'
+'  <div class="col12 gallerybox">'
+'  <p>'
+'  alk phenix is ​​a functional clothing for walking. Focus on the act of walking that always enters your daily routine. We suggest how to enjoy the outdoors in urban life.'
+'  <br>'
+'<br>In Japanese, “alk” (歩く) translates as walking, making the threads a perfect fit for the modern-day flâneur. A selection of staples for all seasons are incorporated, the packable jacket and zinbei being two of our personal favorites. For ultimate performance, multiple pockets and technical fabrics can be found throughout</p><br>'
+'<div class="gallerybox col12">'
+'<iframe class="col12" width="560" height="315" src="https://www.youtube.com/embed/WQ_QwaWI3Kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
+'</div>'
+'</div>'
+'</div>'
+'<br>'
+'<div class="col9 centered gallerybox">  '
+'<div class="col12 gallerybox">  '
+'  <h3 class="centeredtext">'
+'  ABOUT OUR WATERPROOF AND REPELLENT FABRICS</h3>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo()" class="dropbtninfo ">What is water repellent?'
+'  </h3>'
+'<div id="myDropdowninfo" class="dropdown-contentinfo">'
+'    <p >'
+'      "Water repellant" is the function of repelling and dropping off the water droplets attached to the fabric. When the water drops on the surface of the fabric, it becomes a water ball and it slowly falls off, which is a good state of water repellent effect. The water repellent fabric does not fill the gaps, but makes it easy to repel the water attached to the fabric, so if it is in a state where it has been soaked with a large amount of water or water for a long time, the water will soak in and the fabric becomes wet. Can not be avoided.</p>'
+'</div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo2()" class="dropbtninfo ">What is waterproof (water resistant)?'
+'  </h3>'
+'<div id="myDropdowninfo2" class="dropdown-contentinfo">'
+'    <p >'
+'      Waterproofing is a "water resistant" function that fills the gaps in the fabric and prevents water from entering. Depending on the application, the resin film is laminated or resin coated so that water does not penetrate easily even if pressure is applied to the back of the fabric. Water pressure refers to its performance. When it rains, even if the surface of the garment gets wet, there is no penetration of water inside, which is referred to as "good water resistance" or "water pressure resistant". While water is less likely to penetrate than "water repellent" products, it is difficult to discharge water vapor outside, so you may feel mure.</p>'
+'</div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo3()" class="dropbtninfo ">What is breathable?'
+'  </h3>'
+'  <div id="myDropdowninfo3" class="dropdown-contentinfo">'
+'    <p >'
+'      "Ventilation" is a function that drains the water vapor from the body out of the wear and prevents moisture. There is a laminate of a resin film that can discharge water vapor to the back of the fabric on the front side of the garment, and a resin-coated one. Permeability refers to its performance. The function of preventing water from the outside (waterproof and water resistant) and discharging the water vapor from the body to the outside (moisture permeable) to prevent moisture is called "water vapor permeable waterproof".</p>'
+'  </div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo4()" class="dropbtninfo "> Is it possible to get wet even with water repellent and waterproof (water resistant) products?'
+'  </h3>'
+'  <div id="myDropdowninfo4" class="dropdown-contentinfo">'
+'    <p >'
+'      Even in products that use a moisture-permeable waterproof film, if there is intense sweating, the internal moisture will be saturated, and condensation will occur due to the temperature difference with the outside of the wear, and the inner surface will become wet. there is. If the humidity on the outside of the clothing is high, sufficient moisture permeability may not be obtained. Similarly, if you sit on wet or snow for a long time, the surface of the fabric gets wet, and water reverses as moisture. It may come. When acting in the rain, water may come in from the cuffs and around the collar, which may make it feel as if it had leaked.</p>'
+'  </div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo5()" class="dropbtninfo ">Should I use a waterproof spray on unused clothing?'
+'  </h3>'
+'  <div id="myDropdowninfo5" class="dropdown-contentinfo">'
+'    <p >'
+'    Skis, snowboards and outdoor wear are water-repellent on the surface of the fabric. Even if you dont use the water repellent spray on the clothes you purchased yourself, it has an initial water repellent effect.</p>'
+'  </div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo6()" class="dropbtninfo ">Is the water repellent effect falling?'
+'  </h3>'
+'  <div id="myDropdowninfo6" class="dropdown-contentinfo">'
+'    <p >'
+'      The water repellant effect will decrease while using it. It becomes easy to get wet due to the dirt adhering to the wear. (Oil: lift oil, cosmetics, etc. Water soluble: sweat, mud, dust, invisible stains, etc.) Laundry detergent and dry cleaning detergent are left on the surface of the fabric, making it easy to get wet. The back of the rucksack, sitting on the surface with a rough surface, falling over in an ice-burn, etc. makes it easy for the water repellent to fall off and get wet. Some of the commercially available deodorant sprays may have a function to absorb water on the surface of the fabric, so it is recommended to avoid this for water-repellent products..</p>'
+'  </div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo7()" class="dropbtninfo ">How to care if the water repellant effect has been reduced?'
+'  </h3>'
+'  <div id="myDropdowninfo7" class="dropdown-contentinfo">'
+'    <p >'
+'      First of all, please clean the dirt. Ask your cleaner if you recommend washing in a cleaner. If you are washing at home, after thoroughly removing the surface dirt, please rinse enough to leave no detergent. The effect is restored just by completely removing the dirt, but it is possible to compensate for the dropped water repellent by water repellent finish in the cleaner. You may use a commercially available water repellent spray. In that case, please use according to the instructions of the water repellent spray. If you use the fabric as fluff, pilling and scratching damage occurs, the effect will not gradually appear after reprocessing as well as lowering the water repellency. Please understand and acknowledge that point.</p>'
+'  </div>'
+'</div>'
+'<div class="dropdowninfo col12">'
+'  <h3 onclick="myFunctioninfo8()" class="dropbtninfo ">During the season, I have no time for cleaning! If so, how do you recover from the water repellent effect?'
+'  </h3>'
+'  <div id="myDropdowninfo8" class="dropdown-contentinfo">'
+'    <p >'
+'      Please wipe the dirt of the clothes with a damp white cloth and dab it, then apply a white backing and low temperature iron. Since the water repellent has the property of recovering the effect by heat, appropriate water repellency is restored.'
+'</p>'
+'  </div>'
+'</div>'
+'</div>'
+'<div class="col9 centered gallerybox">'
+'  <div class="col12 gallerybox centeredtext">'
+'    <hr>'
+'    <br>'
+'    <h3>Follow us here</h3>'
+'    <br>'
+'    <i style="font-size:24px" class="fa"><a href="https://www.facebook.com/alk-phenix-586742861429189/" target="_blank">  &#xf09a;</a></i>'
+'    <i style="font-size:24px" class="fa" ><a href="https://www.instagram.com/alk_phenix/" target="_blank">  &#xf16d;</a></i>  '
+'  </div>'
+'</div>'

};