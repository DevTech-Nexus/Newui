import React, { useEffect, useState } from 'react';




export default function User() {

  const[deliveries, setDeliveries] = useState([]);
  


  const getDeliveries = async () => {
    const response = await fetch('http://localhost:8083/deliveries/' + (sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null))

    const reply = await response.json();
    deliveries = reply;
    console.log(deliveries);
  }

  useEffect(() => {
    getDeliveries();
  }, []);

  return (


    <div>

      <section class="h-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-10 col-xl-8">
              <div class="card" style={{
                borderRadius: '10px',
              }}>
                <div class="card-header px-4 py-5">
                  <h5 class="text-muted mb-0">Thanks for your Order, <span style={{ color: '#a8729a', }}>{sessionStorage.getItem("user")}</span>!</h5>
                </div>
                {deliveries.map(delivery => (  
                  <div class="card-body p-4">

                    <div class="card shadow-0 border mb-4">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">                        </div>
                        </div>
                        <div class="row d-flex align-items-center">
                          <div class="col-md-2">
                            
                          </div>
                          <div class="col-md-10">
                            <div class="d-flex justify-content-around mb-1">
                              <p class="text-muted mt-1 mb-0 small ms-xl-5">{delivery.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  ))}

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>


  );
}
