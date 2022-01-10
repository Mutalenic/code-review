function OnSubmit() {

    let validity_check_radio = false;
    let validity_check_boxes = false;
    let radio_value = "";
    let select_values = [];
    for (let i = 0; i < 5; i++) {
         
        if (document.getElementsByClassName("radio-buttons")[i].checked) {
            radio_value = document.getElementsByClassName("radio-buttons")[i].value;
            validity_check_radio = true;
        }

        if (document.getElementsByClassName("check_boxes")[i].checked) {
            select_values.push(document.getElementsByClassName("check_boxes")[i].value);
            validity_check_boxes = true;
        }
    }

    if (!validity_check_radio) {
        alert("You havn't selected an option from the list of editors");
        return false;
    }

    if (!validity_check_boxes) {
        alert("You havn't selected any music genere");
        return false;
    }

    let array = {
        Name:  document.getElementsByName("info")[0].value,
        Email: document.getElementsByName("info")[1].value,
        Number: document.getElementsByName("info")[2].value,
        Continent: document.getElementsByName("info")[3].value,
        Code_Editor: radio_value,
        Music_Genere: select_values,
        Comment: document.getElementsByName("info")[4].value
    };

    alert(JSON.stringify(array));
    return true;
}