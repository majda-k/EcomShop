"use client";

import '../globals.css'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";





export default function SignIn() {
    return (
        <>
         <Show when="signed-out">
        <div className="flex items-center gap-4">
          <SignInButton mode="modal">
            <button >Login</button>
          </SignInButton>
        </div>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
      </>
    )
}