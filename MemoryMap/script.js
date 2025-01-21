let address = 0;

function addArea() {
    // Get values from the form
    const name = document.getElementById("name").value;
    const size = parseInt(document.getElementById("size").value);

    // Get the start address (if provided)
    const startAddressInput = document.getElementById("startAddress").value;
    let startAddress = address;

    // If a start address is provided, parse it as hexadecimal
    if (startAddressInput) {
        // Parse the input as hexadecimal (if valid)
        startAddress = parseInt(startAddressInput, 16);
        
        // Check if the parsed value is a valid number
        if (isNaN(startAddress)) {
            alert("Invalid start address! Please enter a valid hexadecimal address.");
            return;
        }
    }

    // If the start address is greater than the current address, update the address
    if (startAddress > address) {
        address = startAddress;
    }

    // Calculate the end address
    const toAddress = address + size - 1;

    // Format the result
    const result = `${name} -> from: ${hex(address)}, to: ${hex(toAddress)} \t size: ${size}d or ${hex(size)} \t formula: ${size - 1} = ${hex(size - 1)} \t | hex${hex(address)} + ${hex(size - 1)}`;

    // Update the address for the next section
    address = toAddress + 1;

    // Display the result in the memory map list
    const memoryMapList = document.getElementById("memory-map-list");
    const listItem = document.createElement("li");
    listItem.textContent = result;
    memoryMapList.appendChild(listItem);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("size").value = "";
    document.getElementById("startAddress").value = "";
}

function hex(num) {
    return "0x" + num.toString(16).toUpperCase();
}

function clearMap() {
    // Reset the address
    address = 0;

    // Clear the memory map list
    const memoryMapList = document.getElementById("memory-map-list");
    memoryMapList.innerHTML = "";

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("size").value = "";
    document.getElementById("startAddress").value = "";
}
