


  function getCreditCardType() {

    var accountNumber = document.getElementById("cardNum").value;
    
    //check card type  
    if (/^5[1-5]/.test(accountNumber)) {
      document.getElementById("mastercard").setAttribute("checked");
    }

    else if (/^4/.test(accountNumber)) {
      document.getElementById("visa").setAttribute("checked");
    }

    else if (/^3[47]/.test(accountNumber)) {

      document.getElementById("amex").setAttribute("checked");
    }

     else if (/^6/.test(accountNumber)) {

      document.getElementById("discover").setAttribute("checked");
    }
    
    //Reset to unchecked
    else {  
        document.getElementById("mastercard").setAttribute("unchecked");
        document.getElementById("visa").setAttribute("unchecked");
        document.getElementById("amex").setAttribute("unchecked");  
        document.getElementById("discover").setAttribute("unchecked");
  }
}
document.getElementById("cardNum").addEventListener('keyup',getCreditCardType);


Modernizr.load({
  test: Modernizr.input.required,
  nope: 'lib/parsley-standalone.min.js'
});