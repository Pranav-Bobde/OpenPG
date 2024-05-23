import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function page() {
  return (
    <div className="h-dvh flex flex-col md:flex-row">
      <div className="bg-black h-full flex items-end justify-center text-4xl pb-10 md:basis-2/3 md:items-center">
        <Avatar className="h-28 w-28 md:hidden">
          <AvatarImage src="/favicon.png" height={50} width={50} />
          <AvatarFallback>
            <Skeleton />
          </AvatarFallback>
        </Avatar>

        <span className="hidden md:block text-4xl">OpenPG</span>
      </div>
      <div className="bg-black h-full flex flex-col items-center justify-start gap-4 md:basis-1/3 md:justify-center border-l-2 border-gray-500">
        <span className="text-2xl mb-4 w-1/2 text-center">Get Started</span>
        <div className="flex flex-col w-1/2 items-center gap-4 md:flex-row md:w-full md:px-16">
          <Button className="min-w-fit w-full md:flex-1">
            <LoginLink>Login</LoginLink>
          </Button>
          <Button className="min-w-fit w-full md:flex-1 ">
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
