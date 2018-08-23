/*
Translate English to Pig Latin:

rules for Pig Latin (https://en.wikipedia.org/wiki/Pig_Latin):
	- for words that begin with consonant sounds, all letters before 
		the initial vowel are placed at the end of the word sequence.
		Then 'ay' is added, as in the following examples:
			'pig' = 'igpay'
			'latin' = 'atinlay'
			'banana' = 'ananabay'
			'happy' = 'appyhay'
			'duck' = 'uckday'
			'me' = 'emay'
			'too' = 'ootay'
			'will' = 'illway'
			'real' = 'ealray'
			'simple' = 'implesay'
			'say' = 'aysay'
			'bagel' = 'agelbay'
			'fail' = 'ailfay'
			'poo' = 'oopay'
			'party' = 'artypay'
			'lonely' = 'onelylay'

	- When words begin with consonant clusters (multiple consonants 
		that form one sound), the whole sound is added to the end when 
		speaking or writing:
			'smile' = 'ilesmay'
			'string' = 'ingstray'
			'stupid' = 'upidstay'
			'glove' = 'oveglay'
			'trash' = 'ashtray'
			'floor'= 'oorflay'
			'store'= 'orestay'

	- For words that begin with vowel sounds, one just adds 'way' or 
		'yay' to the end (or just 'ay'). Examples are:
			'eat' = 'eatway' or 'eatay'
			'omelet' = 'omeletway' or 'omeletay'
			'are' = 'areway' or 'areay'
			'egg' = 'eggway' or 'eggay'
			'explain' = 'explainway'
			'always' = 'alwaysway' or 'alwaysay'
			'ends' = 'endsway' or 'endsay'
			'honest' = 'honestway'
			'I'= 'Iway'
*/

const wordToPigLatin = word => {
	let isCapitalized = /[A-Z]/.test(word[0]);
	word = word.toLowerCase();
	const firstVowelIndex = getFirstVowelIndex(word);
	let result = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex);
	result += firstVowelIndex === 0 ? 'way' : 'ay';
	if (isCapitalized) {
		result = result[0].toUpperCase() + result.slice(1);
	}
	return result;
};

const getFirstVowelIndex = word => {
	const vowels = word.match(/[aeiou]/);
	if (vowels) {
		return word.indexOf(vowels[0]);
	}
	const yIndex = word.indexOf('y');
	if (yIndex !== -1) return yIndex;
	return 0;
};

// assumes input is valid english without digits, punctuation, contractions, abbreviations, or other special characters
const englishToPigLatin = text => {
	return text.split(' ').map(word => wordToPigLatin(word)).join(' ');
};

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

const testGroup0 = 'pig latin banana happy duck me too will real simple say bagel fail poo party lonely';
const group0Expected = 'igpay atinlay ananabay appyhay uckday emay ootay illway ealray implesay aysay agelbay ailfay oopay artypay onelylay';
assertEquals(englishToPigLatin(testGroup0), group0Expected, 'words that begin with single consonant');

const testGroup1 = 'smile string stupid glove trash floor store';
const group1Expected = 'ilesmay ingstray upidstay oveglay ashtray oorflay orestay';
assertEquals(englishToPigLatin(testGroup1), group1Expected, 'words that begin with a consonant cluster');

// cannot handle cases where initial h is silent: e.g. honest -> honestway
const testGroup2 = 'eat omelet are egg explain always ends I';
const group2Expected = 'eatway omeletway areway eggway explainway alwaysway endsway Iway';
assertEquals(englishToPigLatin(testGroup2), group2Expected, 'words that begin with vowel sounds');

const testGroup3 = 'rhythm my';
const group3Expected = 'ythmrhay ymay'
assertEquals(englishToPigLatin(testGroup3), group3Expected, 'words with no vowels but y');

const testGroup4 = 'tsktsks shh psst';
const group4Expected = 'tsktsksway shhway psstway';
assertEquals(englishToPigLatin(testGroup4), group4Expected, 'words with no vowels');

const testGroup5 = "Alex Jude Louis";
const group5Expected = "Alexway Udejay Ouislay";
assertEquals(englishToPigLatin(testGroup5), group5Expected, 'keeps capitalization for caplitalized inputs');
