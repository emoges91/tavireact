import { AXIOS_MAIN } from '../../utils/axios-main';

export default function getOwners() {
    var driversList = [];
    AXIOS_MAIN
        .get("api.php?request=Drivers&apiKey=VOFN459045NGFLGFL496WEYLPOP&token=djy1c27f4k9x6bsh0tx981ta")
        .then(function (result) {

            driversList = result.data.map(function (item, i) {
                return (
                    { id: item.Id, name: item.Name + " " + item.LastName }
                );
            });

            console.log("owners1 : " + JSON.stringify(driversList));
        });
    console.log("owners2 : " + JSON.stringify(driversList));
    return driversList;
}