import ProfileDropDown from "@/components/profile/ProfileDropDown";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type ProfileSectionProps = {};

export default async function ProfileSection({}: ProfileSectionProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("User in ProfileSection: ", user);

  return <ProfileDropDown user={user} />;
}
