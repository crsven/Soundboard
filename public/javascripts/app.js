/* DO NOT MODIFY. This file was compiled Wed, 21 Dec 2011 22:01:28 GMT from
 * /Users/swilliams/code/5by5Sounds/app/coffeescripts/app.coffee
 */

(function() {
  var _ref;

  this.app = (_ref = window.app) != null ? _ref : {};

  jQuery(function() {
    var bytes;
    bytes = [
      new app.SoundByte({
        title: '*Eating*',
        filename: 'gruber-eating',
        show: 'The Talk Show',
        url: 'http://5by5.tv/talkshow',
        speaker: 'Gruber'
      }), new app.SoundByte({
        title: "Hi I'm Merlin Mann!",
        filename: 'hi-im-merlin',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Bulk Bag',
        filename: 'bulkbag',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Terp-stra',
        filename: 'terpstra',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Hi!',
        filename: 'hi',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Merlin'
      }), new app.SoundByte({
        title: 'Big Week!',
        filename: 'bigweek',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Dan'
      }), new app.SoundByte({
        title: 'Can I Aks You a Queshon?',
        filename: 'aksquestion',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Merlin'
      }), new app.SoundByte({
        title: '*Giggle*',
        filename: 'merlingiggle',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Merlin'
      }), new app.SoundByte({
        title: 'Textbook!',
        filename: 'textbook',
        show: 'Hypercritical',
        url: 'http://5by5.tv/hypercritical',
        speaker: 'Siracusa'
      }), new app.SoundByte({
        title: 'Posse Full of Angry',
        filename: 'angry-posse',
        show: 'Back to Work',
        url: 'http://5by5.tv/b2w',
        speaker: 'Merlin'
      }), new app.SoundByte({
        title: "I Don't Know",
        filename: 'idontknow',
        show: 'The Talk Show',
        url: 'http://5by5.tv/talkshow',
        speaker: 'Gruber'
      })
    ];
    this.app.SoundBytes.add(bytes);
    this.app.router = new app.AppRouter();
    if (Modernizr.history) {
      return Backbone.history.start({
        pushState: true
      });
    } else {
      return Backbone.history.start();
    }
  });

}).call(this);
