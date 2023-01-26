const persons = [
        { name : "MONCEF" , age: 13} ,
        { name : "BAHIJA" , age: 23} ,
        { name : "ALA" , age: 18} , 
        ];


function MineurMajeur(persons){
    NewL = persons.map(
        (person)=> { 
          let stat = person.age>=18 ? "Majeur" : "Mineur"
          return {...person, statut: `${stat}`}
        });

 return(NewL)
}

console.log(MineurMajeur(persons))