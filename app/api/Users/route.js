import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDatabase } from "@/utils/database";

export async function POST(req) {
  try {
    await connectDatabase();

    const body = await req.json();
    const userData = body.signUpData;
    console.log(userData);

    if (!userData?.email || !userData.password) {
      return NextResponse.json({ message: "All fields are required." });
    }

    const duplicate = await User.findOne({ email: userData.email }).lean();
    if (duplicate) {
      return NextResponse.json({ message: "The user already exists." });
    }

    await User.create(userData);
    return NextResponse.json({ message: "User has successfuly been created." });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err });
  }
}
