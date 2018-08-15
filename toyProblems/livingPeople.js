// Given a list of people with their birth and death years, implement a method to compute
// the year with the most number of people alive.  You may assume that all people were 
// born between 1900 and 2000 (inclusive).  If a person was alive during any portion of 
// that year, they should be included in that year's count.

// I: an arr of people arrays - arr[0] birth year, arr[1] death year
// O: year with the greatest number of people alive
// C: none
// E: if person is still alive, arr[1] is null, multiple years have the same number of people
// living - return the first year, someone can be born and die in the same year - that should
// still count as 1 person, if there are no people, return 1900 because it's the first year and
// all the years have 0, so the first year with 0 is 1900
const livingPeople = livingYears => {
	const years = Array(102).fill(0);
	let peopleAlive = 0;
	let maxLiving = 0;
	let maxYear = 0;
	livingYears.forEach(person => {
		years[person[0] - 1900] = years[person[0] - 1900] + 1;
		if (person[1]) {
			years[person[1] - 1899] = years[person[1] - 1899] -1;
		}
	});
	years.forEach((year, i) => {
		peopleAlive += year;
		if (peopleAlive > maxLiving) {
			maxLiving = peopleAlive;
			maxYear = i;
		}
	});
	return maxYear + 1900;
};
// time complexity: O(people + yearRange)
// space complexity: O(yearRange)

const assertEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log(`passed ${testName}`);
	} else {
		console.log(`FAILED ${testName}: expected ${expected}, but got ${actual}`);
	}
};

const livingYears = [[1901, 1968],[1955, null],[1928, 1972],[1943, 1999],[1935, 1988],
[1993, null],[1910, 1949],[1907, 1977],[1922, 2000],[1904, 1909],
[1975, null],[1988, null],[1909, 1909],[1982, null],[1915, 1933],
[1903, 1904],[1955, 1999],[1928, null],[1920, 1973],[1985, null],
[1958, 2000],[1990, null],[1932, 1972],[1946, 1947],[1935, null]];

assertEquals(livingPeople(livingYears), 1958, 'returns the year with the most people alive');
