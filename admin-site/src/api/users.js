const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const users = [
  {
    id: 0,
    name: '0gorilla-Kim',
    birthday: "960322",
    email: '00ghks22@naver.com',
    createAt: new Date().toString(),
    isDeleted: 0
  },
  {
    id: 1,
    name: '1gorilla-Kim',
    birthday: "960322",
    email: '00ghks22@naver.com',
    createAt: new Date().toString(),
    isDeleted: 0
  },
  {
    id: 2,
    name: '2gorilla-Kim',
    birthday: "960322",
    email: '00ghks22@naver.com',
    createAt: new Date().toString(),
    isDeleted: 0
  }
];

export const getUsers = async () => {
  await sleep(500);
  return users;
}

export const getUserById = async id => {
  await sleep(500);
  return users.filter(user => user.id === id)[0];
}