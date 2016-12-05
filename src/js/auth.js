

module.exports = {
  login(email, pass, redirectCallback) {
    if (localStorage.token) {
      redirectCallback(true)
      this.onChange(true)
      return
    }

    if (email === 'test@test.com' && pass === 'test') {
      localStorage.token = Math.random().toString(36).substring(7)
      redirectCallback(true)
      this.onChange(true)
    } else {
      redirectCallback(false)
      this.onChange(false)
    }
  },

  logout() {
    delete localStorage.token
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}
