export function getYearsPassed(date: string) {
	const [year, month, day] = date.split("-").map(Number);
	const today = new Date();
	const birthdayHasPassed =
		today.getMonth() + 1 > month ||
		(today.getMonth() + 1 === month && today.getDate() >= day);

	return today.getFullYear() - year - (birthdayHasPassed ? 0 : 1);
}
