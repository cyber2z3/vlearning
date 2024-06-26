import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/userReducer/userSlice";

const Header = () => {
  const user = useSelector((state) => state.userReducer.infoUser);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    event.preventDefault();
    const item = document.getElementById("khoahocphobien");
    if (item) {
      item.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="header bg-white py-3 z-20 sticky top-0 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto justify-center xl:justify-between items-center flex gap-2">
        <NavLink to={"/"}>
          <img src="/logo.png" className="h-10 xl:h-16 pr-4" alt="" />
        </NavLink>
        <div className="flex items-center">
          <label className="input input-bordered flex items-center gap-2 cursor-pointer">
            <input type="text" className="grow w-full" placeholder="Tìm kiếm" />
            <SearchOutlined className="w-4 h-4 opacity-70 hover:text-black" />
          </label>
        </div>
        <div className="hidden md:block  font-medium text-[1rem] text-black">
          <div className="dropdown dropdown-hover cursor-pointer">
            <div className="mr-2 hover:text-[var(--colorGlobal)]">
              <i className="fa fa-bars mr-3"></i>
              DANH MỤC
            </div>
            <ul
              className={`dropdown-content z-[1] menu p-2 shadow bg-white border-spacing-2 rounded-md text-black ${
                isClicked && "hidden"
              }`}
            >
              {[
                { title: "LẬP TRÌNH BACKEND", link: "#" },
                { title: "THIẾT KẾ WEB", link: "#" },
                { title: "LẬP TRÌNH DI ĐỘNG", link: "#" },
                { title: "LẬP TRÌNH FRONT END", link: "#" },
                { title: "LẬP TRÌNH FULL STACK", link: "#" },
                { title: "TƯ DUY LẬP TRÌNH", link: "#" },
              ].map((item, index) => (
                <li key={index} className="py-1 bg-none">
                  <NavLink
                    onClick={handleScroll}
                    // to={item.link}
                    className="textarea-xs btn  btn-ghost glass text-black hover:bg-accent hover:text-white"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {[
            { title: "KHÓA HỌC", link: "/khoa-hoc" },
            { title: "BLOG", link: "/blog" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="mr-3 text-sm xl:text-base hover:text-accent"
            >
              {item.title}
            </NavLink>
          ))}
          <div className="dropdown dropdown-hover cursor-pointer">
            <div className="mr-2 hover:text-[var(--colorGlobal)]">SỰ KIỆN</div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-white border-spacing-2 rounded-md text-black w-[100px]">
              {[
                { title: "SỰ KIỆN SALE CUỐI NĂM", link: "#" },
                { title: "SỰ KIỆN GIÁNG SINH", link: "#" },
                { title: "SỰ KIỆN NOEL", link: "#" },
              ].map((item, index) => (
                <li key={index} className="py-1 bg-none">
                  <NavLink
                    to={item.link}
                    className="textarea-xs btn  btn-ghost glass text-black hover:bg-accent hover:text-white"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink className="mr-3 text-sm xl:text-base hover:text-accent">
            THÔNG TIN
          </NavLink>
        </div>
        {user ? (
          <div className="space-x-8">
            <NavLink
              className="font-semibold text-yellow-400 text-lg no-underline"
              to="/thongTinCaNhan"
            >
              {user?.hoTen}
            </NavLink>
            <NavLink
              className="font-semibold text-yellow-400 text-lg no-underline"
              to="/auth/login"
              onClick={() => {
                dispatch(logOutAction());
              }}
            >
              Log Out
            </NavLink>
          </div>
        ) : (
          <NavLink
            className="font-semibold text-yellow-400 text-lg no-underline"
            to="/auth/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default Header;
