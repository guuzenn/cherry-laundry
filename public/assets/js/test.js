document.addEventListener('DOMContentLoaded', function() {
  const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
      { id: 6, name: 'Item 6' },
      { id: 7, name: 'Item 7' },
      { id: 8, name: 'Item 8' },
      { id: 9, name: 'Item 9' },
      { id: 10, name: 'Item 10' },
      { id: 11, name: 'Item 11' },
      { id: 12, name: 'Item 12' },
      { id: 13, name: 'Item 13' },
      { id: 14, name: 'Item 14' },
      { id: 15, name: 'Item 15' },
      { id: 16, name: 'Item 16' },
      { id: 17, name: 'Item 17' },
      { id: 18, name: 'Item 18' },
      { id: 19, name: 'Item 19' },
      { id: 20, name: 'Item 20' },
      { id: 21, name: 'Item 21' },
      { id: 22, name: 'Item 22' },
      { id: 23, name: 'Item 23' },
      { id: 24, name: 'Item 24' },
      { id: 25, name: 'Item 25' },
      // Add more data as needed
  ];

  const rowsPerPage = 10;
  let currentPage = 1;

  function displayTableData(page) {
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = page * rowsPerPage;
      const tableBody = document.getElementById('table-body');
      tableBody.innerHTML = '';

      const pageData = data.slice(startIndex, endIndex);
      pageData.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td class="py-2">${row.id}</td>
              <td class="py-2">${row.name}</td>
          `;
          tableBody.appendChild(tr);
      });
  }

  function updateButtons() {
      document.getElementById('prev-btn').disabled = currentPage === 1;
      document.getElementById('next-btn').disabled = currentPage === Math.ceil(data.length / rowsPerPage);
  }

  document.getElementById('prev-btn').addEventListener('click', function() {
      if (currentPage > 1) {
          currentPage--;
          displayTableData(currentPage);
          updateButtons();
      }
  });

  document.getElementById('next-btn').addEventListener('click', function() {
      if (currentPage < Math.ceil(data.length / rowsPerPage)) {
          currentPage++;
          displayTableData(currentPage);
          updateButtons();
      }
  });

  // Initial display
  displayTableData(currentPage);
  updateButtons();
});
