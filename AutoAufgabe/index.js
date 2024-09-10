$.getJSON("data.json", function (response) {
    //console.log(response);
     $.get("template.hbs", function(template){
     //console.log(template);
     var compiled = Handlebars.compile(template);
     var html = compiled(response);
    //console.log(html);
     $('main').append(html);
 });
});

$(document).ready(function() {
    let carId = 4; // Start ID für neue Autos (nach den bestehenden)
 
    // Funktion zum Tanken
    $(document).on('click', '.btn-floating.blue', function() {
        let tankCell = $(this).closest('tr').find('td:nth-child(6)');
        let currentTank = parseInt(tankCell.text());
        tankCell.text(currentTank + 1); // Tank um 1 erhöhen
        if(currentTank == 100){
            
        }
    });
 
    // Funktion zum Bearbeiten eines Autos
    $(document).on('click', '.btn-floating.green', function() {
        let row = $(this).closest('tr');
        let name = prompt("Auto Name:", row.find('td:nth-child(2)').text());
        let kraftstoff = prompt("Kraftstoff:", row.find('td:nth-child(3)').text());
        let farbe = prompt("Farbe (Hex #):", row.find('td:nth-child(4)').text());
        let bauart = prompt("Bauart:", row.find('td:nth-child(5)').text());
 
        if (name && kraftstoff && farbe && bauart) {
            // Werte in der Tabelle aktualisieren
            row.find('td:nth-child(2)').text(name);
            row.find('td:nth-child(3)').text(kraftstoff);
            row.find('td:nth-child(4)').css('background-color', farbe).text(farbe);
            row.find('td:nth-child(5)').text(bauart);
        } else {
            alert("Bitte alle Felder ausfüllen!");
        }
    });
 
    // Funktion zum Löschen eines Autos
    $(document).on('click', '.btn-floating.red', function() {
        if (confirm('Möchten Sie dieses Auto wirklich löschen?')) {
            $(this).closest('tr').remove(); // Zeile entfernen
        }
    });
 
    // Funktion zum Hinzufügen eines neuen Autos
    $('.fixed-action-btn').click(function() {
        let name = prompt("Auto Name:");
        let kraftstoff = prompt("Kraftstoff:");
        let farbe = prompt("Farbe (Hex #):");
        let bauart = prompt("Bauart:");
 
        if (name && kraftstoff && farbe && bauart) {
            // Neues Auto in die Tabelle einfügen
            $('tbody').append(`
<tr>
<td>${carId}</td>
<td>${name}</td>
<td>${kraftstoff}</td>
<td style="background-color: ${farbe}; color: white;">${farbe}</td>
<td>${bauart}</td>
<td>0</td>
<td>
<a href="#" class="btn-floating blue"><i class="material-icons">directions_car</i></a>
<a href="#" class="btn-floating green"><i class="material-icons">edit</i></a>
<a href="#" class="btn-floating red"><i class="material-icons">delete</i></a>
</td>
</tr>
            `);
            carId++; // ID für das nächste Auto erhöhen
        } else {
            alert("Bitte alle Felder ausfüllen!");
        }
    });
});