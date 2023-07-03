import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async(req, rep) =>{
    try{
        await connect()
        const posts = await Post.find()
        return NextResponse(posts, {status:500})
    }catch(err){
        return NextResponse("Database Error", {status:500})
    }
}