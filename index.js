// Voici une série d'exercices pour pratiquer l'algo

// Si vous avez des questions ou si vous avez besoin d'aide supplémentaire, n'hésitez pas à consulter les ressources en ligne sur JavaScript ou à demander de l'aide à vos pairs.

//----------------------------------------------------------------------------------------------//
// EXERCICE 1

// Ajuste la fonction "multiply" qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6

//export const multiply = (a, b) => {
//	return a * b;
//};

//console.info("Exercice 1 :", multiply(2, 3));

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Ajuste la fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1

//export const getFirstElement = (array) => {
//	const firstElement = array[0];
//	return firstElement;
//};

//console.info("Exercice 2 : ", getFirstElement([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Ajuste la fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]

//export const removeLastElement = (box) => {
//	if (Array.isArray(box) && box.length > 0) {
//		box.pop();
//	}

//	return box;
//};

//console.info("Exercice 3 : ", removeLastElement([1, 2, 3])); // [1,2]
//console.info("Exercice 3 : ", removeLastElement([5, 6, 7, 8])); // [5, 6, 7]
//console.info("Exercice 3 : ", removeLastElement([])); // []

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Ajuste la fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6

//export const sumArray = (tableau) => {
//	let result = 0;
//	for (let i = 0; i < tableau.length; i++) {
//		result = result + tableau[i];
//	}
//	return result;
//};

//console.info("Exercice 4 : ", sumArray([5, 6, 7]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 5

//Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"

//export const reverseString = (string) => {
//	let reversedString = "";
//	for (let i = string.length - 1; i >= 0; i--) {
//		reversedString += string[i];
//	}
//	return reversedString;
//};

//console.info("Exercice 5 : ", reverseString("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 6

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3

//export const getMax = (array) => {
//	let maxArray = [0];

//	for (let i = 0; i < array.length; i++) {
//		if (array[i] > maxArray) {
//			maxArray = array[i];
//		}
//	}
//	return maxArray;
//};

//console.info("Exercice 6 : ", getMax([1, 2, 3])); // 3

//----------------------------------------------------------------------------------------------//
// EXERCICE 7

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1

//export const getMin = (arr) => {
//	let min = arr[0];
//	for (let i = 1; i < arr.length; i++) {
//		if (arr[i] < min) {
//			min = arr[i];
//		}
//	}
//	return min;
//};

//console.info("Exercice 7 : ", getMin([1, 2, 3])); //1

//----------------------------------------------------------------------------------------------//
// EXERCICE 8

// Ajuste la fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"

//export const removeVowels = (str) => {
//	let result = "";
//	const vowels = "aeiouAEIOU";
//	for (let i = 0; i < str.length; i++) {
//		if (vowels.indexOf(str[i]) === -1) {
//			result += str[i];
//		}
//	}
//	return result;
//};
//console.info("Exercice 8 : ", removeVowels("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 9

// Ajuste la fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]

//export const sortArray = (arr) => {
//	for (let i = 1; i < arr.length; i++) {
//		const key = arr[i];
//		let j = i - 1;
//		while (j >= 0 && arr[j] > key) {
//			arr[j + 1] = arr[j];
//			j = j - 1;
//		}
//		arr[j + 1] = key;
//	}
//	return arr;
//};

//console.info("Exercice 9 : ", sortArray([1, 3, 2]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 10

// Ajuste la fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

//export const getStringRotations = (str) => {
//	const rotations = [];
//	for (let i = 0; i < str.length; i++) {
//		rotations.push(str.slice(i) + str.slice(0, i));
//	}
//	return rotations;
//};

//console.info("Exercice 10 : ", getStringRotations("Hello"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 11

// Ajuste la fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]

//export const incrementArray = (arr) => {
//	return arr.map((num) => num + 1);
//};

//console.info("Exercice 11 : ", incrementArray([1, 2, 3]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 12

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]

//export const getLengths = (arr) => {
//	return arr.map((str) => str.length);
//};

//console.info("Exercice 12 : ", getLengths(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 13

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]

//export const getFirstLetters = (arr) => {
//	return arr.map((str) => str[0]);
//};

//console.info("Exercice 13 : ", getFirstLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 14

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]

//export const getLastLetters = (arr) => {
//	return arr.map((str) => str[str.length - 1]);
//};

//console.info("Exercice 14 : ", getLastLetters(["Hello", "World"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 15

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]

//export const filterLongStrings = (arr) => {
//	return arr.filter((str) => str.length >= 5);
//};

//console.info(
//	"Exercice 15 : ",
//	filterLongStrings(["Hello", "World", "Test", "Salut", "Yo"]),
//);

//----------------------------------------------------------------------------------------------//
// EXERCICE 16

// Ajuste la fonction qui prend une chaîne de caractères en format snake_case et doit retourner une nouvelle chaîne de caractères contenant les mêmes mots, mais sans les underscores.
// Exemple : "Bonjour_c'est_papy" => "bonjour c'est papy"

//export const snake_case = (str) => {
//	return str.replace(/_/g, " ");
//};

//console.info("Exercice 16 : ", snake_case("Bonjour_c'est_papy"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 17

// Ajuste la fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]

//export const mergeArrays = (arr1, arr2) => {
//	return arr1.concat(arr2);
//};

//console.info(
//	"Exercice 17 : ",
//	mergeArrays(["Hello", "World"], ["Test", "Salut"]),
//);

//----------------------------------------------------------------------------------------------//
// EXERCICE 18

// Ajuste la fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les strings qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"].

//export const filterStringsWithE = (arr) => {
//	return arr.filter((str) => str.includes("e"));
//};
//console.info(
//	"Exercice 18 : ",
//	filterStringsWithE(["Poulet", "Chat", "Chien", "Cheval"]),
//);

//----------------------------------------------------------------------------------------------//
// EXERCICE 19

// Ajuste la fonction qui prend en paramètre un tableau de nombres et qui doit retourner tous les nombres qui sont pairs par ordre croissant.
// Exemple : [2, 9, 6, 5, 6] => [2, 6, 6].

//export const filterAndSortEvenNumbers = (arr) => {
//	return arr.filter((num) => num % 2 === 0).sort((a, b) => a - b);
//};

//console.info("Exercice 19 : ", filterAndSortEvenNumbers([2, 9, 6, 5, 6]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 20

// Ajuste la fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// Exemple :
// findShort("Prachett is the best author in the world") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

//export const findShort = (str) => {
//	const words = str.split(" ");
//	return Math.min(...words.map((word) => word.length));
//};

//console.info(
//	"Exercice 20 : ",
//	findShort("Prachett is the best author in the world"),
//);
//console.info(
//	"Exercice 20 : ",
//	findShort("The quick brown fox jumps over the lazy dog"),
//);
//----------------------------------------------------------------------------------------------//
// EXERCICE 21

// Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre.
// Deux chaînes sont des anagrammes si elles contiennent les mêmes caractères, quel que soit l'ordre.
// Exemple : anagram("listen", "silent") // true

//export const anagram = (str1, str2) => {
//	return str1.split("").sort().join("") === str2.split("").sort().join("");
//};

//console.info("Exercice 21 : ", anagram("listen", "silent"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 22

// Écrivez une fonction qui enlève les doubles lettres d'une chaîne donnée.
// Exemple : removeDoubleLetters("google") // "gogle"

//export const removeDoubleLetters = (str) => {
//	let result = "";

//	for (let i = 0; i < str.length; i++) {
//		if (str[i] !== str[i + 1]) {
//			result += str[i];
//		}
//	}

//	return result;
//};

//console.info("Exercice 22 : ", removeDoubleLetters("google"));

//----------------------------------------------------------------------------------------------//

// EXERCICE 23
// Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple : createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

//export const createPhoneNumber = (numbers) => {
//	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//};

//console.info(
//	"Exercice 23 : ",
//	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//);

//----------------------------------------------------------------------------------------------//
// EXERCICE 24

// Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres et qui renvoie la lettre manquante de la série.
// Exemple : findMissingLetter(["a", "b", "c", "d", "f"]) // "e"

//export const findMissingLetter = (letters) => {
//	const alphabet = "abcdefghijklmnopqrstuvwxyz";
//	const start = alphabet.indexOf(letters[0]);
//	for (let i = 0; i < letters.length; i++) {
//		if (alphabet[start + i] !== letters[i]) {
//			return alphabet[start + i];
//		}
//	}
//};

//console.info("Exercice 24 : ", findMissingLetter(["a", "b", "c", "d", "f"]));

//----------------------------------------------------------------------------------------------//

// EXERCICE 25
// Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple : sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]

//export const sortString = (strings) => {
//	return strings.sort();
//};

//console.info(
//	"Exercice 25 : ",
//	sortString(["Banana", "Orange", "Apple", "Mango"]),
//);

//----------------------------------------------------------------------------------------------//
// EXERCICE 26

// Ajuste la fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// Exemple : otherAngle(30, 60) // 90
// Pour trouver le troisième angle, soustrayez la somme des deux angles donnés à 180 degrés.

//export const otherAngle = (angle1, angle2) => {
//	return 180 - (angle1 + angle2);
//};

//console.info("Exercice 26 : ", otherAngle(30, 60));

//----------------------------------------------------------------------------------------------//
// EXERCICE 27

// Ajuste la fonction qui peut déterminer si une année est une année bissextile ou non.
// Une année bissextile est divisible par 4, sauf si elle est divisible par 100, à moins qu'elle ne soit également divisible par 400.
// Exemple : isLeapYear(2020) // true

//export const isLeapYear = (year) => {
//	if (year % 4 !== 0) {
//		return false;
//	}
//	if (year % 100 !== 0) {
//		return true;
//	}
//	if (year % 400 !== 0) {
//		return false;
//	}
//	return true;
//};

//console.info("Exercice 27 : ", isLeapYear(2022));

//----------------------------------------------------------------------------------------------//
// EXERCICE 28

// Ajuste la fonction qui prend en entrée un tableau contenant des noms d'animaux. La fonction doit renvoyer un nouveau tableau composé de deux sous-tableaux :
// Le premier sous-tableau doit inclure les noms des animaux domestiques.
// Le deuxième sous-tableau doit inclure les noms des animaux sauvages.
// Exemple : sortAnimals(animals) // [["Cat", "Dog"], ["Eagle", "Monkey"]]

//export const sortAnimals = (animals) => {
//	const domesticAnimals = ["Cat", "Dog"];
//	const wildAnimals = ["Eagle", "Monkey"];
//	const domestic = [];
//	const wild = [];

//	for (const animal of animals) {
//		if (domesticAnimals.includes(animal)) {
//			domestic.push(animal);
//		} else if (wildAnimals.includes(animal)) {
//			wild.push(animal);
//		}
//	}

//	return [domestic, wild];
//};

//console.info("Exercice 28 : ", sortAnimals(["Cat", "Dog", "Eagle", "Monkey"]));

//----------------------------------------------------------------------------------------------//
// EXERCICE 29

// Complète la fonction decodeMessage() qui doit décoder un message chiffré utilisant le chiffre de César avec un décalage de 16 positions vers la droite dans l'alphabet. Le message sera fourni en majuscules et peut contenir des espaces ou d'autres caractères spéciaux qui doivent rester inchangés.
// Exemple : Si on appelle decodeMessage("XUBBE MEHBT"), la fonction doit renvoyer "HELLO WORLD".
// https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

//export const decodeMessage = (message) => {
//	const shift = 16;
//	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//	let decodedMessage = "";

//	for (const char of message) {
//		if (alphabet.includes(char)) {
//			const index = alphabet.indexOf(char);
//			const newIndex = (index - shift + 26) % 26;
//			decodedMessage += alphabet[newIndex];
//		} else {
//			decodedMessage += char;
//		}
//	}

//	return decodedMessage;
//};

//console.info("Exercice 29 :", decodeMessage("XUBBE MEHBT"));

//----------------------------------------------------------------------------------------------//
// EXERCICE 30

// Ajuste la fonction qui renverra notre score à partir des résultats des matchs.
// Exemple : calculateScore(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]) // 13
// Utilisez une boucle pour parcourir le tableau et une condition pour déterminer les points à ajouter.

//export const calculateScore = (results) => {
//	let score = 0;

//	for (const result of results) {
//		const [x, y] = result.split(":").map(Number);
//		if (x > y) {
//			score += 3;
//		} else if (x === y) {
//			score += 1;
//		}
//	}

//	return score;
//};

//console.info(
//	"Exercice 30 : ",
//	calculateScore([
//		"1:0",
//		"2:0",
//		"3:0",
//		"4:4",
//		"2:2",
//		"3:3",
//		"1:4",
//		"2:3",
//		"2:4",
//		"3:3",
//	]),
//);
//javascript
/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/
//function countLetters(givenString, letter){
// Your code here !
//function countLetters(givenString, letter) {
//	const count = givenString.split("").filter((char) => char === letter).length;
//	console.info(
//		`le nombre de fois qu'une lettre apparait"${letter}" dans la chaîne "${givenString}" est : ${count}`,
//	);
//	return count;
//}

//console.info(countLetters("", "a")); // 0
//console.info(countLetters("a", "a")); // 1
//console.info(countLetters("aaaaabbbaa", "a")); // 7
//console.info(countLetters("bbacbaaa", "c")); // 1
//console.info(countLetters("bbcc", "a")); // 0

//export default countLetters;
/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

//function getFibonacciSequence(n) {
// Si le nombre demandé est 0 ou moins, on retourne une liste vide
//	if (n <= 0) {
//		return [];
//	}

// On crée une liste avec les deux premiers nombres de Fibonacci
//	const sequence = [0, 1];

// On utilise une boucle pour ajouter les autres nombres
//	for (let i = 2; i < n; i++) {
// On additionne les deux derniers nombres pour en créer un nouveau
//		const nextNumber = sequence[i - 1] + sequence[i - 2];

// On ajoute ce nombre à la liste
//		sequence.push(nextNumber);
//	}

// On retourne seulement les "n" premiers nombres
//	return sequence.slice(0, n);
//}

// ---- TEST ----
//const n = 5; // On choisit un nombre pour tester
//const result = getFibonacciSequence(n); // On appelle la fonction
//console.info("Suite de Fibonacci pour n =", n, ":", result); // On affiche le résultat

//export default getFibonacciSequence;
