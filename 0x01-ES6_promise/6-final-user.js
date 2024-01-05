#!/usr/bin/node
import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(filename)]).then((values) => {
    values.forEach((value) => {
      if (value.status === 'rejected') console.log(value.reason.message);
      else console.log(`${value.value.firstName} ${value.value.lastName}`);
    });
  });

