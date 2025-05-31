let currentDate = new Date();

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function updateDateDisplay() {
  document.getElementById("current-date").textContent = formatDate(currentDate);
  loadData();
}

function prevDate() {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDateDisplay();
}

function nextDate() {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateDisplay();
}

function saveData() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const expense = parseFloat(document.getElementById("expense").value) || 0;
  const data = { income, expense };
  localStorage.setItem(formatDate(currentDate), JSON.stringify(data));
  loadData();
}

function loadData() {
  const data = JSON.parse(localStorage.getItem(formatDate(currentDate))) || { income: 0, expense: 0 };
  document.getElementById("total-income").textContent = data.income;
  document.getElementById("total-expense").textContent = data.expense;
  document.getElementById("net").textContent = data.income - data.expense;
}

updateDateDisplay();
