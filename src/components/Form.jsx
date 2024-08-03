import React from "react";
import Contact from "../assets/contact.svg";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Form = () => {
  return (
    <>
      <div className="max-w-[90%] mx-auto flex flex-col mt-16 lg:max-w-[1000px] lg:flex-row">
        <div className="">
          <div className="flex gap-7 ">
            <button className="btn-primary"><MdMessage />via support chat</button>
            <button className="btn-primary"><IoCall />via call</button>
          </div>

          <button className="btn-secondary"><MdMessage />via email form</button>

          <form className="flex flex-col gap-5">
            <div className="input-div">
              <label htmlFor="name" className="label">name</label>
              <input type="text" name="name" className="input-box" />
            </div>

            <div className="input-div">
              <label htmlFor="email" className="label">email</label>
              <input type="email" name="email" className="input-box" />
            </div>

            <div className="input-div">
              <label htmlFor="text" className="label">Text</label>
              <textarea name="text" rows={3} className="input-box" />
            </div>

            <div className="flex justify-end">                
                <button className="btn-primary w-[100%] lg:w-52">submit</button>
            </div>
          </form>
        </div>

        <div className="">
          <img src={Contact} alt="img" className="" />
        </div>
      </div>
    </>
  );
};

export default Form;
