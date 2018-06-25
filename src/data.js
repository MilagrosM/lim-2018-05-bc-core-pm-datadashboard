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
window.computeUsersStats = (users, progress/*, courses*/) => {
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
  console.log(usersWithStats)
  let paintTable = ''
  paintTable += '<tr>';
  paintTable += '<th>Name</th>';
  paintTable += '<th>%Completitud</th>';
  paintTable += '<th>%Ejercicios</th>';
  paintTable += '<th>%Lecturas</th>';
  paintTable += '</tr>';
  paintTable += '<tr>';   
  for (i = 0; i < usersWithStats.length; i++) {
    let usersName = usersWithStats.map (usersWithStat => `${usersWithStat.name}`);
    console.log(usersWithStats[i].name)
    paintTable += '<td>' + usersName[i] + '</td>'
    paintTable += '</tr>';
    /*if (progress.hasOwnProperty(usersWithStats[i].id)){
      let abc = progress[usersWithStats[i].id]; 
      console.log (progress[usersWithStats[i].id])
      if (abc.hasOwnProperty('intro')) {
        let abcd = abc.intro;
        console.log(abc.intro)
        if(abcd.hasOwnProperty('percent')){
          let abcde = abcd.percent;
          paintTable += '<td>' + abcde[i] + '</td>';
          paintTable += '</tr>';
  
          console.log(abcd.percent)

        }

      }
    

    }*/      
  }


  usersList.innerHTML = paintTable
  //return usersWithStats
}

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






























/*
let usersButton = document.getElementById('users_button')
 */


  
