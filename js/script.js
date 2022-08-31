var arrOfImges=['./imgs/mySlider33.jpg','./imgs/myyslidee.jpg','./imgs/myyslidee5.jpg']
var getPhoto=document.querySelector('img');
var left=document.querySelector('.fa-circle-chevron-left')
var right=document.querySelector('.fa-circle-chevron-right')
console.log(left ,right)


function next(){
    var photoSrc=getPhoto.getAttribute('src');
    var photoIndex=arrOfImges.indexOf(photoSrc);
    console.log(photoIndex)
    if(photoIndex==arrOfImges.length-1){
        photoIndex=0;
        getPhoto.setAttribute('src',arrOfImges[photoIndex]);
    }else{
        photoIndex++
        getPhoto.setAttribute('src',arrOfImges[photoIndex]);
    }

}


function previos(){
    var photoSrc=getPhoto.getAttribute('src');
    var photoIndex=arrOfImges.indexOf(photoSrc);
    if(photoIndex==0){
        photoIndex=arrOfImges.length-1
        getPhoto.setAttribute('src',arrOfImges[photoIndex]);
    }else{
        photoIndex--;
        getPhoto.setAttribute('src',arrOfImges[photoIndex]);

    }

}

left.addEventListener('click',function(){next()})
right.addEventListener('click',function(){previos()})


setInterval(function() {
    next()
  }, 3000);


  //---------------------------gellary----------------------------


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".activee").classList.remove("activee"); 
      selectedItem.target.classList.add("activee");
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");

        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title span"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}


//--------------back to top function--------------------------------
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(mybutton)
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//----------------------------counter----------------------
var ShoppingChart=document.getElementById('chart');
var myCount=document.getElementById('counter')
var counter=0;
myCount.innerHTML=counter

console.log(ShoppingChart,myCount)
ShoppingChart.addEventListener('click',function(){
    console.log('hi')
    myCount.innerHTML=counter
    counter++;
    myCount.style.display='block'
})

