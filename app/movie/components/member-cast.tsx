import Image from "next/image";

import { UserIcon } from "lucide-react";

import { getMemberImage } from "@/app/helpers/getMemberImage";

import { MemberCastProps } from "@/types";

const MemberCast = ({ member }: MemberCastProps) => {
  return (
    <div>
      <div className="bg-primary relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
        {member.profile_path ? (
          <Image
            src={getMemberImage({ profilePath: member.profile_path })}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <UserIcon />
        )}
      </div>
    </div>
  );
};

export default MemberCast;
