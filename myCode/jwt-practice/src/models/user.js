import mongoose, {Schema} from "mongoose"
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username: String,
    hashedPassword : String
})

UserSchema.methods.setPassword = async function(password){
    // 비밀번호 생성하기
    const hash = await bcrypt.hash(password, 10)
    this.hashedPassword = hash
}
UserSchema.methods.checkPassword = async function(password){
    // 비밀번호 검사하기
    const result = await bcrypt.compare(password, this.hashedPassword)
    return result
}
UserSchema.statics.findByUsername = async function(username){
    return this.findOne({username}) // this -> model을 지칭함.
}

const User = mongoose.model('User', UserSchema)
export default User