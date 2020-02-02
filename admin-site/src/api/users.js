// const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getUsers = async () => {
  await sleep(500);
  return users;
}

export const getUserById = async id => {
  await sleep(500);
  return users.filter(user => user.id === id)[0];
}