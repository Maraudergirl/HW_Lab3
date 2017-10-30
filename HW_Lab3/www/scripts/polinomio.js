function solvePoli() {
    var q, a;
	var A, B, C;

	var D;
	var x1, x2, x_r, x1_i, x2_i;
	var text1, text2;

    q = document.getElementById("question");
    a = document.getElementById("answer");
    q.style.display = "none";
    a.style.display = "block";

    A = document.getElementById("coefA").value;
    B = document.getElementById("coefB").value;
    C = document.getElementById("coefC").value;

	document.getElementById("eqA").innerHTML = A;
	document.getElementById("eqB").innerHTML = B;
	document.getElementById("eqC").innerHTML = C;

	D = B*B - 4*A*C;

	if (D > 0) {
		x1 = (-B + Math.sqrt(D))/(2*A);
		x2 = (-B - Math.sqrt(D))/(2*A);
		document.getElementById("sol1").innerHTML = x1;
		document.getElementById("sol2").innerHTML = x2;
	}
	else {
		if (D < 0) {
			x_r = - B/(2*A)
			x1_i = Math.sqrt(-D)/(2*A);
			x2_i = -Math.sqrt(-D)/(2*A);

			text1 = x_r + "+ i·"+x1_i;
			text2 = x_r + "+ i·"+x2_i;
			document.getElementById("sol1").innerHTML = text1;
			document.getElementById("sol2").innerHTML = text2;
		}
		else {
			x1 = -B/(2*A);
			x2 = x1;
			document.getElementById("sol1").innerHTML = x1;
			document.getElementById("sol2").innerHTML = x2;
		}
	}
}
