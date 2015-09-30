var fs = Npm.require('fs')
var id3js = Meteor.npmRequire('id3js')
var meteorRoot = fs.realpathSync( process.cwd() + '/../' )
var base64arraybuffer = Meteor.npmRequire('base64-arraybuffer')
var files = fs.readdirSync(meteorRoot + '/web.browser/app/songs/')
Meteor.startup(function () {

	var user = Fake.user();
	var tracksArr = files
	var tracksObj = []
	tracksArr.forEach(function(track){
		id3js({ file: meteorRoot + '/web.browser/app/songs/' + track, type: id3js.OPEN_LOCAL }, Meteor.bindEnvironment(addTrack));
	})

	function addTrack(err, tags) {
		var img = base64arraybuffer.encode(tags.v2.image.data)
		console.log(img)
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
			},
			avatarUrl: "data:" + tags.v2.image.mime + ";base64," + img
		});
	}

});
