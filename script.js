let activities = [];

function addActivity() {
    const activityName = prompt("Enter activity name:");
    if (activityName) {
        activities.push({ name: activityName, total: 0, streak: 0 });
        renderTable();
    }
}

function incrementActivity(index) {
    activities[index].total++;
    activities[index].streak++;
    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById("activityTable").querySelector("tbody");
    tableBody.innerHTML = "";

    activities.sort((a, b) => b.total - a.total);

    activities.forEach((activity, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${activity.name}</td>
            <td>${activity.total}</td>
            <td>${activity.streak}</td>
            <td><button onclick="incrementActivity(${index})">Increment</button></td>
        `;
        tableBody.appendChild(row);
    });
}
