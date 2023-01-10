let speakWord = 'Good Bye';

function speak(name) {
	console.log(speakWord + ' ' + name);
}

const byeSpeaker = {
	speak: speak
};

export { byeSpeaker };
