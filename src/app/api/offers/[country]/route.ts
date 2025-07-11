import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

type Params = {
  params: {
    country: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { country } = await params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "mock",
    country,
    `offers.json`
  );

  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(jsonData));
  } catch (err) {
    return NextResponse.json({ status: 404, err });
  }
}
