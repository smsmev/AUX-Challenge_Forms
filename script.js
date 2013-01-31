

  function getCreditCardType() {

    var accountNumber = document.getElementById("cardNum").value;


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

  }
document.getElementById("cardNum").addEventListener('keyup',getCreditCardType);