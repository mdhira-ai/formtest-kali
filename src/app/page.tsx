'use client'
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

const page = () => {


  function handeleform(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)


    fetch('/api/user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.get("Email"),
        password: formData.get("Password")
      })
    })

  }

  return (
    <div
      className='max-w-screen-md container  p-5 h-screen'
    >

      <form
        onSubmit={handeleform}
        className="flex flex-col gap-2 justify-center items-center h-full"

      >

        <Input
          type="email"
          placeholder="Email"
          name="Email"

        />

        <Input
          name="Password"
          type="password"
          placeholder="Password"
        />


        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
          type="submit"
        >
          Login
        </button>
      </form>

    </div>
  );
}

export default page;