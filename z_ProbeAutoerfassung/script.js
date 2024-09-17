
// get Data from API
function getData() {
    $.ajax({
        type: "get",
        url: "./api/api.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $.get("template.hbs", function (template) {
                console.log(template);
                // 3. Template kompilieren
                const compiled = Handlebars.compile(template);
                // Daten im Template einfügen
                const html = compiled(response);
                // Daten anzeigen
                $("main").html(html);
                // actions

                $('.delete').click(function (e) { 
                    e.preventDefault();
                    let id = $(this).attr('data-id');
                    deleteData(id);
                });

                /* Tanken */
                $('.tank').click(function (e) { 
                    e.preventDefault();
                    let id = $(this).attr('data-id');
                    console.log(id);
                    $.ajax({
                        type: "get",
                        url: "./api/api.php?id=" + id,
                        // data: "data",
                        dataType: "json",
                        success: function (response) {
                            console.log(response);
                            let tanken = parseInt(response.data[0].tanken);
                            tanken++;
                            console.log(tanken);
                            let newData = response.data[0];
                            newData.tanken = tanken;
                            updateData(id, newData);
                        }
                    });

                    
                });
            } )
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
            console.log("Datensatz aktualisiert:", response);
            getData(); // Tabelle neu laden
        },
        error: function (error) {
            console.error("Fehler beim Aktualisieren:", error);
        }
    });
}



function deleteData(id) {
    $.ajax({
        type: "delete",
        url: "./api/api.php?id=" + id,
        dataType: "json",
        success: function (response) {
            console.log("Datensatz gelöscht:", response);
            getData(); // Tabelle neu laden
        },
        error: function (error) {
            console.error("Fehler beim Löschen:", error);
        }
    });
}


export { getData, getDataID, insertData, updateData, deleteData, };
  