import PropTypes from "prop-types";
const Cart = ({ carts }) => {
  return (
    <div className="bg-slate-300 mt-5 rounded-lg text-center p-2 space-y-5">
      <div>
        <h2 className="text-2xl  ">Credit Reaming Hours: {carts.length} hr</h2>
      </div>
      <hr />
      <div>
        <h3 className=" text-2xl">Course Name:</h3>
        <hr />
        <ul>
          {carts.map((c, idx) => (
            <li key={(c, idx)}>{c.name}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h4>Total Credit:{carts.reduce((p, c) => p + c.credit, 0)}</h4>
      </div>
      <hr />
      <div>
        <h4>Total Price:{carts.reduce((p, c) => p + c.price, 0)} </h4>
      </div>
    </div>
  );
};
Cart.propTypes = {
  carts: PropTypes.array,
};
export default Cart;
