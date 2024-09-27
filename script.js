document.getElementById('property-form').addEventListener('submit', addProperty);

function addProperty(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const rent = document.getElementById('rent').value;

    // Create new property item
    const propertyList = document.getElementById('properties');
    const li = document.createElement('li');
    li.className = 'property-item';

    li.innerHTML = `
        <h3>${name}</h3>
        <p>Type: ${type}</p>
        <p>Rent: $${rent} per month</p>
    `;

    // Append property to the list
    propertyList.appendChild(li);

    // Clear the form
    document.getElementById('property-form').reset();
}
