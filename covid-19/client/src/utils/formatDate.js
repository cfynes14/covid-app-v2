function formatDate(dateString)
{
    let allDate = dateString.split(' ');
    let thisDate = allDate[0].split('-');
    let newDate = [thisDate[2],thisDate[1],thisDate[0] ].join("-");
    return newDate;
}
export default formatDate