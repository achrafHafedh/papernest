import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    "es",
    `offers.json`
  );

  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(jsonData));
  } catch (err) {
    return NextResponse.json({ status: 404, err });
  }
}
