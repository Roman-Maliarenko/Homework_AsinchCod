function getStudent(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve({name:"Anri ",age:32})
        },4000)
    })
}
console.log(getStudent());
const promise = getStudent();

promise.then((pros)=>{
    console.log(pros);
})

function getDriverLiсence(){
    return new Promise(function(succes, failure){
        const math = Math.random()
            if (math > 0.1) {
                setTimeout(function(){
                    succes("успех")
                },1000)
            }else {
                setTimeout(function(){
                    failure(new Error("упс, неудача"))
                },1000)
            }
    });
}
console.log(getDriverLiсence());
const getD = getDriverLiсence();
getD.then((get)=>{
    console.log(get);
})
function succes(result){
    console.log("Успешно завершено с рузультатом :", result);

}
function failure(error){
    console.log("Завершино с ошибкой :", error);
}
getDriverLiсence()
.then(succes)
.catch(failure)


