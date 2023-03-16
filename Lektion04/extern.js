function getDatum(){
    let days = ['måndag', 'tisdag','onsdag', 'torsdag','fredag','lördag','söndag']
    let monthes = ['Januari','febrari','mars','april','maj','juni','juli','augusti','september','oktober','november','december']

    let today = new Date()
    let day = days[today.getDay()]
    let month = monthes[today.getMonth()]

    document.getElementById('date').innerHTML = day + " den" + today.getDate() + month + today.getFullYear();

}

function countTelCost(){
   let minut = prompt("Minut?")
   let cost = prompt("cost per minut?")
   alert (minut * cost)

}

function showPassWord(){
    let input = document.getElementById("showPass")
    if (input.type == "password" ) {
        input.type = "text"
    }else{
        input.type = "password"
    }
}