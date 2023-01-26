const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]
function FailedStudent( etudiants ){
    let EtudiantsSansUndef = etudiants.filter(
        e => e.note != undefined
    )
    
    
    EtudiantsSansUndef =  EtudiantsSansUndef.sort((a,b) => 
        {
            if(a.note>b.note)
            return -1
            else
            return 1
        })
    
    
    const avg = EtudiantsSansUndef.reduce((total,next) => total+next.note, 0) / EtudiantsSansUndef.length
    
    EtudiantsSansUndef = EtudiantsSansUndef.map(
        e =>
        {
            let mention = e.note >= avg ? "bien" : "passable"
            return {...e, mention : `${mention}`}
        }
    )
    
    return EtudiantsSansUndef
}

console.log(FailedStudent( etudiants ))