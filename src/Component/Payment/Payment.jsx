import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Payment.css'

const PaymentModal = () => {
  return (
    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-right">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="tabs mt-3">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visa" aria-selected="true">
                    <img src="https://i.imgur.com/sB4jftM.png" width="80" alt="Visa" />
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="paypal-tab" data-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="false">
                    <img src="https://i.imgur.com/yK7EDD1.png" width="80" alt="PayPal" />
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab">
                  <div className="mt-4 mx-4">
                    <div className="text-center">
                      <h5>Credit card</h5>
                    </div>
                    <form>
                    <div className="form mt-3 ">
                      <div className="inputbox">
                        <input type="text" name="cardholderName" className="form-control" style={{ width: "250px", height: "35px" }} required />
                        <span>Cardholder Name</span>
                      </div>
                      <div className="inputbox">
                        <input type="text" name="cardNumber" className="form-control" style={{ width: "250px", height: "35px" }}  required />
                        <span>Card Number</span>
                        <i className="fa fa-eye"></i>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="inputbox">
                          <input type="text" name="expirationDate" className="form-control" style={{width: "120px"}}  required />
                          <span>Expiration Date</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name="cvv" className="form-control" style={{width: "120px"}}  required />
                          <span>CVV</span>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block" style={{width:"250px"}}>Add card</button>
                      </div>
                      
                    </div>
                    </form>
                  
                  </div>
              
                </div>
                
                <div className="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                  <div className="px-5 mt-5">
                    <div className="inputbox">
                      <input type="text" name="paypalEmail" className="form-control" required />
                      <span>Paypal Email Address</span>
                    </div>
                    <div className="pay px-5">
                      <button className="btn btn-primary btn-block">Add paypal</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
