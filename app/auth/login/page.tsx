import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/dist/components";

export default function page() {
  return (
    <div className="min-h-svh w-svw">
      <div className="hidden h-full w-full md:grid md:grid-cols-3">
        <div className="bg-black md:col-span-2 md:flex md:items-center md:justify-center">
          <div className="text-white text-4xl text-center">OpenPG</div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex-col">
            <div className="text-3xl text-center p-4">Get Started</div>

            <div className="flex justify-center gap-4">
              <Button className="w-32">
                <LoginLink>Login</LoginLink>
              </Button>
              <Button className="w-32">
                <RegisterLink>Register</RegisterLink>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center bg-black gap-12 md:hidden">
        <div className="text-white text-4xl flex justify-center">
          <Avatar className="h-28 w-28">
            <AvatarImage src="/favicon.png" height={50} width={50} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center text-2xl font-semibold">
          Getting Started
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Button className="w-1/2">
            <LoginLink>Login</LoginLink>
          </Button>
          <Button className="w-1/2">
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
