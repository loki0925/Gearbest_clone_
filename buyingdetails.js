document.querySelector("#form").addEventListener("submit",formSubmit);
var dataArr = JSON.parse(localStorage.getItem("shipDetails")) || [];
function formSubmit(event)
{
    event.preventDefault();
    var firstName = document.querySelector("#fname").value
    var lastName = document.querySelector("#lname").value
    var add1 = document.querySelector("#addline1").value
    var add2 = document.querySelector("#addline2").value
    var country = document.querySelector("#country").value
    var state = document.querySelector("#state").value
    var city = document.querySelector("#city").value
    var zip = document.querySelector("#zip").value
    var email = document.querySelector("#email").value
    var mobile =document.querySelector("#phone").value


     var dataObj={
         datafName : firstName,
         datalastname : lastName,
         dataadd1:  add1,
         dataadd2:  add2,
         datcountry:  country,
         datastate:  state,
         datacity: city,
         datazip:  zip,
         dataEmail :email,
         dataMobile: mobile,

     }; 
     console.log(dataObj);
     dataArr.push(dataObj );
      localStorage.setItem("shipDetails",JSON.stringify(dataArr));
}   