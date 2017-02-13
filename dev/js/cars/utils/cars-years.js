
export default function getYears() {
     var d = new Date();
    var n = d.getFullYear();
    var years = [];

    for (var i = n+1; i > 1980; i--) {
        years.push({ id: i, name: i }, );
    }

    return years;
}