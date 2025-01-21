let address = 0;

function addArea() {
    const name = document.getElementById("name").value;
    const size = parseInt(document.getElementById("size").value);

    const startAddressInput = document.getElementById("startAddress").value;
    let startAddress = address;

    if (startAddressInput) {
        startAddress = parseInt(startAddressInput, 16);
        if (isNaN(startAddress)) {
            alert("Invalid start address! Please enter a valid hexadecimal address.");
            return;
        }
    }

    if (startAddress > address) {
        address = startAddress;
    }

    const toAddress = address + size - 1;
    const result = {
        name,
        from: hex(address),
        to: hex(toAddress),
        size: size,
        formula: `${size - 1} = ${hex(size - 1)}`
    };

    address = toAddress + 1;

    displayMemoryMap(result);
    clearInputs();
}

function hex(num) {
    return "0x" + num.toString(16).toUpperCase();
}

function displayMemoryMap(result) {
    const tableBody = document.getElementById("memory-map-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.from}</td>
        <td>${result.to}</td>
        <td>${result.size}d or ${hex(result.size)}</td>
        <td>${result.formula}</td>
    `;
    tableBody.appendChild(row);
}

function clearMap() {
    address = 0;
    document.getElementById("memory-map-list").innerHTML = "";
    clearInputs();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("size").value = "";
    document.getElementById("startAddress").value = "";
}
