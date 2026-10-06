// Get the form
const deliveryForm =
    document.getElementById("deliveryForm");


// Get the summary section
const summary =
    document.getElementById("summary");


// Listen for form submission
deliveryForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Get values from the form
        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const pickup =
            document.getElementById("pickup").value;

        const destination =
            document.getElementById("destination").value;

        const packageType =
            document.getElementById("package").value;

        const deliveryType =
            document.getElementById("deliveryType").value;

        const distance =
            Number(
                document.getElementById("distance").value
            );


        // ==========================
        // PACKAGE PRICES
        // ==========================

        let packagePrice = 0;

        if (packageType === "document") {

            packagePrice = 500;

        } else if (packageType === "small") {

            packagePrice = 1000;

        } else if (packageType === "medium") {

            packagePrice = 2000;

        } else if (packageType === "large") {

            packagePrice = 3500;
        }


        // ==========================
        // DELIVERY TYPE
        // ==========================

        let deliveryPrice = 0;

        if (deliveryType === "standard") {

            deliveryPrice = 1000;

        } else if (deliveryType === "express") {

            deliveryPrice = 2500;
        }


        // ==========================
        // DISTANCE PRICE
        // ==========================

        const pricePerKm = 300;

        const distancePrice =
            distance * pricePerKm;


        // ==========================
        // TOTAL
        // ==========================

        const total =
            packagePrice +
            deliveryPrice +
            distancePrice;


        // ==========================
        // DISPLAY SUMMARY
        // ==========================

        summary.innerHTML = `

            <div class="success-message">

                Delivery information calculated successfully!

            </div>


            <div class="summary-item">

                <span>Customer:</span>

                <strong>${name}</strong>

            </div>


            <div class="summary-item">

                <span>Phone:</span>

                <strong>${phone}</strong>

            </div>


            <div class="summary-item">

                <span>Pickup:</span>

                <strong>${pickup}</strong>

            </div>


            <div class="summary-item">

                <span>Destination:</span>

                <strong>${destination}</strong>

            </div>


            <div class="summary-item">

                <span>Package:</span>

                <strong>${packageType}</strong>

            </div>


            <div class="summary-item">

                <span>Delivery:</span>

                <strong>${deliveryType}</strong>

            </div>


            <div class="summary-item">

                <span>Distance:</span>

                <strong>${distance} km</strong>

            </div>


            <div class="summary-item">

                <span>Distance Cost:</span>

                <strong>${distancePrice.toLocaleString()} FCFA</strong>

            </div>


            <div class="summary-item">

                <span>Package Cost:</span>

                <strong>${packagePrice.toLocaleString()} FCFA</strong>

            </div>


            <div class="summary-item">

                <span>Delivery Cost:</span>

                <strong>${deliveryPrice.toLocaleString()} FCFA</strong>

            </div>


            <div class="total">

                Total:

                ${total.toLocaleString()} FCFA

            </div>

        `;

    }
);