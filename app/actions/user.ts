"use server"
import client from "@/db"

export async function signupaction(email : string, password : string){
    try {
        await client.user.create({
            data : {
                email : email ,
                password : password
            }
        })
        return true

    } catch (e) {
        return false
    }
}