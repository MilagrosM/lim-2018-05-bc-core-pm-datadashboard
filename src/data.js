
window.computeUsersStats = (users, progress) => {
  // Se realiza un filtro de rol para obtener solo data de estudiantes
  let usersWithStats = users.filter(user => (user.role === 'student'));
  // Se hace un recorrido por users para ir tomando los nombres de cada usuario
  let usersName = usersWithStats.map (usersWithStat => `${usersWithStat.name}`)
  //console.log(usersName);// me devuelve los nombres en un array de strings
  // Declaro una variable que ira almacenando los strings que crearan la tabla donde se pintara la informacion(nombres y progreso de las alumnas)
  let paintTable = ''
  // Creo los titulos de mi tabla
  paintTable += '<tr>';
  paintTable += '<th>Name</th>';
  paintTable += '<th>%C. General</th>';
  paintTable += '<th>%C. Ejercicios</th>';
  paintTable += '<th>%C. Lecturas</th>';
  paintTable += '<th>%C. Quizzes</th>';
  paintTable += '</tr>';
  
  // Hago un for para recorrer el array de users con roles de student
  for (i = 0; i < usersWithStats.length; i++) {
    // Pinta nombres 
    paintTable += '<tr>';
    paintTable += '<td>' + usersName[i] + '</td>'
    // Se accede a progress utilizando el ID de cada user y se pregunta si progress tiene esa propiedad 
    if (progress.hasOwnProperty(usersWithStats[i].id)) {
      // Nuevo array que guarda los progresos de cada user
      let userProgress = progress[usersWithStats[i].id];
        if (userProgress.hasOwnProperty('intro')) {
        let gPercent = userProgress.intro.percent;
        // Pinta porcentaje de completitud general por cada estudiante
        paintTable += '<td>' + gPercent + '</td>';
        paintTable += '</tr>';
        // Ahora debo pintar porcentaje de completitud de ejercicios, para lo cual 1ro debo acceder a las unidades      
        let unitsObj = userProgress.intro.units
        // Ahora obtengo los valores de cada unidad en un array
        let unitsArr = Object.values(unitsObj)
        // Recorro dicho array para acceder a las partes
        for(j=0; j<unitsArr.length ; j++){    
          let partsObj = unitsArr[j].parts
          console.log(partsObj)
          let partsArr = Object.values(partsObj)
          console.log(partsArr)
          for (h=0; h<partsArr.length ; h++){
            //Exercises
            if(partsArr[h].type === 'practice'){
              //let completedCounter = partsArr[h].completed
              let completedSum = 0
              //let ePercent = 
              completedSum = completedSum + partsArr[h].completed;
              //suma = suma + arreglo[i];
              console.log(completedSum)
            }
           let completedObj = partsArr[h].completed
            console.log(completedObj)
          }
        }
        // Rec

    /*usersWithStats.forEach(object => {object.stats = {
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
  }})*/


  // Se hace un recorrido por users para ir tomando los nombres de cada usuario
  /*for (i = 0; i < usersWithStats.length; i++) {
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
        //Pinta porcentaje de completitud general por cada estudiante
        paintTable += '<td>' + gPercent + '</td>';
        
        ePercent = userProgress.intro.units/*['01-introduction'].parts;
        let ePercentarray = Object.values(ePercent);
       
        let a = ePercentarray[0].parts;
        let b = Object.values(a)
        console.log(b[0].completed)
        console.log(b)



        console.log(ePercentarray[0].parts); // prototype array
        console.log(ePercent)// prototype object
        console.log(typeof(ePercent));
        //console.log(typeof(ePercentarray));
        //if(ePercentarr)

        //if(userProgress.hasOwnProperty('percent'))
        //console.log(userProgress.intro.units)
        }

      }
    }*/






      
  
  }
  }
    }
  usersList.innerHTML = paintTable
  //return usersWithStats
}

window.processCohortData = (cohorts) => {
  let paintCohorts = '';
  for (i = 0; i < cohorts.length; i++) {
    paintCohorts += '<option value="' + i + '">' + cohorts[i].id + '</option>';
  }
  selectCohorts.innerHTML = paintCohorts;
}






