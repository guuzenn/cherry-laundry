document.getElementById('statusDropdown').addEventListener('change', function() {
    var selectedValue = this.value;
    var statuses = ['selesai', 'proses', 'belum'];
    
    statuses.forEach(function(status) {
      var element = document.getElementById(status);
      if (status === selectedValue) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  });
  