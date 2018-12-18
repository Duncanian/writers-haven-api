const user = {
  user1: {
    username: '',
    email: 'test@test.com',
    password: 'Aa123!',
  },
  user2: {
    username: 'tester',
    email: '',
    password: 'Aa123!',
  },
  user3: {
    username: 'tester',
    email: 'test@test.com',
    password: '',
  },
  user4: {
    username: 'te',
    email: 'test@test.com',
    password: 'Aa123!',
  },
  user5: {
    username: 'tester',
    email: 'testtest.com',
    password: 'Aa123!',
  },
  user6: {
    username: 'tester',
    email: 'test@test.com',
    password: '123!!!',
  },
  user7: {
    username: 'tester',
    email: 'test@tester.com',
    password: 'Aa123!!!',
  },
};

const userExist = [
  {
    username: 'tester',
    email: 'test@test.com',
    password: 'Aa123!!!',
  },
];

module.exports = { user, userExist };
