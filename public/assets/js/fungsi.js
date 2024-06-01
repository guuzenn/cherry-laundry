
              //Date Formatter - perlu ga?
              document.addEventListener('DOMContentLoaded', function() {
                const modTanggalAdd = document.getElementById('modTanggalAdd');
                const modTanggalEdit = document.getElementById('modTanggalEdit');
            
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
            
                if (modTanggalAdd) {
                    modTanggalAdd.addEventListener('blur', () => validateAndFormatDate(modTanggalAdd));
                }
            
                if (modTanggalEdit) {
                    modTanggalEdit.addEventListener('blur', () => validateAndFormatDate(modTanggalEdit));
                }
            });
            


              // Status
              document.addEventListener('DOMContentLoaded', function() {
                const statusAddDropdown = document.getElementById('statusAdd');
                const statusEditDropdown = document.getElementById('statusEdit');
                const statusCellAdd = document.getElementById('statusCellAdd');
                const statusCellEdit = document.getElementById('statusCellEdit');
            
                function updateStatus(dropdown, statusCell) {
                    const selectedValue = dropdown.value;
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
            
                if (statusAddDropdown && statusCellAdd) {
                    statusAddDropdown.addEventListener('change', () => updateStatus(statusAddDropdown, statusCellAdd));
                    updateStatus(statusAddDropdown, statusCellAdd); // Initial update
                }
            
                if (statusEditDropdown && statusCellEdit) {
                    statusEditDropdown.addEventListener('change', () => updateStatus(statusEditDropdown, statusCellEdit));
                    updateStatus(statusEditDropdown, statusCellEdit); // Initial update
                }
            });

            document.addEventListener('DOMContentLoaded', function() {
              const modBeratAddInput = document.getElementById('modBeratAdd');
              const modBeratEditInput = document.getElementById('modBeratEdit');
          
              function formatWeight(input) {
                  let value = input.value.trim(); 
                  if (value !== '') {
                      
                      value = value.replace(/[^\d.]/g, '');
                      // Convert to number
                      let weight = parseFloat(value);
                     
                      weight = weight.toFixed(2);
                     
                      value = weight + ' Kg';
                  }
                  input.value = value;
              }
          
              function addWeightInputListener(inputElement) {
                  inputElement.addEventListener('blur', function() {
                      formatWeight(inputElement);
                  });
              }
          
              if (modBeratAddInput) {
                  addWeightInputListener(modBeratAddInput);
              }
          
              if (modBeratEditInput) {
                  addWeightInputListener(modBeratEditInput);
              }
          });
          
            

            //   document.addEventListener('DOMContentLoaded', function() {
            //     const modTelpAddInput = document.getElementById('modTelpAdd');
            //     const modTelpEditInput = document.getElementById('modTelpEdit');
              
            //     function formatPhoneNumber(value) {
            //         let phoneNumber = value.replace(/\D/g, '');
            
            //         if (phoneNumber.startsWith('62')) {
            //             phoneNumber = '62' + phoneNumber.slice(2);
            //         } else if (phoneNumber.startsWith('0')) {
            //             phoneNumber = '62' + phoneNumber.slice(1);
            //         } else {
            //             phoneNumber = '62' + phoneNumber;
            //         }
            
            //         if (phoneNumber.length > 2) {
            //             phoneNumber = phoneNumber.slice(0, 2) + ' ' + phoneNumber.slice(2);
            //         }
            //         if (phoneNumber.length > 6) {
            //             phoneNumber = phoneNumber.slice(0, 6) + ' ' + phoneNumber.slice(6);
            //         }
            //         if (phoneNumber.length > 10) {
            //             phoneNumber = phoneNumber.slice(0, 10) + ' ' + phoneNumber.slice(10);
            //         }
            //         return phoneNumber.trim();
            //     }
            
            //     function addPhoneInputListener(inputElement) {
            //         inputElement.addEventListener('input', function() {
            //             const start = inputElement.selectionStart;
            //             const end = inputElement.selectionEnd;
            //             inputElement.value = formatPhoneNumber(inputElement.value);
            //             inputElement.setSelectionRange(start, end);
            //         });
            //     }
            
            //     if (modTelpAddInput) {
            //         addPhoneInputListener(modTelpAddInput);
            //     }
            
            //     if (modTelpEditInput) {
            //         addPhoneInputListener(modTelpEditInput);
            //     }
            // });
            

              
              