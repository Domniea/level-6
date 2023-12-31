const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

//Signup Password Encryption
userSchema.pre('save', function(next) {
  const user = this
  if(!user.isModified('password')) {
    next()
  }
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

//Login encrypted Password validator
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) {
      callback(err)
    }
    return callback(null, isMatch)
  })
}

//Hide Password from frontend
userSchema.methods.withoutPassword = function() {
  const user = this.toObject()
  delete user.password
  return user
}

module.exports = mongoose.model("User", userSchema)