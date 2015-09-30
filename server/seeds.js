var fs = Npm.require('fs')
var id3js = Meteor.npmRequire('id3js')
var files = fs.readdirSync('../../../../../server/songs/')
console.log(id3js)
Meteor.startup(function () {

  if (Contacts.find({}).count() < 55) {
    _(1).times(function(n) {
      var user = Fake.user();
	  var tracksArr = files
	  var tracksObj = []
	  console.log('foo')
	  tracksArr.forEach(function(track){
		  id3js({ file: '../../../../../server/songs/' + track, type: id3js.OPEN_LOCAL }, Meteor.bindEnvironment(addTrack));
	  })

	  function addTrack(err, tags) {
		  console.log('err, tags', err, tags)
		  Contacts.insert({
			name: {
			  first: tags.title,
			  last: tags.artist
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
	  }
    });
  }

});
