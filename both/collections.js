STATES = [
  'AK', 'AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

Contacts = new Mongo.Collection('contacts');

Contacts.before.insert(function (userId, doc) {
  var gender = Random.choice(['men', 'women']);
  var num = _.random(0, 50);
  doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
});

Contacts.attachSchema(new SimpleSchema({
  name: {
    type: Object
  },
  'name.first': {
    type: String,
    label: 'Track',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Track'
    },
    max: 200
  },
  'name.last': {
    type: String,
    label: 'Artist',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Artist'
    },
    max: 200
  },
  details: {
    type: Object
  },
  'details.notes': {
    type: String,
    label: 'Notes',
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  'details.active': {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  avatarUrl: {
    type: String,
    optional: true
  }
}));
