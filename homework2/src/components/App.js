import Greeting from "./Greeting";
import OrderStatus from "./OrderStatus";
import ShoppingList from "./ShoppingList";
const products = [
	{
		id: 1,
		product: 'mobilePhone',
		title: 'Samsung',
	},

	{
		id: 2,
		product: 'mobilePhone',
		title: 'Nokia',
	},

	{
		id: 3,
		product: 'mobilePhone',
		title: 'Sony',
	},

	{
		id: 4,
		product: 'mobilePhone',
		title: 'iPhone',
	},
];

const orders = [
	{
		orderId: 5,
		status: 'в пути',
	},
	{
		orderId: 6,
		status: 'доставлен',
	},
	{
		orderId: 7,
		status: 'обработан',
	},
	{
		orderId: 8,
		status: 'в пути',
	},
];
function App() {
  return (

   
		<div className='App'>
			<Greeting name='Alexsander' />
			<Greeting name='Julia' />
			<Greeting />
      <ShoppingList items={products} />

      {orders.map((order)=> (
      <OrderStatus
      key={order.orderId}
      orderId={order.orderId}
      status={order.status}  
      />
      ))}
     
		</div>
	)
}

export default App;
