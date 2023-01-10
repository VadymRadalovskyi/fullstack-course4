import { helloSpeaker } from './SpeakHello.js';
import { byeSpeaker } from './SpeakGoodBye.js';

let names = [
	'Yaakov',
	'John',
	'Jen',
	'Jason',
	'Paul',
	'Frank',
	'Larry',
	'Paula',
	'Laura',
	'Jim'
];

(() => {
	for (let element of names) {
		let firstLetter = element.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			byeSpeaker.speak(element);
		} else {
			helloSpeaker.speak(element);
		}
	}
})();
