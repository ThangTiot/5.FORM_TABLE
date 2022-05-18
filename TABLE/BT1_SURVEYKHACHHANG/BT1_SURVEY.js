let click = document.getElementById("submit")
click.addEventListener("click", oneclick);
click.addEventListener("mouseover", onemuseover)
click.addEventListener("mouseout", onemuseout)
function oneclick() {
    let kq = confirm("BAN DA CHAC CHAN CHUA");
    console.log(kq)
}

function onemuseover() {
    document.getElementById("submit").style.color="red"
}
function onemuseout() {
    document.getElementById("submit").style.color="black"
}