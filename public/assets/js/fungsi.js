
              //Date Formatter - perlu ga?
              document.addEventListener('DOMContentLoaded', function() {
                const modTanggal = document.getElementById('modTanggal');
                const modBayar = document.getElementById('modBayar');
          
                function formatDateToDDMMYY(dateString) {
                  const options = {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit'
                  };
                  return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '/');
                }
          
                function validateAndFormatDate(input) {
                  const dateValue = input.value;
                  if (dateValue) {
                    const formattedDate = formatDateToDDMMYY(dateValue);
                    input.value = formattedDate;
                  }
                }
                modTanggal.addEventListener('blur', () => validateAndFormatDate(modTanggal));
                modBayar.addEventListener('blur', () => validateAndFormatDate(modBayar));
              });


              // Status
              document.addEventListener('DOMContentLoaded', function() {
                const statusDropdown = document.getElementById('status');
                const statusCell = document.getElementById('statusCell');
              
                function updateStatus() {
                  const selectedValue = statusDropdown.value;
                  let statusHTML = '';
              
                  switch (selectedValue) {
                    case 'PR':
                      statusHTML = `
                        <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                          Proses
                        </span>`;
                      break;
                    case 'SL':
                      statusHTML = `
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:text-white dark:bg-green-600">
                          Selesai
                        </span>`;
                      break;
                    case 'BD':
                      statusHTML = `
                        <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                          Belum diambil
                        </span>`;
                      break;
                    default:
                      statusHTML = '';
                  }
              
                  statusCell.innerHTML = statusHTML;
                }
              
                // Update status on page load and when dropdown value changes
                updateStatus();
                statusDropdown.addEventListener('change', updateStatus);
              });
              