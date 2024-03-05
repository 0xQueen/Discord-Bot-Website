"use client";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Skeleton } from "@/components/skeleton";
import { Button } from "@/components/button";
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

const Hero: React.FC = () => {
  const typingElement = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["protect", "moderate", "secure"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    };

    if (typingElement.current) {
      typed.current = new Typed(typingElement.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="max-w-md mx-auto md:mx-0 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pink-500">
            Discord Bot Name
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            The best way to{" "}
            <span className="text-pink-500" ref={typingElement}></span> your
            Discord Server.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div>
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
                    <DialogTitle>Invitation</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      When inviting DISCORD BOT NAME, you agree to our Terms of
                      Service and Privacy Policy.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <Link href="#">
                      <Button type="button" variant="ghost">
                        I understand
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="login">Premium</Button>
                </DialogTrigger>
                <DialogContent
                  style={{
                    background: "#020817",
                  }}
                >
                  <DialogHeader className="text-white">
                    <DialogTitle>Ouch, there's an issue...</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      I have not implemented a dashboard for the Discord bot or
                      API for purchases. You must code it yourself.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="ghost">
                        I understand
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-64">
          <Skeleton className="h-64 w-64 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
