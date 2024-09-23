
import Star from '../assets/star.svg';


// eslint-disable-next-line react/prop-types
export default function Rating({value}){
    const stars = Array(value).fill(Star)

    return (
        <>
        {
            stars.map((star,index)=>{
                return(
                    <img src={star} alt="star" key={index} style={{width: '20px', height: '20px'}} />
                )
            })
        }
        </>
    )
}