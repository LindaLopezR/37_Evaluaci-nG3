//Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos
// -------------------
// -------------------
// PSEUDOCODIGO
// Variables:
// 	usuario=0;
// 	computadora=0;
// 1. INICIO
// 2. Print 'Ingresa un número del 1 al 10'
// 3. for(i=0;i<3;i++) {
// 4.if(numero<10){
// 		Print 'Introduce tú respuesta: piedra, papel o tijera'
// 		respuesta;
// 		if(numero==1 || numero==4 || numero==7){
// 			switch(respuesta) {
// 				case 'piedra': Print 'Empate'; 
// 				break;
// 				case 'papel': Print 'Ganas un punto'; 
// 					usuario++;
// 				break;
// 				case 'tijeras': Print 'Gana computadora'; 
// 					computadora++;
// 				break;
// 				default: Print 'Gana computadora'
//					computadora++;
// 			}	
// 		} else if(numero==2 || numero==5 || numero==9){
// 			switch(respuesta) {
//				case 'piedra': Print 'Gana computadora'
// 					computadora++;
// 				break;
// 				case 'papel':  Print 'Empate'; 
// 				break;
// 				case 'tijeras': Print 'Ganas un punto';
// 					usuario++;
//				break;
//				default: Print 'Gana computadora'
//					computadora++;
// 		} else {
// 			switch(respuesta) {
//				case 'piedra': Print 'Ganas un punto'
// 					usuario++;
//				break;
//				case 'papel': Print 'Gana computadora'
//					computadora++;
//				break;
//				case 'tijeras': Print 'Empate';
//				break;
//				default: Print 'Gana computadora'
//					computadora++;
// 		}
		
// 	} else {
// 	Print 'Número no válido'
// 	}
// }
// 5. if(usuario==computadora){
// 	Print 'Tú: ', usuario, ' puntos. Computadora: ', computadora, ' puntos. EMPATE';
// } else if(usuario>computadora){
// 	Print'Tú: ', usuario, ' puntos. Computadora: ', computadora, ' puntos. ¡GANASTE!';
// } else {
// 	alert('Tú: ', usuario, ' puntos. Computadora: ', computadora, ' puntos. PERDISTE');
// }
// 6. FIN
// -------------------
// -------------------







// --- PROGRAMA ---

// alert('Este es el juego de piedra, papel o tijera, gana quién gane más rondas.\nEs una ronda de 3 turnos.\n¡Suerte!');
// usuario=0;
// computadora=0;
// for(i=0;i<3;i++) {
// 	var numero = parseInt(prompt('Ingresa un número del 1 al 9'));
// 	if(numero<10){
// 		var palabraDicha = prompt('Piedra, papel o tijeras\n¿Qué eliges?\n(Escribe en minúscula, sino no se te contara tu respuesta.)');
// 		if(numero==1 || numero==4 || numero==7){ //PIEDRA
// 			switch (palabraDicha) {
// 				case 'piedra': 
// 					alert('Empate.\nNadie gana.');
// 				break;
// 				case 'papel': 
// 					alert('Computadora: Piedra\nGana papel.\nGanas un punto.');
// 					usuario++;
// 				break;
// 				case 'tijeras': 
// 					alert('Computadora: Piedra\nGana piedra.\nPunto a computadora.');
// 					computadora++;
// 				break;
// 				default: 
// 					alert('Palabra no admitida. Gana piedra.\nPunto a computadora.');
// 					computadora++;
// 			}
// 		} else if(numero==2 || numero==5 || numero==9){ //PAPEL
// 			switch (palabraDicha) {
// 				case 'piedra': 
// 					alert('Computadora: Papel\nGana papel.\nPunto a computadora.');
// 					computadora++;
// 				break;
// 				case 'papel': 
// 					alert('Empate.\nNadie gana.');
// 				break;
// 				case 'tijeras': 
// 					alert('Computadora: Papel\nGana tijeras.\nGanas un punto.');
// 					usuario++;
// 				break;
// 				default: 
// 					alert('Palabra no admitida. Gana papel.\nPunto a computadora.');
// 					computadora++;
// 			}
// 		} else {
// 			switch (palabraDicha) { //TIJERAS
// 				case 'piedra': 
// 					alert('Computadora: Tijeras\nGana piedra.\nGanas un punto.');
// 					usuario++;
// 				break;
// 				case 'papel':
// 					alert('Computadora: Tijeras\nGana tijeras.\nPunto a computadora.');
// 					computadora++;
// 				break;
// 				case 'tijeras': 
// 					alert('Empate.\nNadie gana.');
// 				break;
// 				default: 
// 					alert('Palabra no admitida. Gana tijeras.\nPunto a computadora.');
// 					computadora++;
// 			}
// 		}
// 	} else {
// 		alert('Número no válido.\nGana computadora este turno.');
// 		computadora++;
// 	}
// }
// if(usuario==computadora){
// 	alert('Tú: '+usuario+' puntos\nComputadora: '+computadora+' puntos.\nEMPATE');
// } else if(usuario>computadora){
// 	alert('Tú: '+usuario+' puntos\nComputadora: '+computadora+' puntos.\n¡GANASTE!');
// } else {
// 	alert('Tú: '+usuario+' puntos\nComputadora: '+computadora+' puntos.\nPERDISTE');
// }
