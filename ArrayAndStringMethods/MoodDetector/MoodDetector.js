const users = [
    { name : "sarah" , comment : "j'aime ce poste <3" },
    { name : "monya" , comment : "le poste est null :( " },
    { name : "carlos" , comment : "salut l'algérie" }
    ]
function MoodDetect(users){
    const Mood = users.map(e => {
        let str = e.comment
        let mood = str.includes("j'aime", "<3") ? "heureux" : str.includes("null", ":(")? "triste" : "neutre"
       return {name: `${e.name}`, etat: `${mood}`}
    
        
    })
    return Mood
}

console.log(MoodDetect(users))