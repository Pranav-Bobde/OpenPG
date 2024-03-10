import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/dist/components";

export default function page() {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="col-span-2 bg-black flex items-center justify-center">
        <div className="text-white text-4xl">OpenPG</div>
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
  );
}
