const tinderUser = {};
tinderUser.name = "Ramesh";
tinderUser.age = 21;
tinderUser.isLoggedIn = false;


console.log(tinderUser);

const regularUser = {
    email: "ramesh@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Ramesh",
            lastname: "Das"
        }
    }
}

const paymentStatus = [
    {
        id: 1,
        isPaid: true
    },
    {
        id: 2,
        isPaid: false
    },
    {
        id: 3,
        isPaid: true
    }
]

const users = [
    {
        id: 1,
        email: "ramesh@gmail.com",
        paymentStatus: paymentStatus[0]
    },
    {
        id: 2,
        email: "anik@gmail.com",
        paymentStatus: paymentStatus[1]
    },
    {
        id: 3,
        email: "anulipi@gmail.com",
        paymentStatus: paymentStatus[2]
    }
]