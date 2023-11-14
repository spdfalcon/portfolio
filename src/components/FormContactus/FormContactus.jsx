import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUsers } from "../../Redux/store/users";
import { Form, Formik, Field } from "formik";
export default function FormContactus() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: "mohammad",
            email: "",
            phone: "",
            desc: "",
            isAgree: true,
            subject: "subject",
          }}
          validate={(values)=>{
            const errors = {}
            
            if(values.name === '' || values.name.length < 3 || values.name.length > 20){
              errors.name = 'اینپوت خالی است'
            }
            if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)){
              errors.email = 'ایمیل معتبر نیست'
            }

            return errors

          }}  
          onSubmit={(values) => {
            dispatch(
              addUser({
                id: crypto.randomUUID(),
                name: values.name,
                email: values.email,
                phone: values.phone,
                desc: values.desc,
                isAgree: values.isAgree,
                subject: values.subject,
              })
            );
            dispatch(getAllUsers());
          }}
        >
          {({ values, handleChange, handleSubmit,errors,touched }) => (
                // <form onSubmit={handleSubmit}>
            <Form>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
                  <div className={`flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray ${errors.name ? 'border-red-err' : 'border-green-success'}`}>
                    <label htmlFor={`Name `} >
                      <i className={`bi bi-person ${errors.name ? 'text-red-err' : 'text-green-success'}`}></i>
                    </label>
                    {/* <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    className="outline-none placeholder:text-xs text-xs"
                    placeholder="Name"
                    id="Name"
                  /> */}
                    <Field
                      id="Name"
                      className={`outline-none placeholder:text-xs text-xs ${errors.name ? 'text-red-err placeholder:text-red-err' : 'text-green-success'}`} 
                      placeholder="Name"
                      name="name"
                      type="text"
                    ></Field>
                  </div>
                  <div className={`flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray ${errors.email ? 'border-red-err' : 'border-green-success'}`}>
                    <label htmlFor="Name">
                      <i className={`bi bi-envelope ${errors.email ? 'text-red-err' : 'text-green-success'}`}></i>
                    </label>
                    {/* <input
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="outline-none placeholder:text-xs text-xs"
                      placeholder="Email Address"
                      type="text"
                      id="Name"
                    /> */}
                    <Field
                      name="email"
                      id="Email"
                      className={`outline-none placeholder:text-xs text-xs ${errors.email ? 'text-red-err placeholder:text-red-err' : 'text-green-success'}`}
                      placeholder="Email address"
                      type="text"
                    ></Field>
                  </div>
                  <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
                    <label htmlFor="Name">
                      <i className="bi bi-telephone"></i>
                    </label>
                    {/* <input
                      name="phone"
                      onChange={handleChange}
                      value={values.phone}
                      className="outline-none placeholder:text-xs text-xs"
                      placeholder="Phone"
                      type="text"
                      id="Name"
                    /> */}
                    <Field
                      name="phone"
                      id="Phone"
                      className="outline-none placeholder:text-xs text-xs"
                      placeholder="phone"
                      type="text"
                    ></Field>
                  </div>
                  <div className="flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray">
                    {/* <select
                      onChange={handleChange}
                      value={values.subject}
                      className="w-full text-work-text-gray outline-none placeholder:text-xs text-xs"
                      name="subject"
                      id=""
                    >
                      <option className="text-work-text-gray" value="s">
                        s
                      </option>
                      <option className="text-work-text-gray" value="m">
                        m
                      </option>
                    </select> */}
                    <Field
                      as="select"
                      name="subject"
                      id=""
                      className="w-full text-work-text-gray outline-none placeholder:text-xs text-xs"
                    >
                      <option className="text-work-text-gray" value="s">
                        s
                      </option>
                      <option className="text-work-text-gray" value="m">
                        m
                      </option>
                    </Field>
                  </div>
                </div>
                <div className=" col-span-2 flex gap-2 border-b-2 px-4 py-2 placeholder:text-work-text-gray text-work-text-gray h-40">
                  <i className="bi bi-pencil"></i>
                  {/* <textarea
                    onChange={handleChange}
                    value={values.desc}
                    name="desc"
                    id=""
                    className="w-full outline-none placeholder:text-xs text-xs resize-none"
                    placeholder="How can we help you ? Feel free to get in touch!"
                  ></textarea> */}
                  <Field
                  as='textarea'
                    name="desc"
                    id=""
                    className="w-full outline-none placeholder:text-xs text-xs resize-none"
                    placeholder="How can we help you ? Feel free to get in touch!"
                  >
                  </Field>
                </div>
                <div className="flex gap-2 items-center text-work-text-gray col-span-2">
                  {/* <input
                    name="isAgree"
                    checked={values.isAgree}
                    onChange={handleChange}
                    id="checkbox"
                    type="checkbox"
                    className="w-3 h-3 md:w-5 md:h-5 border rounded-sm"
                  ></input> */}
                  <Field
                    name="isAgree"
                    id="checkbox"
                    className="w-3 h-3 md:w-5 md:h-5 border rounded-sm"
                    type="checkbox"
                  >
                  </Field>
                  <label htmlFor="checkbox" className="text-xs md:text-base">
                    I agree that my data is collected and stored
                  </label>
                </div>
                <button
                  // onClick={submitHandler}
                  type="submit"
                  className="text-xs md:text-base mt-5 px-6 py-3 bg-black-me text-white-me rounded-lg w-fit"
                >
                  🤙 Get In Touch
                </button>
              </div>
              {/* </form> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
