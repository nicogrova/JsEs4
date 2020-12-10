$("#btn1").click(function () {
    calcola("+");
  });
  $("#btn2").click(function () {
    calcola("-");
  });
  $("#btn3").click(function () {
    calcola("/");
  });
  $("#btn4").click(function () {
    calcola("*");
  });

  function calcola(segno) {
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var tot;
    switch (segno) {
      case "+":
        tot = n1 + n2;
        $('#myTable tr:last').after('<tr>'+n1+'</tr><tr>"+"</tr><tr>'+n2+'</tr><tr>'+tot+'</tr>');
        break;
      case "-":
        tot = n1 - n2;
        $('#myTable tr:last').after('<tr>'+n1+'</tr><tr>"-"</tr><tr>'+n2+'</tr><tr>'+tot+'</tr>');
        break;
      case "/":
        tot = n1 / n2;
        $('#myTable tr:last').after('<tr>'+n1+'</tr><tr>"/"</tr><tr>'+n2+'</tr><tr>'+tot+'</tr>');
        break;
      case "*":
        tot = n1 * n2;
        $('#myTable tr:last').after('<tr>'+n1+'</tr><tr>"*"</tr><tr>'+n2+'</tr><tr>'+tot+'</tr>');
        break;
    }
    $("#span1").html(tot);
  }