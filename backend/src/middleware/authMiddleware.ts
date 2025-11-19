import bcrypt from "bcrypt";

export const encryptPassword = async (password : string)=>{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password , salt);
  return hashedPassword;
}

export const compare = async (userPassword : string , hashedPassword : string |undefined | null)=>{
  
  if(hashedPassword && userPassword){
    return await bcrypt.compare(userPassword ,hashedPassword);
  }
  return false ;
}