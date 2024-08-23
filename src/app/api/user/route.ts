import prisma from "@/lib/db";

export async function POST(req: Request) {
  const data = await req.json();
  const d = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (d) {
    if (d.password === data.password) {
      return Response.json({
        message: "log in",
      });
    }
  }

  return Response.json({
    message: "try again",
  });
}
