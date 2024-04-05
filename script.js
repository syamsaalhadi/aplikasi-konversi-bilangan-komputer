function convert() {
    var number = document.getElementById("number").value;
    var fromType = document.getElementById("from").value;
    var toType = document.getElementById("to").value;
    var result;
    
    switch(fromType) {
      case "biner":
        switch(toType) {
          case "biner":
            result = number;
            break;
          case "oktal":
            result = parseInt(number, 2).toString(8);
            break;
          case "desimal":
            result = parseInt(number, 2).toString(10);
            break;
          case "heksadesimal":
            result = parseInt(number, 2).toString(16).toUpperCase();
            break;
        }
        break;
      case "oktal":
        switch(toType) {
          case "biner":
            result = parseInt(number, 8).toString(2);
            break;
          case "oktal":
            result = number;
            break;
          case "desimal":
            result = parseInt(number, 8).toString(10);
            break;
          case "heksadesimal":
            result = parseInt(number, 8).toString(16).toUpperCase();
            break;
        }
        break;
      case "desimal":
        switch(toType) {
          case "biner":
            result = parseInt(number, 10).toString(2);
            break;
          case "oktal":
            result = parseInt(number, 10).toString(8);
            break;
          case "desimal":
            result = number;
            break;
          case "heksadesimal":
            result = parseInt(number, 10).toString(16).toUpperCase();
            break;
        }
        break;
      case "heksadesimal":
        switch(toType) {
          case "biner":
            result = parseInt(number, 16).toString(2);
            break;
          case "oktal":
            result = parseInt(number, 16).toString(8);
            break;
          case "desimal":
            result = parseInt(number, 16).toString(10);
            break;
          case "heksadesimal":
            result = number.toUpperCase();
            break;
        }
        break;
    }
    
    document.getElementById("result").innerHTML = "Hasil konversi: " + result;
  }
  