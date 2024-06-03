function kirimData(){
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var modelmobil = document.querySelector("input[name=Model]:checked").value;
    var alasan = document.getElementById("alasan").value;
    var tanggal = document.getElementById("tanggal").value;
    var model = document.getElementById("model").value;

    alert(
        "Nama: " + name +
        "\nNIM: " + nim +
        "\nModel Mobil: " + modelmobil +
        "\nModel Tahun: " + model +
        "\nTanggal: " + tanggal +
        "\nAlasan: " + alasan 
        
    );
}


var tanggalInput = document.getElementById('tanggal');
flatpickr(tanggalInput, {
    enableTime: false,
    dateFormat: 'd-m-y',
});