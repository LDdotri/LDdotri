let tuoi;

document.getElementById("sm").onclick = function(){
    tuoi = document.getElementById("st").value;
    document.getElementById("p1").textContent = `Bạn đã ${tuoi} tuổi rồi!`;
}



