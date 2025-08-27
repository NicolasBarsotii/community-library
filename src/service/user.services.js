import userRepository from '../repositeries/users.repositories.js';
import bcrypt from 'bcrypt';

async function createUSerService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if (foundUser) throw new Error ('User alredy exist!')

    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepository.createUSerRepositories({...newUser, password: passHash})
    if (!user) throw new Error('Error creating User')
    return user;
}

export default{
    createUSerService
}