var isTriangle = function(a,b,c) {
  if((a >= b + c)||(b >= a + c)||(c >= a + b)) {
    return false;
  } else {
    return true;
  }
};
var orderSides = function(sides) {
  return sides.sort(function(a,b) { return a - b }).reverse();
};

var drawTriangle = function(sides) {
  var scale = 200/(sides[0]);
  var peakX = (scale * sides[1] * Math.sin(Math.PI / 2 - Math.acos((Math.pow(sides[0],2) + Math.pow(sides[1],2) - Math.pow(sides[2],2)) / (2 * sides[0] * sides[1])))).toFixed(1);
  var peakY = (scale * Math.sqrt(Math.pow(sides[1],2)-Math.pow(peakX / scale,2))).toFixed(1);
  var colorA = "#39bda7";
  var colorB = "#8f8f8f";
  return '<svg height="' + peakY + '" width="400" id="canvas"><polygon points="0,0 200,0 ' + peakX + ',' + peakY + '" style="fill:' + colorA +';stroke:' + colorB +';stroke-width:1" /></svg>';
};

function solveTriLLL() {
  var ques, ans;
	var a, b, c;
	var error;
	var alpha, beta, gamma;

  a = document.getElementById("lado_a").value;
  b = document.getElementById("lado_b").value;
  c = document.getElementById("lado_c").value;

	if (!isTriangle(a, b, c)){
      //Mensaje de error
      alert("Los lados entregados no hacen un triángulo! Intenta otros valores");
    	}
    else {
      ques = document.getElementById("question");
      ans = document.getElementById("answer");
      ques.style.display = "none";
      ans.style.display = "block";

      alpha = Math.acos((b*b + c*c - a*a)/(2*b*c)) // en radianes
      alpha = 180*alpha/Math.PI;  // en grados
      beta = Math.acos((a*a + c*c - b*b)/(2*a*c)) // en radianes
      beta = 180*beta/Math.PI;  // en grados
      gamma = 180 - alpha - beta;

      var triangle = {
        side1: a,
        side2: b,
        side3: c
      };
      triangle['orderSides'] = function() {}
      //// DIBUJAR TRIANGULO

    document.getElementById("triangle").innerHTML = drawTriangle(orderSides([triangle.side1,triangle.side2,triangle.side3]));
      //// Expresar VALORES OBTENIDOS

    document.getElementById("alp").innerHTML = alpha;
    document.getElementById("bet").innerHTML = beta;
    document.getElementById("gam").innerHTML = gamma;


    }

}
