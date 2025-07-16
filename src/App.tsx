import "./App.css";
import {
  Afterpay,
  ApplePay,
  CreditCard,
  GooglePay,
  PaymentForm,
  
} from "react-square-web-payments-sdk";

function App() {
  const elementProps = {
    applicationId: "sandbox-sq0idb-74Le9u9KVbpW9MX9ZPuUIA",
    locationId: "L3RQ5YM5DMKG9",
    cardTokenizeResponseReceived: (token: unknown) => {
      console.log({ token });
     },
  };

  // generate-payment-v3
  const createPaymentRequest = () => ({
    countryCode: "US",
    currencyCode: "USD",
    lineItems: [
      {
        amount: "22.15",
        label: "Item to be purchased",
        id: "SKU-12345",
        imageUrl: "https://url-cdn.com/123ABC",
        pending: true,
        productUrl: "https://my-company.com/product-123ABC"
      }
    ],
    taxLineItems: [
      {
        label: "State Tax",
        amount: "8.95",
        pending: true
      }
    ],
    discounts: [
      {
        label: "Holiday Discount",
        amount: "5.00",
        pending: true
      }
    ],
    requestBillingContact: false,
    requestShippingContact: false,
    shippingOptions: [
      {
        label: "Next Day",
        amount: "15.69",
        id: "1"
      },
      {
        label: "Three Day",
        amount: "2.00",
        id: "2"
      }
    ],
    // pending is only required if it's true.
    total: {
      amount: "41.79",
      label: "Total",
    },
  });
  return (
    <div className="App">
      <PaymentForm
        {...elementProps}
        createPaymentRequest={createPaymentRequest}
      >
        <div className="payment-form-container">
          <CreditCard />
          <ApplePay />
          <GooglePay />
          <Afterpay />
        </div>
      </PaymentForm>
    </div>
  );
}

export default App;
