/*********USERS**************/
//1.Création de la promesse :On instancie un nouvel objet Promise
const promiseGetUsers = new Promise(function(resolve,reject){
    setTimeout(
        ()=> {
        //On teste si USERS est défini donc existe :
        if(typeof USERS !== 'undefined'){
            //On envoie les données USERS avec la function resolve():
            resolve(USERS);
        }else{
            //On utilise la function reject() :
            reject("Accès aux Users impossible !")
        };
    }, 1000);
});

//2.Récupérer l'état de la promesse avec then() et catch() :
//console.log("début demande users");//On affiche le thread principal : => Pas d'effet bloquant du code.
    promiseGetUsers
    .then(u => {
        let liste = "<ul>";
        for(let user of u){
            liste += `<li>${user.name}</li>`; 
        };
        liste += `</ul>`;
        document.querySelector("#users").innerHTML += ("Professeur  : " + liste + "<br>")
            
       // return u.length //On retourne le nbre d'users
    })//On peut chaîner avec un autre then :
    //.then((nbrUsers) => {
       // console.log(`Il y a ${nbrUsers} utilisateurs.`);})
    
    //On chaîne avec la function catch() pour récupérer une erreur
    .catch(e=>console.log(e))
    //On affiche le thread principal : => Pas d'effet bloquant du code.
    //console.log("autres actions : fin demande de users");
    //=> la promesse s'affichera après le setTimeout de 2sec.

    /*********NEWS**************/
    //1.Creation d'une promesse avec News :
    const promiseGetMatieres = new Promise((resolve, reject) => {
        setTimeout(
            ()=>{
                if(typeof MATIERES !== 'undefined'){
                    resolve(MATIERES);
                }else{
                    reject("Accès aux matières impossible !")
                }
            },
            1000
        )
    })

    //2.Récupération de la promesse :
    promiseGetMatieres
    .then(m => {
        let liste = "<ul>";
        for(let matiere of m){
            liste += `<li>${matiere.title}</li>`;
        };
        liste += "</ul>";

        document.querySelector("#matieres").innerHTML += ("Discipline : " + liste +"<br>");
    })
    .catch(e=>console.log(e))