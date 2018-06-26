/*(users) => {
;
      
    }
  fetch(url3)
  .then((response) => {
    return response.json();
  })
  .then((progress) => {

  }

    
    
  })

    //paintTable += '<td>' + exercises[i] + '</td>';
    
usersList.innerHTML = paintTable
})   
} 
}*/

/*movie = {
  title: 'Back to the Future',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
};

console.assert(movie.stars[0] === 'Michael J. Fox');
console.assert(movie['stars'][1] === 'Christopher Lloyd');
console.assert(movie.stars[2] === 'Lea Thompson'); */


/*Crea la lista de usuarios a pintar y devuelve un array de usuarios 
(llamado usersWithStats) que tiene la propiedad stats (que es un objeto)*/
window.computeUsersStats = (users, progress) => {
  // Se realiza un filtro de rol para obtener solo data de estudiantes
  let usersWithStats = users.filter(user => (user.role === 'student'));
  //Stats properties
  let gPercent = 1;
  let eTotal = 2;
  let eCompleted = 3;
  let ePercent = 4;
  let rTotal = 5;
  let rCompleted = 6;
  let rPercent = 7;  
  let qTotal = 8;
  let qCompleted = 9;
  let qPercent = 10;
  let qScoreSum = 11;
  let qScoreAvg = 12;
    usersWithStats.forEach(object => {object.stats = {
    percent: gPercent,
    exercises: {
      total: eTotal,
      completed: eCompleted,
      percent: ePercent,
    },
    reads: {
      total: rTotal,
      completed: rCompleted,
      percent: rPercent,
    },  
    quizzes: {
      total: qTotal,
      completed: qCompleted,
      percent: qPercent,
      scoreSum: qScoreSum,
      scoreAvg: qScoreAvg,
    }
  }})

  let paintTable = ''
  paintTable += '<tr>';
  paintTable += '<th>Name</th>';
  paintTable += '<th>%C. General</th>';
  paintTable += '<th>%C. Ejercicios</th>';
  paintTable += '<th>%C. Lecturas</th>';
  paintTable += '<th>%C. Quizzes</th>';
  paintTable += '</tr>';

  // Se hace un recorrido por users para ir tomando los nombres de cada usuario
  for (i = 0; i < usersWithStats.length; i++) {
    let usersName = usersWithStats.map (usersWithStat => `${usersWithStat.name}`);
    paintTable += '<tr>'; 
    // Pinta nombres 
    paintTable += '<td>' + usersName[i] + '</td>'
    //Se accede a progress utilizando el ID de cada user
    //Se pregunta si progress tiene esa propiedad
    if (progress.hasOwnProperty(usersWithStats[i].id)) {
      let userProgress = progress[usersWithStats[i].id];
        if (userProgress.hasOwnProperty('intro')) {
        gPercent = userProgress.intro.percent;
        //Pinta porcentaje de completitud general
        paintTable += '<td>' + gPercent + '</td>';
        ePercent = userProgress.intro.units['01-introduction'].parts;
        let ePercentarray = Object.values(ePercent);
        console.log(ePercentarray[i].type);
        //console.log(typeof(ePercentarray));
        //if(ePercentarr)

        //if(userProgress.hasOwnProperty('percent'))
        //console.log(userProgress.intro.units)
        }

      }
    }






      
  


  usersList.innerHTML = paintTable
  //return usersWithStats
}

/*for (i = 0; i < users.length; i++) {
  if (users[i].role === "student") {
    output += '<tr>';
    output += '<td id= "nombrestabla">' + users[i].name + '</td>';
    if (progress.hasOwnProperty(users[i].id)) {
      const progressUser = progress[users[i].id];
      if (progressUser.hasOwnProperty('intro')) {
        const intro = progressUser.intro;
        const unitIntroduction = intro.units['01-introduction'];
        const unitVariables = intro.units['02-variables-and-data-types'];
        const unitUx = intro.units['03-ux-design'];
        const resultadoExecises = unitVariables.parts['06-exercises'].completed;
        const resultadoQuiz = unitIntroduction.parts['04-quiz'].completed + unitVariables.parts['05-quiz'].completed + unitUx.parts['03-quiz'].completed;
        const resultadoLecturas = unitIntroduction.parts['00-welcome-and-orientation'].completed + unitIntroduction.parts['01-growth-mindset'].completed + unitIntroduction.parts['02-why-learn-to-code'].completed + unitIntroduction.parts['03-your-first-website'].completed + unitVariables.parts['00-values-data-types-and-operators'].completed + unitVariables.parts['01-variables'].completed + unitVariables.parts['02-self-learning-MDN'].completed + unitVariables.parts['03-comments'].completed + unitUx.parts['00-development-team'].completed + unitUx.parts['01-ux-design'].completed + unitUx.parts['02-ux-design-vs-ui-design'].completed;
        if (intro.hasOwnProperty('percent')) {
          output += '<td>' + intro.percent + '</td>';
          output += '<td>' + resultadoExecises * 100 + '</td>';
          output += '<td>' + parseInt(resultadoQuiz * 100 / 3) + '</td>';
          output += '<td>' + parseInt(resultadoLecturas * 100 / 11) + '</td>';
          output += '</tr>';*/





  /*let userWithStats = [
    {
      name: 'Lizeth',
      id: 'r5y35oiujr',
      role: 'student',
      timezone: 'America/Lima',
      locale: 'es-ES',
      signupCohort: 'lim-2018-03-pre-core-pw', // ya tengo esto
      stats: {
        percent: 95,
        exercises: {
          total: 5,
          completed: 5,
          percent: 100,
        },
        reads: {
          total: 4,
          completed: 2,
          percent: 50,
        },
        quizzes: {
          total: 2,
          completed: 2,
          percent: 100,
          scoreSum: 190,
          scoreAvg: 80,
        }
      }
    }
  ]*/



window.processCohortData = (cohorts) => {
  let paintCohorts = '';
  for (i = 0; i < cohorts.length; i++) {
    paintCohorts += '<option value="' + i + '">' + cohorts[i].id + '</option>';
  }
  selectCohorts.innerHTML = paintCohorts;
}


/*window.processCohortData = (options) => {
return userWithStatsorderandfilter
}


Argumentos
let options = {
  cohort: {},
  cohortData: {
    users: [],
    progress: {},
  }
  orderBy: "",
  orderDirection: "",
  search: "",
}*/








/*const populateSedesSelect = () => {
  cohorts.forEach(cohort => {
    //
    const optionSede = document.createElement('OPTION');
    optionSede.innerHTML = cohort;
    let attSedes = document.createAttribute('value')
    attSedes.value = cohort;
    optionSede.se
    sedes.appendChild(optionSede)
    console.log(cohort)
  })
}*/





















/*
let usersButton = document.getElementById('users_button')
 */


  
