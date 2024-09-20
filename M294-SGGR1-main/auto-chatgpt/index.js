$(document).ready(function() {
    // Klick-Event für das Editieren
    $('.edit').on('click', function() {
        console.log('Edit button clicked for row:', $(this).closest('tr').find('td:first').text());
    });

    // Klick-Event für das Löschen
    $('.delete').on('click', function() {
        console.log('Delete button clicked for row:', $(this).closest('tr').find('td:first').text());
    });

    // Klick-Event für Fahren (Drive)
    $('.drive').on('click', function() {
        console.log('Drive button clicked for row:', $(this).closest('tr').find('td:first').text());
    });

    // Klick-Event für den Add-Button
    $('.add-btn').on('click', function() {
        console.log('Add button clicked');
    });
});
