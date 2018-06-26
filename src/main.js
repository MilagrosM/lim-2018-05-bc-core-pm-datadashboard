//Views
let view1 = document.getElementById('view_1');
let view2 = document.getElementById('view_2');
let view3 = document.getElementById('view_3');
let header = document.getElementById('header');

//Links JSON
const url1 = 'http://127.0.0.1:8080/data/cohorts.json'
const url2 = 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json'
const url3 = 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const urls = [url2, url3];

//Buttons
let loginButton = document.getElementById('login_button');
let studentsButton = document.getElementById('students_button');
let filterButton = document.getElementById('filter_button');

let selectCohorts = document.getElementById('select_cohorts');
let usersList = document.getElementById('users_list');

//Events
loginButton.addEventListener('click',function(){
  view1.style.display = "none";
  view2.style.display = "block";
  header.style.display = "block";
  view3.style.display = "none";
});

studentsButton.addEventListener('click',function(){
  view1.style.display = "none";
  view2.style.display = "none";
  header.style.display = "block";
  view3.style.display = "block";
  fetch(url1)
  .then((response) => {
    return response.json();
  })
  .then((cohorts) => { 
    processCohortData(cohorts)
  })
});

let users =[]
let progress =[]

filterButton.addEventListener("click", function () {
  let value = selectCohorts.options[selectCohorts.selectedIndex].text
  if (value === 'lim-2018-03-pre-core-pw') {
    /*urls.push(fetch(url2));
    urls.push(fetch(url3));
    Promise.all(urls).then((responses) => {
      return responses.map(response => response.json());
    }).then((responses) => {
      console.log(responses)
      users = JSON.parse(responses[0]);
      progress = JSON.parse(responses[1])
      computeUsersStats(users,progress)

    
    }
    )*/
    Promise.all(urls.map(url => fetch(url)))
    .then(response => Promise.all(response.map(data => data.text())))
    .then(response => {
      users = JSON.parse(response[0]);
      progress = JSON.parse(response[1]);
      console.log(users)
      console.log(progress)

      computeUsersStats(users, progress)

    })

  } else {
    console.log("No hay data")
  }
})


/*Promise.all(urls.map(url => fetch(url)))
.then(response => Promise.all(response.map(data => data.text())))
.then(response => {
      cohorts = JSON.parse(response[0]);
      progress = JSON.parse(response[1]);
      users = JSON.parse(response[2]);
      let courses = [];
      cohorts.map(
          cohort => {
              if(cohort.id == 'lim-2018-03-pre-core-pw'){
                  //courses.push(cohort.coursesIndex);
                  for(key in cohort.coursesIndex){
                      courses.push(key);
                  }
              }
          }
      );*/






//const fetchRequest = [];
//fetchRequest.push(fetch(url2));
//fetchRequest.push(fetch(url3));




  
  /*prueba1 = result[0];
  prueba2 = result[1];*/
  





/*
window.
var filterButton = document.getElementById('filter_button')
var view1 = document.getElementById('view_1');
var view2 = document.getElementById('view_2');
var view3 = document.getElementById('view_3');
var header = document.getElementById('header_1')
var id = document.getElementById("cohorts_list");
var info1 = document.getElementById("info_1");








studentsButton.addEventListener('click',function(){
  view1.style.display = "none";
  view2.style.display = "none";
  header.style.display = "block";
  view3.style.display = "block";
  document.getElementById("cohorts_list").innerHTML = data.function1
})


filterButton.addEventListener('click',function(){
  view1.style.display = "none";
  view2.style.display = "none";
  header.style.display = "block";
  view3.style.display = "block";
  var request2 = new XMLHttpRequest();
    request2.open('GET', 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json');
    request2.onload = function() {
      var usersData = JSON.parse(request2.responseText);
      document.getElementById("users_list").innerHTML = data.function2(usersData)
    };
    request2.send();

})*/










