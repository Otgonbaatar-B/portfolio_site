// app/api/placeholder/[width]/[height]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createCanvas } from "canvas";

export async function GET(
  req: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width, 10);
  const height = parseInt(params.height, 10);

  // Create a canvas with the specified width and height
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill the canvas with a color (or create a more complex placeholder)
  ctx.fillStyle = "#E0E0E0"; // Light grey color
  ctx.fillRect(0, 0, width, height);

  // Add some text to the placeholder
  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText(`${width}x${height}`, width / 4, height / 2);

  // Return the image as a PNG
  const buffer = canvas.toBuffer("image/png");

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
