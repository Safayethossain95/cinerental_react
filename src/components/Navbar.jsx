import { useContext, useState } from "react";
import { getImgIcon, getImgrealIcon, getImgUrl } from "../cine-utils/getImgUrl";
import { MovieContext, ThemeContext } from "../context";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { state, dispatch } = useContext(MovieContext);

  const handleremove = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
    });
  };

  return (
    <>
      {show && (
        <div className="modal fixed top-0 left-0 w-screen h-screen black/60 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
            <div className="inner shadow-md dark:bg-[#12141d] w-[620px] h-[auto] bg-white rounded-md">
              <div
                className="absolute text-white font-bold cursor-pointer pb-1 top-3 right-0 px-2 rounded-lg bg-red-600"
                onClick={() => setshow(false)}
              >
                x
              </div>

              <div className="modalcontent">
                <div className="mt-10 p-10">
                  {state.cart?.length == 0 ? (
                    <h2 className="text-xl text-center">
                      No items in the cart
                    </h2>
                  ) : (
                    state.cart?.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className="py-2 flex justify-between items-center"
                        >
                          <div className="left flex gap-2">
                            <div className="lleft">
                              <img
                                width={50}
                                src={getImgUrl(`${item.cover}`)}
                              />
                            </div>
                            <div className="lright">
                              <h3 className="text-xl font-bold">
                                {item.title}
                              </h3>
                              <p>{item.genre}</p>
                              <p className="font-bold">${item.price}</p>
                            </div>
                          </div>
                          <div className="right">
                            <button
                              className="bg-red-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                              onClick={() => handleremove(item)}
                            >
                              <img src={getImgIcon("delete.svg")} alt="" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex justify-between ${
          show ? "blur-sm user-select-none" : ""
        }`}
      >
        <div className="logopart">
          <a href="#">
            <img src={getImgIcon(`logo.svg`)} alt="" />
          </a>
        </div>
        <div className="iconpart">
          <div className="div w-[30px] mx-2 bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <a href="#">
              <img src={getImgIcon(`ring.svg`)} width="28" height="28" alt="" />
            </a>
          </div>
          <div className="div w-[30px] mx-2 bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <a href="#" onClick={() => setDarkMode(!darkMode)}>
              <img
                src={getImgrealIcon(`${darkMode ? "sun.svg" : "moon.svg"}`)}
                width="26"
                height="26"
                alt=""
              />
            </a>
          </div>
          <div className="div w-[30px] mx-2 bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <a href="#" onClick={() => setshow(true)}>
              <img
                src={getImgIcon(`shopping-cart.svg`)}
                width="26"
                height="26"
                alt=""
              />
              <span className="rounded-full text-xs absolute top-[-12px] left-[20px] bg-[#12CF6F] text-white text-center w-[18px] h-[18px]">
                {state.cart.length}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
