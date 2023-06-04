
import { BsXLg } from "react-icons/bs";
import { useRef} from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function  AddToCart  ({ handleClose, poppedItem }) {

    const ctx = useContext(AppContext);

    var on_add_to_cart=(e) => 
    {
       // qty_ref.current.value()
       //console.log(poppedItem.price)
        ctx.addCartItem( {name:poppedItem.name, photo:poppedItem.photo, price:parseFloat(poppedItem.price.substring(1)), qty: parseInt(qty_ref.current.value) }  )
        e.preventDefault();
    }

    const qty_ref = useRef(null)
    return ( 

        <div onClick={ (e) => e.target === e.currentTarget ? handleClose() : undefined}    className='left-0 top-0 fixed flex justify-center items-center w-full h-full bg-slate-900 bg-opacity-70'>
            <div className='relative flex p-3  items-center  py-8 px-10 flex-col bg-slate-100  shadow-lg rounded' >
                <BsXLg style='' className="absolute top-3 right-3 cursor-pointer  opacity-40 text-xs inline" onClick={handleClose} />
                <h1 className='  text-3xl mb-6 pt-5  text flex-grow text-center'>Add to Cart  </h1>
                <img  className='  w-32 ' src={poppedItem.photo}></img>
                <h2 className=' mt-5  text flex-grow opacity-70 text-center uppercase'>{poppedItem.name}</h2>
                <h2 className='mt-2  text flex-grow text-center'>{poppedItem.price}</h2>
                <form className="mt-3 p-4 rounded-lg ">
                    
                    <div className='flex flex-row  items-center'>
                        <label className='text-xl'>Quantity</label>
                        <input type="number"  defaultValue='1' ref={qty_ref} placeholder="Quantity" name="qty" className="w-28 px-4 py-2 ml-10 rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transiti+on duration-300 border border-gray-300 focus:shadow-xl" /> 
                    </div>


                    <button  onClick={on_add_to_cart}     className="w-full py-3  bg-primary-500 text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 hover:bg-primary-dark poppins ">Add to Cart</button>
                </form>
            </div>
        </div>
    );
  };