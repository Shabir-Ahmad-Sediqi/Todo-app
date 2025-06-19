import bcrypt from "bcrypt";

const saltRounds = 10;
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt)
};

export const comparePassword = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword)
}
