const bcrypt = require('bcrypt');

module.exports = {
    hashedPassword: async (pass) => {
        try{
            const hashpass = await bcrypt.hash(pass,10);
            return hashpass;
        }catch(err){
            console.log(err)
        }
    },
    comparePassword: async (pass,hashPass) => {
        try{
            return bcrypt.compare(pass,hashPass);
        }catch(err){
            console.log(err)
        }
    }
}