import { PrismaClient } from "@prisma/client";

const client = new PrismaClient
async function getUserDetails() {
    const user = await client.user.findFirst();
    return {
      email : user?.email,
      username : "Satya"
    }
}

export default async function User() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.username}
                </div>
                
                email : {userData?.email}
            </div>
        </div>
    </div>
  );
}
