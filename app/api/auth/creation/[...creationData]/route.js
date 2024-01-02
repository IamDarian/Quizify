import { connectDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
import Creations from "@/models/creation";

// async function POST(req, { params }){
//     try{
//         await connectDatabase();

//         console.log(params);
//         await Creations.create({
//             title: ,
//             tag: ,
//             description: ,
//         })
//     } catch (err) {
//         console.log(err);
//     }
//     return NextResponse.json({
//         success: true,
//     });
// }
