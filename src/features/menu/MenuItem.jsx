import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const dispatch=useDispatch()
  const { id ,name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  //console.log(pizza)
    const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart=currentQuantity >0;
  //console.log(currentQuantity)
function handleAddToCart(){
  const newItem={
    pizzaId: id,
    name,
    quantity: 1,
    unitPrice,
    totalPrice: unitPrice * 1,
  }

dispatch(addItem(newItem))
}
  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut? "grayscale opacity-70":""}`} />
      <div className="flex flex-col flex-grow pt-0.5  ">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
         { isInCart&&
         <div className="flex items-center gap-3 sm:gap-8">
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
<<<<<<< HEAD
          <DeleteItem pizzaId={id}/>
=======
         <DeleteItem pizzaId={id}/>
>>>>>>> 21613ebf63cc4d63fa1f15d846b0bb9934d05ee8
         </div>
         }
{!soldOut && !isInCart &&<Button type="small" onClick={handleAddToCart} >Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

