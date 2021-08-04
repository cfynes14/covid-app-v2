let json = require('./localAuthorityBoundaries.json');

const localAuthorities = () => {
    let names = [];
    let namesSorted = [];
    let newNamesArray = [];
    for(let i = 0; i < json['features'].length; i++) {
        names.push(json['features'][i]['properties']['LAD17NM']);
        namesSorted = names.sort()
    }
    for(let i = 0; i < namesSorted.length; i++){
        newNamesArray.push({id: [i], value: namesSorted[i]})
    }
  return newNamesArray;
}

module.exports = localAuthorities;