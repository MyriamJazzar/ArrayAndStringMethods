const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi'


function FormatToArray( str1 )
{
    const ArrayFirstLast = str1.split("-")
    let Array=[]
    
    ArrayFirstLast.forEach(function(e){
      Array.push({FirstLast: `${e}`}) 
    })
    
    Array = Array.map(e => {
        return {FirstName: `${e.FirstLast.split("&")[0]}`, LastName:`${e.FirstLast.split("&")[1]}`}
    
    })
    
    return Array
}

console.log(FormatToArray( str1 ))