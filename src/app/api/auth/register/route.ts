import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, name, password, confirmPassword } = await req.json();

  if (password !== confirmPassword) {
    return Response.json({ error: "Passwords do not match" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return Response.json(
      {
        error: "Email already taken!",
      },
      {
        status: 400,
      }
    );
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

//   const verificationToken = await generateVerificationToken(email);
//   await sendVerificationEmail(verificationToken.email, verificationToken.token);


  return Response.json(
    { user },
    {
      status: 201,
    }
  );
}
