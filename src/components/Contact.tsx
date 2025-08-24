import React from 'react'

function Contact() {
  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-blue-800 sm:text-5xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg/8 text-gray-700">
            Got a question or feedback? Reach out to us—we&#39;d love to hear
            from you.
          </p>
        </div>
        <form
          action="/"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-black"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md outline-black px-3.5 py-2 text-base text-black outline-3 -outline-offset-1  placeholder:text-black-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-black"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md  px-3.5 py-2 text-base text-black outline-3 -outline-offset-1 outline-black  focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-black"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md  px-3.5 py-2 text-base text-black outline-3 -outline-offset-1 outline-black ck focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-black"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md  outline-3 -outline-offset-1 outline-black has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <div className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-black focus:outline-2 focus:-outline-offset-2 sm:text-sm/6">
                      IN
                    </div>
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="Number"
                    placeholder="12345-67890"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-black"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md px-3.5 py-2 text-base text-black outline-3 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 "
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-black p-px inset-ring inset-ring-white/10 outline-offset-2 outline-gray-500 transition-colors duration-200 ease-in-out has-checked:bg-blue-700 has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-gray-600 shadow-xs ring-1 ring-black transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm/6 text-black"
              >
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold whitespace-nowrap text-blue-700"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-600"
            >
              Lets talk
            </button>
          </div>
        </form>
      </div>
  )
}

export default Contact