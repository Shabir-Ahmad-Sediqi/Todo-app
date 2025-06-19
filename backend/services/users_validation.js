export const validateCreatePerson = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 10
            },
            errorMessage: 
              "Username must be at least 3 characters with max of 32 characters"
        },
        notEmpty: {
            errorMessage:
              "Username can't be empty"
        },
        isString: {
            errorMessage: 
              "Username must be a string"
        }
    },
    email: {
        isEmail: {
            errorMessage: 
              "Enter a valid email"
        }
    },
    password: {
        isLength: {
            options: {
                max: 32,
                min: 8
            },
            errorMessage: "Password must be atleast 8 characters and max of 32 characters"
        },
        notEmpty: {
            errorMessage: "Password cannnot be empty"
        },

    }
};
