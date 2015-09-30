var fs = Npm.require('fs')
var id3js = Meteor.npmRequire('id3js')
var files = fs.readdirSync('../../../../../server/songs/')
console.log(id3js)
Meteor.startup(function () {

  if (Contacts.find({}).count() < 15) {
    _(3).times(function(n) {
      var user = Fake.user();
	  var tracksArr = files
	  var tracksObj = []
	  tracksArr.forEach(function(track){
		  obj = {
			  track: track,
			  artist: 'artist'
		  }
		  tracksObj.push(obj)
	  })
	  var track = tracksArr[0]
	  id3js({ file: '../../../../../server/songs/' + track, type: id3js.OPEN_LOCAL }, function(err, tags) {
		  console.log('tags', tags.title)
		  console.log('tags', tags.artist)
	      // tags now contains your ID3 tags
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
		  tags: '',
          notes: Fake.paragraph(),
          active: Fake.fromArray([true, false])
        }
      });
    });
  }

});
