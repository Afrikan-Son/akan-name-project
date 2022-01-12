let day;
let month;
let year;
let akanName;

let boys = new Array("Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame");

let girls = new Array("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama");

$('#submit').on('click', () => {
    var date = new Date($('#birthdate').val());
    var gender = $("input[name='gender']:checked").val();