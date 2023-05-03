function openModal() {

    // switch display none to block to show donation form
    var donationModal = document.getElementById("donation-form");
    console.log(donationModal);

    donationModal.style.display = "block";

    // add filter backgrounf
    var modalShadow = document.getElementById("modal-shadow");
    modalShadow.style.cssText = 'filter: opacity(25%);'

    // get value from input
    var quantity  = document.getElementById("quantity").value;
    // get modal input
    var modalQuantity = document.getElementById("modal-quantity");

    console.log(modalQuantity);

    //set modal input value to original input value
    modalQuantity.value = quantity;
}

function updateState() {
    var modalQuantity  = parseInt(document.getElementById("modal-quantity").value);
    var amountSoFar = parseInt(document.getElementById("amount-so-far").innerHTML);
    var progress = parseInt(document.getElementById("progress").value);
    var donationsSoFar = parseInt(document.getElementById("donations").innerHTML);

    // add quantity to & update amount so far
    amountSoFar = amountSoFar + modalQuantity;
    document.getElementById("amount-so-far").innerHTML = amountSoFar;
    
    // add quantity to & update progress bar
    progress = progress + modalQuantity
    document.getElementById("progress").value = progress

    // add 1 donation to donations so far & update
    donationsSoFar += 1;
    document.getElementById("donations").innerHTML = donationsSoFar;
    
    // reset donation input
    document.getElementById("quantity").value = "";

    // create donation card
    createDonationCard();

    // close modal
    closeModal();
}

function createDonationCard(){
    var donationQuantity = document.getElementById("modal-quantity").value;
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    var seeAllDonationsLink = document.getElementById("see-all-donations");

    seeAllDonationsLink.insertAdjacentHTML('beforebegin', 
        `
        <hr>
        <div class="c-donation">
            <div class="c-avatar-details">
                <div class="avatar"></div>
                <div class="c-user-details">
                    <p class="username">${name}</p>
                    <p class="user-details">now</p>
                    <p class="comment">"${comment}"</p>
                </div>
            </div>
            <p class="quantity">€${donationQuantity} <span class="currency">EUR</span></p>
        </div>
        <hr>
        `
    );
}

function closeModal() {
    // switch display none to block to show donation form
    var donationModal = document.getElementById("donation-form");
    console.log(donationModal);

    donationModal.style.display = "none";

    // delete filter background
    var modalShadow = document.getElementById("modal-shadow");
    modalShadow.style.removeProperty('filter');
}