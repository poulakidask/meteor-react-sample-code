import { Mongo } from 'meteor/mongo';
 
export const Employees = new Mongo.Collection('employees');

Meteor.subscribe("employees");