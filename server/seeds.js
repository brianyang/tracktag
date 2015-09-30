var fs = Npm.require('fs')
var files = fs.readdirSync('../../../../../server/songs/')
Meteor.startup(function () {

  if (Contacts.find({}).count() === 0) {
    _(3).times(function(n) {
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

      Contacts.insert({
        name: {
          first: tracksObj[n].track,
          last: tracksObj[n].artist
        },
        emails: [{label: 'Work', address: user.email}],
        priority: Fake.fromArray(['High', 'Medium', 'Low']),
        location: {
          city: Fake.word()
        },
        details: {
		  tags: 'tag',
          notes: Fake.paragraph(),
          active: Fake.fromArray([true, false])
        }
      });
    });
  }

});
