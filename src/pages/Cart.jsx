
export default function Cart( {items} ) 
{

    var totalPrice=0
    items.forEach( (item)=>{totalPrice+=(item.price*item.qty) })

    return (
        <div className=' w- flex p-3 mt-40  py-10 px-10 flex-col bg-slate-100  shadow rounded' >
            <h2 className='text-4xl mb-14' >Your cart</h2> 
            {items.map( (item)=>{
                return <div className='flex flex-row items-center'><img className='w-10  mr-4 ' src={item.photo}/> <div className="mr-5">{item.name} x {item.qty}</div> <button className='bg-slate-100  text-rose-600 rounded text-xs ml-auto'>Remove</button> </div>
            } )}
            
            <div className='text-xl mt-10' >Total price: ${ totalPrice.toFixed(2)}</div> 
            <button  className="w-full py-3  bg-primary-500 text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 hover:bg-primary-dark poppins ">Checkout</button>
        </div>
    );
}
