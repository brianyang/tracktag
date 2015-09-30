var fs = Npm.require('fs')
// var id3 = Npm.require('id3')
// var ID3 = Meteor.npmRequire('id3')
var files = fs.readdirSync('../../../../../server/songs/')
Meteor.startup(function () {

  if (Contacts.find({}).count() < 5) {
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
	   // ID3.loadTags(track + ".mp3", function() {
		//    var tags = ID3.getAllTags(track);
		//    alert(tags.artist + " - " + tags.title + ", " + tags.album);
	   // });

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
