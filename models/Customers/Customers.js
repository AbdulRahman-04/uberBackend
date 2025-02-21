import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userverified: {
        email: {
            type: String,
            default: false
        },
        phone: {
            type: String,
            default: false
        }
    },
    userverifytoken: {

        email: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        }

    }
  });


//  

let customerModel = mongoose.model("customers", customerSchema, "Customers");

export default customerModel