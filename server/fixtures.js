import '../imports/startup/server/main.js';

// If the database is empty it creates some sample data.
Meteor.startup(() => {
  if (Tasks.find().count() === 0 && Employees.find().count() === 0 ){
        
      // Create Tasks
  		let taskId1 = Tasks.insert({description: "Backup Project"});
  		let taskId2 = Tasks.insert({description: "Deploy to server"});
  		let taskId3 = Tasks.insert({description: "Talk with customer in London"});

  		//Create Employees and assign some Tasks

  		Employees.insert({name: "Thomas	David",tasks:[{_id:taskId1,description: "Backup Project"}]});
  		Employees.insert({name: "George	Richard",tasks:[{_id:taskId2,description: "Deploy to server"}]});
  		Employees.insert({name: "Emma Smith",tasks:[{_id:taskId1,description: "Backup Project"},{_id:taskId3,description: "Talk with customer in London",finished:1}]});


	}
});