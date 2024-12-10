import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

function SignInButton() {
  return (
    <div>
      <Button className="group" size="sm" asChild>
        <Link href="/sign-in" className="flex items-center gap-2">
          <LogIn className="transition-transform duration-300 group-hover:translate-x-1" />
          <span className="relative z-10">Sign In</span>
        </Link>
      </Button>
    </div>
  );
}

export default SignInButton;