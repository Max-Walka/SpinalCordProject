import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const { data, error } = await supabase
      .from("Staff Credentials")
      .select("username, password_hash, STAFFstaff_id")
      .eq("username", username)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const passwordMatches = await bcrypt.compare(password, data.password_hash);

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const { data: nameData } = await supabase
      .from("Staff Name")
      .select("prefix, given_name, preferred_name, family_name")
      .eq("STAFFstaff_id", data.STAFFstaff_id)
      .maybeSingle();

    const firstName = nameData?.preferred_name || nameData?.given_name || "";

    const fullName = [
      nameData?.prefix,
      firstName,
      nameData?.family_name,
    ]
      .filter(Boolean)
      .join(" ");

    return NextResponse.json({
      username: data.username,
      staffId: data.STAFFstaff_id,
      fullName,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}