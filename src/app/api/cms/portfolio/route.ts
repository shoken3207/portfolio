import * as crypto from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const bodyText = await request.text();
  const bodyBuffer = Buffer.from(bodyText, "utf-8");

  const secret = process.env.MICROCMS_WEBHOOK_SIGNATURE_SECRET_PORTFOLIO;
  if (!secret) {
    console.error("Secret is empty.");
    return NextResponse.json({
      status: 500,
    });
  }

  const signature = request.headers.get("X-MICROCMS-Signature");
  if (!signature) {
    console.error("Signature is empty.");
    return NextResponse.json({
      status: 400,
    });
  }

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(bodyBuffer)
    .digest("hex");

  const isValid = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );

  if (!isValid) {
    console.error("Invalid signature.");
    return NextResponse.json({
      status: 400,
    });
  }
  // 再検証処理（後述します）
  revalidatePath("/");
  return NextResponse.json({ message: "success" });
}
