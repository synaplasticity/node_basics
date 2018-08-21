function order(orderNumber) {
    console.log("Order : ", orderNumber);

    completeOrder(function() {
        console.log("Done with : ", orderNumber);
    })
}

function completeOrder(callback) {
    setTimeout(callback, 5000);
}

order(1);
order(2);
order(3);
order(4);
order(5);
order(6);
order(7);
