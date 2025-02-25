import { db } from "./server/db";

async function createUser() {
    await db.user.create({
        data: {
            emailAddress: "test@gmail.com",
            firstName: "Anand",
            lastName: "Tirumal",
        },
    });
    console.log("User created successfully");
}

// Call the function
createUser().catch(console.error);
