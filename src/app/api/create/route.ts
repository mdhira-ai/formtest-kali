import prisma from "@/lib/db";

export async function POST(req: Request) {
  const datas = await req.json();
  const d  = await prisma.user.create({
    data: {
      email: datas.email,
      password: datas.password,
    },
  });

  return Response.json({
    message: `data saved ${d.id}`,
  });
}
