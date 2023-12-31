// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop != "tracks" && prop != '') {
    records[id][prop] = value 
  } else if(prop != '') {
    if (records[id].hasOwnProperty(prop)) {
      records[id][prop].push(value);
     } else {
     records[id][prop] = [];
     records[id][prop].push(value);
     }
  } 
  if(value == "") {
    delete records[id][prop];
    }

 
  return records;
}

updateRecords(recordCollection, 2548, "tracks", "");