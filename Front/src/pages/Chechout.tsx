const Checkout = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="container flex flex-col justify-center mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Checkout</h2>
          <button className="bg-green-500 hover:bg-green-700 w-48 mx-auto text-white font-bold py-2 px-3 md:py-1 md:px-2 mt-4 rounded-full">
            Process Payment
          </button>
        </div>
      </div>
    );
  };
  
  export default Checkout;
  