

const loaduser = ()=> {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data =>displayuser(data))
}
const displayuser = user =>{
    const gendertag =document.getElementById('gender');
    gendertag.innerHTML=user.results[0].gender;
    console.log(gendertag);


    const names =document.getElementById('name');
    names.innerHTML=user.results[0].name.first;

    const location =document.getElementById('location');
    location.innerHTML=user.results[0].name.location;
    
    // // const name=user.results[0].name.first;
    // document.getElementById('name').innerHTML=name;
   
     console.log(gendertag);

}
loaduser();