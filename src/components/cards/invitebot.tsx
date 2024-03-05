import React from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

const InviteBot: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to invite?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Upgrade your Discord experience with our bot. Enhance moderation,
          security, and much more.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Invite</Button>
          </DialogTrigger>
          <DialogContent
            style={{
              background: "#020817",
            }}
          >
            <DialogHeader className="text-white">
              <DialogTitle>Invite DISCORD BOT NAME</DialogTitle>
              <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                When inviting DISCORD BOT NAME, you agree to our Terms of
                Service and Privacy Policy.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Link href="#">
                <Button variant="ghost">I understand.</Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>{" "}
      </div>
    </section>
  );
};

export default InviteBot;
