import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.message) {
    return NextResponse.json(
      { error: "Campo 'message' obrigatório" },
      { status: 400 },
    );
  }

  console.log("Body recebido:", body);
  try {
    const res = await fetch(
      "http://localhost:5678/webhook-test/fcb739fb-d59e-4314-a285-f0f0a14e8685",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body.message }),
      },
    );

    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Erro", status: 500 });
  }
}
