export const CAR_YEARS = function getYears() {
    var d = new Date();
    var n = d.getFullYear();
    var years = [];

    for (i = 1980; i < (n + 1); i++) {
        years.push({ id: i, name: i }, );
    }

    return years;
}