import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUsers } from "../../Redux/store/users";

export default function FormContactus() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: crypto.randomUUID(),
        name,
        email,
        phone,
        desc,
        isAgree,
        subject,
      })
    );
    dispatch(getAllUsers());
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <div>
        <form>
          <div className="grid gap-5 grid-cols-1">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
              <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
                <label htmlFor="Name">
                  <i class="bi bi-person"></i>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="outline-none placeholder:text-xs text-xs"
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="outline-none placeholder:text-xs text-xs"
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
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="outline-none placeholder:text-xs text-xs"
                  placeholder="Phone"
                  type="text"
                  id="Name"
                />
              </div>
              <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
                <select
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="w-full text-work-text-gray outline-none placeholder:text-xs text-xs"
                  name=""
                  id=""
                >
                  <option className="text-work-text-gray" value="s">
                    s
                  </option>
                  <option className="text-work-text-gray" value="m">
                    m
                  </option>
                </select>
              </div>
            </div>
            <div className=" col-span-2 flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray h-40">
              <i class="bi bi-pencil"></i>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                name=""
                id=""
                className="w-full outline-none placeholder:text-xs text-xs resize-none"
                placeholder="How can we help you ? Feel free to get in touch!"
              ></textarea>
            </div>
            <div className="flex gap-2 items-center text-work-text-gray col-span-2">
              <input
                onChange={(e) => setIsAgree(e.target.checked)}
                id="checkbox"
                type="checkbox"
                className="w-3 h-3 md:w-5 md:h-5 border rounded-sm"
              ></input>
              <label htmlFor="checkbox" className="text-xs md:text-base">
                I agree that my data is collected and stored
              </label>
            </div>
            <button
              onClick={submitHandler}
              className="text-xs md:text-base mt-5 px-6 py-3 bg-black-me text-white-me rounded-lg w-fit"
            >
              🤙 Get In Touch
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
}
