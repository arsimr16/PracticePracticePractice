// write a program that prints steps to solve the classic tower of hanoi problem for n discs

// recursive solution
const towerOfHanoi = (n, from, to, aux) => {
	if (n === 1) {
		console.log(`Move disc 1 from rod ${from} to rod ${to}` );
		return;
	} else {
		towerOfHanoi(n - 1, from, aux, to);
		console.log(`Move disc ${n} from rod ${from} to rod ${to}`)
		towerOfHanoi(n - 1, aux, to, from);
	}
}

towerOfHanoi(4, 'A', 'C', 'B');

/* should return:
 Move disk 1 from rod A to rod B
 Move disk 2 from rod A to rod C
 Move disk 1 from rod B to rod C
 Move disk 3 from rod A to rod B
 Move disk 1 from rod C to rod A
 Move disk 2 from rod C to rod B
 Move disk 1 from rod A to rod B
 Move disk 4 from rod A to rod C
 Move disk 1 from rod B to rod C
 Move disk 2 from rod B to rod A
 Move disk 1 from rod C to rod A
 Move disk 3 from rod B to rod C
 Move disk 1 from rod A to rod B
 Move disk 2 from rod A to rod C
 Move disk 1 from rod B to rod C
 */
