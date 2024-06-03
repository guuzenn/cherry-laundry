function data() {
  function getThemeFromLocalStorage() {
    // if user already changed the theme, use it
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    // else return their preferences
    return (
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

  function setThemeToLocalStorage(value) {
    window.localStorage.setItem('dark', value)
  }

  return {
    dark: getThemeFromLocalStorage(),
    toggleTheme() {
      this.dark = !this.dark
      setThemeToLocalStorage(this.dark)
    },
    isSideMenuOpen: false,
    toggleSideMenu() {
      console.log(this.isSideMenuOpen)
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
    closeSideMenu() {
      this.isSideMenuOpen = false
    },
    isNotificationsMenuOpen: false,
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },

    isPagesMenuOpen: false,
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
    // Modal
    isModalOpen: false,
    trapCleanup: null,
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },

    addCustomer(e) {
      e.preventDefault()

      dataJson = JSON.stringify({
        name: document.getElementById('modNamaAdd').value,
        phone: document.getElementById('modTelpAdd').value,
        address: document.getElementById('modAlamatAdd').value,
      })
      fetch('http://localhost:3000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataJson,
      }).then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data berhasil ditambahkan',
            showConfirmButton: false,
            timer: 1500,
          })
          e.target.reset()
          this.closeModal()
          location.reload()
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Data gagal ditambahkan',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      })
    },
  }
}
