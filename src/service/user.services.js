import userRepository from '../repositeries/users.repositories.js';

async function createUSerService(newUser){
    const user = await userRepository.createUSerRepositories(newUser)
    return user;
}

export default{
    createUSerService
}