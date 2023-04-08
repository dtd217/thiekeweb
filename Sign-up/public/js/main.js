// function getInfo() {
//     var xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let info = JSON.parse(this.responseText)
//             document.getElementById('modal-username').innerText = info.name
//             document.getElementById('new-password').innerText = info.password
//         }
//     }
//     xhttp.open("GET",)
//     xhttp.send()
// }
// getInfo()

function saveFormData() {
    var xhttp = new XMLHttpRequest()
    var obj = {}
    obj.username = ' ' + document.getElementById('modal-username').value
    obj.password = ' ' + document.getElementById('new-password').value

    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            alert("Thông tin đã được lưu thành công")
            // document.getElementById('submit-form').innerHTML = "Done"
        }
    }
    xhttp.open("POST", "https://signup-5577a-default-rtdb.asia-southeast1.firebasedatabase.app/submit.json", true)

    let data = JSON.stringify(obj)
    xhttp.send(data);
}