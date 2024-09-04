"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import {} from 'react-icons
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

const info = [
  {
    iconn: <FaPhone />,
    title: "phone",
    description: "(+91) 8176 83 7301",
  },
  {
    iconn: <MdOutlineEmail />,
    title: "email",
    description: "mohdumar707080@gmail.com",
  },
  {
    iconn: <IoLocationOutline />,
    title: "address",
    description: "Mohali 5 Phase sas nager",
  },
];

const page = () => {
  const [item, setItem] = useState({
    fname:'',
    lname:'',
    email:"",
    password:'',


  });
  return (
    <>
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row gap-[30px]">
          {/* form  */}
          <div className=" lg:w-[60%]  order-2 lg:order-none">
            <form className=" rounded-md bg-[#27272c] p-5 rounde gap-4">
              <h3 className="text-2xl text-accent">Let's work together</h3>
              <p className="text-white/60 lg:mt-3">
                Lorem, ipsum dolor sit amet consectetur.
              </p>
              {/* input  */}
              <div className="grid-cols-1 grid lg:grid-cols-2 gap-5 my-3">
                <Input type="text" placeholder="Firstname" name='fname'  />
                <Input type="text" placeholder="LastName" name='lname'  />
                <Input type="text" placeholder="EmailAddress" name='email' />
                <Input type="password" placeholder="Password" name='password'/>
              </div>
              <div className="">
                <select className="w-full bg-primary p-2 px-2 rounded-md outline-none">
                  <option class="text-gray-700" value="option1">
                    Front-end Developer
                  </option>
                  <option class="text-gray-700" value="option2">
                    Node js Developer
                  </option>
                  <option class="text-gray-700" value="option3">
                    Web Designer
                  </option>
                </select>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className="w-full bg-primary mt-5 rounded-sm outline-none px-4 "
                ></textarea>
              </div>
              <div >
                <Button className='capitalize'>send message</Button>
              </div>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center lg:w-[40%] order-1 lg:order-none mb-5 lg:mb-0 ">
            <div>
              {
                <ul className="flex flex-col gap-6">
                  {info.map((ele, index) => {
                    return (
                      <li key={index} className="flex items-center gap-5">
                        <div className="text-accent">
                          <div className="text-[20px]">{ele.iconn}</div>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm capitalize">{ele.title}</p>
                          <h3>{ele.description}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
