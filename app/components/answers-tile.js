import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerShowing:false,
  actions: {
  	updateAnswer(answer) {
  	  var params = {
  	  	author: this.get('author'),
  	  	body: this.get('body'),
  	  };
  	  this.sendAction('updateAnswer', answer, params);
  	  this.set('updateAnswerShowing', false);
  	}, 
  	updateAnswerShow() {
  	  this.set('updateAnswerShowing', true);
  	}
  }
});
