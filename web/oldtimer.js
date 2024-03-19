let URL = ""

window.onload = async() => {
    let response = await fetch("api/nemelerheto")
    response = await response.json()
    URL = response.nemElerhetoAutok
    render()
}

function render() {
    document.getElementById("nem-elerheto").innerHTML = URL

}