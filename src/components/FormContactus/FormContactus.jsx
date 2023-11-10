import React from "react";

export default function FormContactus() {
  return (
    <>
      <div>
        <form>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
            <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
              <label htmlFor="Name">
                <i class="bi bi-person"></i>
              </label>
              <input
                className="outline-none"
                placeholder="Name"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
              <label htmlFor="Name">
                <i class="bi bi-envelope"></i>
              </label>
              <input
                className="outline-none"
                placeholder="Email Address"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
              <label htmlFor="Name">
                <i class="bi bi-telephone"></i>
              </label>
              <input
                className="outline-none"
                placeholder="Phone"
                type="text"
                id="Name"
              />
            </div>
            <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
              <select
                className="w-full text-work-text-gray outline-none"
                name=""
                id=""
              >
                <option className="text-work-text-gray" value="Subject">
                  Subject
                </option>
              </select>
            </div>
            <div className=" col-span-2 flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray h-40">
              <i class="bi bi-pencil"></i>
              <textarea
                name=""
                id=""
                className="w-full outline-none "
                placeholder="How can we help you ? Feel free to get in touch!"
              ></textarea>
            </div>
            <div className="flex gap-2 items-center text-work-text-gray col-span-2">
              <div className="w-5 h-5 border rounded-sm"></div>
              <h4 className="">I agree that my data is collected and stored</h4>
            </div>
            <a
              className=" mt-5 px-6 py-3 bg-black-me text-white-me rounded-lg w-fit"
              href="#"
            >
              🤙 Get In Touch
            </a>
          </div>
          
        </form>
      </div>
    </>
  );
}
