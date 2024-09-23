/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { getImgIcon, getImgUrl } from "../cine-utils/getImgUrl";
import { MovieContext } from "../context";
import Rating from "./Rating";
import MovieDetailsModal from './MovieDetailsModal';

const MovieCard = ({ movie, index }) => {
    const [show, setshow] = useState(false);
  const { state, dispatch } = useContext(MovieContext);
  const handleAddtocart = (e, movie) => {
    e.stopPropagation();

    const found = state.cart.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({ type: "ADD_TO_CART", payload: { ...movie } });
      toast(`Added ${movie.title} to cart`);
    } else {
      toast(`Already in cart!`);
    }
  };
  return (
    <>
    {show && (
       <MovieDetailsModal
                    movie={movie}
                    onClose={()=>setshow(false)}
                    onCartAdd={()=>dispatch({ type: "ADD_TO_CART", payload: { ...movie } })}
                />
      )}

    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img
        className="w-full object-cover"
        key={index}
        src={getImgUrl(`${movie.cover}`)}
        alt=""
        onClick={() => setshow(true)}
      />

      <div className="des pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
      </div>
      <div className="flex items-center space-x-1 mb-5">
        <Rating value={movie.rating} />
      </div>
      <button
        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        href="#"
        onClick={(e) => {
          handleAddtocart(e, movie);
        }}
      >
        <img src={getImgIcon(`tag.svg`)} alt="" />
        <span>${movie.price} | Add to Cart</span>
      </button>
    </figure>
    </>
  );
};

export default MovieCard;
