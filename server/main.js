import '../imports/startup/server/main.js';


Employees= new Mongo.Collection('employees');
Tasks= new Mongo.Collection('tasks');

Meteor.publish("employees",function(){
  return Employees.find();
});

Meteor.publish("tasks",function(){
  return Tasks.find();
});

Meteor.methods({

	// Employee's functions
	addEmployee:function(name) {
	      	try{	      		   
		      Employees.insert({name: name});
	      	}
		     catch ( exception ) {
		      throw new Meteor.Error( '500', `${ exception }` );
		    }
     },   
     removeEmployee:function(id) {
 			try{	      		   
		      Employees.remove(id);
	      	}
		    catch ( exception ) {
		      throw new Meteor.Error( '500', `${ exception }` );
		    }
     },
     updateEmployeeTasks:function(id,tasks){    	
     	try{
				Employees.update( { _id: id },{ $set: {tasks: tasks} });
	      	}
		catch ( exception ) {
		    	throw new Meteor.Error( '500', `${ exception }` );
		    }
     },
      toggleFinished:function(id,taskId,finished){    	
     	try{
				//Employees.update( { _id: id, "tasks._id" : taskId  },{ $set: {tasks.$.finished: finished} });

				Employees.update({_id: id, 'tasks': {$elemMatch: {_id:taskId}}},{$set : {"tasks.$.finished" : finished}},{multi: true});
	      	}
		catch ( exception ) {
		    	throw new Meteor.Error( '500', `${ exception }` );
		    }
     },

     

     // Task's functions
     addTask:function(description) {
	      	try{	      		   
		      Tasks.insert({description: description});
	      	}
		     catch ( exception ) {
		      throw new Meteor.Error( '500', `${ exception }` );
		    }
     },     
     removeTask:function(id) {
 			try{	      		   
		      Tasks.remove(id);
	      	}
		    catch ( exception ) {
		      throw new Meteor.Error( '500', `${ exception }` );
		    }
     },


});