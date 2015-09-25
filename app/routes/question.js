import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);	
  }, 
  actions: {
  	update(model,params) {
  	  Object.keys(params).forEach(function(key) {
  	    if(params[key] !== undefined) {
  	      model.set(key,params[key]);	
  	    }	
  	  });
  	  model.save();
  	  this.transitionTo('question');
  	},
  	destroyQuestion(model) {
  	  model.destroyRecord();
  	  this.transitionTo('index');	
  	}, 
  	saveAnswer(params) {
  	  var newAnswer = this.store.createRecord('answer', params);
  	  newAnswer.save();
  	  params.question.save();
  	  this.transitionTo('question', params.question);
  	  location.reload();
  	}
  }
});  
  