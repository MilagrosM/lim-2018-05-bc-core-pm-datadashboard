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
  paintTable += '<th>Puntuacion Promedio</th>';
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
        // 1ro debo acceder a las unidades ({}), contenidas en un objeto general
        let unitsObj = userProgress.intro.units
        // console.log(unitsObj)

        // 2do debo obtener las unidades({}) en un array 
        let unitsArr = Object.values(unitsObj)
        //console.log(unitsArr)

        // 3ro debo obtener las partes({}) de cada unidad en un array
        let partsArr = unitsArr.map(unit => unit.parts);
        //console.log(partsArr)

        // 4to debo obtener las propiedades de cada parte  
        let propArr = partsArr.map(partsArr => Object.values(partsArr)) // (obtendré 3 array, uno por cada unidad) 
        //console.log(propArr)

        // 5to debo obtener un solo array de propiedades de cada parte 
        let allPropArr = [].concat.apply([],propArr);
        //console.log(allPropArr)

        //EXERCISES
        // 6to debo filtrar para ejercicios
        let practPropArr = allPropArr.filter( practice => (practice.type === "practice"));
        //console.log(practPropArr)
        
        // 7mo debo obtener en un array el valor de los ejercicios completados
        let practCompArr = practPropArr.map(practPropArr => practPropArr.completed)
        //console.log(practCompArr)
       
        // 8vo debo sumar los valores del array y obtener el porcentaje de completitud ejercicios
        let pInitial = 0;
        let pSum =  practCompArr.reduce((sum, current) =>  sum + current, pInitial)
        //console.log(pSum) 
        let pPercent = pSum/2*100
        
  
        //LECTURAS
        let readPropArr = allPropArr.filter(read => (read.type === "read"));
        //console.log(readPropArr)        
        let readCompArr = readPropArr.map(readPropArr => readPropArr.completed)
        //console.log(readCompArr)       
        let rInitial = 0;
        let rSum =  readCompArr.reduce((sum, current) =>  sum + current, rInitial)
        //console.log(rSum) 
        let rPercent = rSum/11*100
        
      
        //QUIZZES
        let quizPropArr = allPropArr.filter(quiz => (quiz.type === "quiz"));
        //console.log(quizPropArr)        
        let quizCompArr = quizPropArr.map(quizPropArr => quizPropArr.completed)
        //console.log(quizCompArr)       
        let qInitial = 0;
        let qSum =  quizCompArr.reduce((sum, current) =>  sum + current, qInitial)
        //console.log(rSum) 
        let qPercent = qSum/3*100

        let quizPoints = quizPropArr.map(quizPropArr => quizPropArr.score)
        //let points = quizPoints.map(quizPoints => ( quizPoints == isNullOrUndefined))
        //console.log(quizPoints)
        let realPoints = quizPoints.map( quizPoints =>{
          if(typeof quizPoints !== "number") {
            quizPoints = 0
          } 
          return quizPoints
        })
        //console.log(realPoints)
        let qPInitial = 0
        let qPointsSum = (realPoints.reduce((sum, current) =>  (sum) + (current), qPInitial))
        let qAvg = qPointsSum/3
        //console.log(qAvg)
        
           



        
        //Pintando porcentajes
        let gPercent = (pPercent + rPercent + qPercent)/3
        paintTable += '<td>' + gPercent.toFixed(2) + '</td>';
        paintTable += '<td>' + pPercent.toFixed(2) + '</td>';
        paintTable += '<td>' + rPercent.toFixed(2) + '</td>';
        paintTable += '<td>' + qPercent.toFixed(2) + '</td>';
        paintTable += '<td>' + qAvg.toFixed(2) + '</td>';
        paintTable += '</tr>';    
      }
    }
  }
usersList.innerHTML = paintTable
//return usersWithStats
}
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


window.processCohortData = (cohorts) => {
  let paintCohorts = '';
  for (i = 0; i < cohorts.length; i++) {
    paintCohorts += '<option value="' + cohorts[i].id + '">' + cohorts[i].id + '</option>';
  }
  selectCohorts.innerHTML = paintCohorts;
}


/*window.sortUsers = (users, orderBy, orderDirection) => {
  if(orderBy === "Nombre") {
    users.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  
  }

  if(orderBy === "Completitudgeneral") {
    users.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  
  }

  if(orderBy === "CompletitudEjercicios") {
    users.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  
  }


  }*/






