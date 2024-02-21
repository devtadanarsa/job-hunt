import { signOut, useSession } from "next-auth/react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiLogOut, BiSolidDownArrow } from "react-icons/bi";

const AuthMenu = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex items-center gap-1 cursor-pointer">
          <div className="font-semibold text-primary mr-2 mt-1">
            Hai, {session?.user.name}
          </div>
          <div>
            <BiSolidDownArrow className="text-sm text-primary" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
          className="text-red-500 font-semibold"
        >
          <BiLogOut className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthMenu;
