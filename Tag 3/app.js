// get Data from API
function getData() {
    $.ajax({
        type: "get",
        url: "./api/api.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}


function getDataID(id) {
    // nur ein Datensatz holen
    $.ajax({
        type: "get",
        url: "./api/api.php?id=" + id,
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}

function insertData(data) {
    // input data

    $.ajax({
        type: "post",
        url: "./api/api.php?id=5",
        data: data,
        dataType: "json",
        success: function (response) {

        }
    })
}


function updateData(id, data) {
    $.ajax({
        type: "post",
        url: "./api/api.php?id=" + id,
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}


function deleteData() {
    // delete

    $.ajax({
        type: "delete",
        url: "./api/api.php?id=6",
        dataType: "json",
        success: function (response) {
        }
    });
}


export {getData, getDataID, insertData , updateData, deleteData,};
