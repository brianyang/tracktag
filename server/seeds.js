var fs = Npm.require('fs')
var files = fs.readdirSync('../../../../../server/songs/')
console.log(files)
Meteor.startup(function () {

  if (Contacts.find({}).count() === 0) {
    _(2).times(function(n) {
      var user = Fake.user();
	  var tracks = [
		  {track: 'foo', artist: 'bar'},
		  {track: 'baz', artist: 'bat'}
	  ]
	  var tracksArr = files
	  var tracksObj = []
	  tracksArr.forEach(function(track){
		  obj = {
			  track: track,
			  artist: 'artist'
		  }
		  tracksObj.push(obj)
	  })
	  console.log(tracksObj)

      Contacts.insert({
        name: {
          first: tracks[n].track,
          last: tracks[n].artist
        },
        emails: [{label: 'Work', address: user.email}],
        priority: Fake.fromArray(['High', 'Medium', 'Low']),
        location: {
          city: Fake.word(),
          state: Fake.fromArray(STATES)
        },
        details: {
          notes: Fake.paragraph(),
          active: Fake.fromArray([true, false])
        }
      });
    });
  }

});
