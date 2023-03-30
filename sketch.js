


var nav = document.querySelector(".navbar");

window.addEventListener('scroll' , function () {
    if(this.window.pageYOffset >100){
        nav.classList.add('bg-light' , 'shadow')
    }else{
        nav.classList.remove('bg-light' , 'shadow')
    }
})


var nameinput = document.querySelector(".name");
var mailinput = document.querySelector(".mail");
var phoneinput = document.querySelector(".phone");
var button = document.querySelector(".regbutton");


function validation() {
    var niName = nameinput.value();
    var miName = mailinput.value();
    var piName = phoneinput.value();
    console.log(niName)

    if (isNaN(piName)) {
      Swal.fire({
        title: 'Enter only the Phone Number',
        icon: 'error',
        text: 'tips : Check if any symbols , signs or alphabet is present . If present , please remove it  '
      });
      return false;
    }
      var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      var regExpp = /^[0-11]{9}$/;

    if (mName.match(regExp) & mName.match(regExpp)) {
      console.log("correct")
    } else {
      Swal.fire({
        title: 'Given email Id is not valid',
        icon: 'error'
      })
      return false;
    }

    if (niName === "" || miName === "" || piName === "" ) {
      console.log("correct")
      Swal.fire({
        title: 'fill all the details',
        icon: 'error',
        text: 'tips : check whether you gave a extra space or anything else'
      })
      return false;
    }
    }
