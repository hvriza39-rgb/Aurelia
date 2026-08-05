import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      projectTypes,
      description,
      stage,
      budget,
      timeline,
      name,
      company,
      email,
      phone,
    } = body;

    if (!projectTypes || projectTypes.length === 0) {
      return NextResponse.json(
        { error: "At least one project type is required." },
        { status: 400 }
      );
    }
    if (!description || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Project description is required." },
        { status: 400 }
      );
    }
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("[New Project Enquiry]", {
      projectTypes,
      description: description.slice(0, 200),
      stage,
      budget,
      timeline,
      name,
      company,
      email,
      phone,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Enquiry received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
