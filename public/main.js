
//function to get rid of pending order//
const onCompleteOrder = (event) => {
  const _id = event.target.dataset.value;
  fetch('orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: _id,
      completed: true, //updating the keys for the object which is our drink order//
      pending: false, //refers back to the keys made in the routes.js page//
    }),
  }).then(function () {
    window.location.reload();
  });
};


//function expression to reverse completed order if there is a mistake//
const onUncompleteOrder = (event) => {
  //
  const _id = event.target.dataset.value;
  fetch('orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: _id,
      completed: false,
      pending: true,
    }),
  }).then(function () {
    window.location.reload();
  });
};

// Function for deleting the order
const deleteOrder = (event) => {
    const _id = event.target.dataset.value;
    console.log(_id);
    fetch('orders', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: _id
      }),
    }).then(function () {
      window.location.reload();
    });
}
//Our eventlisteners for the complete and uncomplete orders in the barista page//

document.querySelectorAll('.complete-order').forEach((element) => {
  element.addEventListener('click', onCompleteOrder);
});

document.querySelectorAll('.uncomplete-order').forEach((element) => {
  element.addEventListener('click', onUncompleteOrder);
});
// event listener for deleting the orders
document.querySelectorAll('.remove-order').forEach((element) => {
  element.addEventListener('click', deleteOrder);
});
