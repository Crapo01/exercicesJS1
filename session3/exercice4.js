let myForm = document.getElementById("myForm");
let myBtn = document.getElementById("submitBtn");

myForm.addEventListener("submit", (element) => {
    element.preventDefault();
    let fields = document.querySelectorAll("input");
    
    let formIsValid = true;

    fields.forEach((field) => {

        let check = checkField(field);
        console.log(field.name + check + field.validationMessage);
        if (!check) {
            formIsValid = false;
        }
    });
    if (formIsValid) {
        alert("formulaire validé")
        element.target.submit();
    }
});

function checkField(element) {
    let fieldIsValid = true;
    let regEx;
    let val = element.value;
    
    
    if (!element.checkValidity()) {        
        fieldIsValid=false;
        
        element.parentNode.lastElementChild.innerHTML="Required field";
        return (fieldIsValid);
      }
    switch (element.type) {
        
        case "text":
            regEx = /^[0-9a-zA-Z '.-]*$/
            console.log(element.value+regEx.test(element.value));
            if (!regEx.test(element.value)) {
                fieldIsValid = false;
                element.parentNode.lastElementChild.innerHTML="invalide text";
            }
            break;
        
            case "email":
            regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            if (!regEx.test(element.value)) {
                fieldIsValid = false;
                element.parentNode.lastElementChild.innerHTML="invalide email";
            }
            break;

            case "tel":
            regEx = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/g
            if (!regEx.test(element.value)) {
                fieldIsValid = false;
                element.parentNode.lastElementChild.innerHTML="invalide number";
            }
            break;

            case "date":
            regEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g
            

            if (!regEx.test(element.value)) {
                fieldIsValid = false;
                element.parentNode.lastElementChild.innerHTML="invalide date";
            }
            break;
        default:
            break;
    }
    if (fieldIsValid) {
        element.parentNode.lastElementChild.innerHTML="valide";
    }
    return (fieldIsValid);
}


