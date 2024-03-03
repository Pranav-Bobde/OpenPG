// "use client";

import { Button } from "../ui/button";
import ProfileDropDown from "@/components/profile/ProfileDropDown";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type ProfileSectionProps = {};

export default async function ProfileSection({}: ProfileSectionProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  return (
    <>
      {user ? (
        <ProfileDropDown user={user} />
      ) : (
        <div className="flex justify-center gap-12">
          <Button>
            <LoginLink>Login</LoginLink>
          </Button>
          <Button>
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
      )}
    </>
  );
}
