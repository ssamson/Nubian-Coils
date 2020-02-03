const salonForm = document.getElementById("salon-form");
const salonId = document.getElementById("salon-id");
const storeAddress = document.getElementById("store-address");

// send POST to API to add salon
async function addSalon(e) {
  e.preventDefault();

  if (salonId.value === "" || salonAddress.value === "") {
    alert("Please fill in fields");
  }

  const sendBody = {
    salonId: salonId.value,
    address: salonAddress.value
  };

  try {
    const res = await fetch("/api/v1/salons", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error("Salon already exists!");
    }
    alert("Salon added!");
    window.location.href = "/index.html";
  } catch (error) {
    alert(error);
    return;
  }
}
salonForm.addEventListener("submit", addSalon);
