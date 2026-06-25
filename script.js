fetch("https://w0wz31t31j.execute-api.ap-southeast-2.amazonaws.com/prod/metrics")
.then(response => response.json())
.then(data => {

    document.getElementById("cpu").innerText =
        data.cpu + "%";

    document.getElementById("memory").innerText =
        data.memory + "%";

    document.getElementById("network").innerText =
        data.network + " Mbps";

    document.getElementById("cost").innerText =
        "Rs." + data.cost;

    document.getElementById("status").innerText =
    data.status;

})
.catch(error => {
    console.log(error);
});