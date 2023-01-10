let speakWord = 'Hello';

function speak(name) {
	console.log(speakWord + ' ' + name);
}

const helloSpeaker = {
	speak: speak
};

export { helloSpeaker };
