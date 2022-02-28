document.addEventListener('DOMContentLoaded', () => {
  const newDeleteTrigger = document.getElementById('new-delete-trigger')
  const cancelTrigger = document.getElementById('cancel-trigger')
  const nextElement = findNextTabStop(newDeleteTrigger)

  newDeleteTrigger.addEventListener('click', (e) => {
    let submitCountdown = new Countdown(
      3,
      function (seconds) {
        newDeleteTrigger.disabled = true
        newDeleteTrigger.innerText = 'Deleting in ' + seconds + ' seconds...'
        newDeleteTrigger.classList.add('show-cancel')
        cancelTrigger.style.display = 'flex'
        cancelTrigger.focus()
      },
      function () {
        newDeleteTrigger.innerText = 'Deleted'
        newDeleteTrigger.classList.remove('show-cancel')
        cancelTrigger.style.display = 'none'
        nextElement.focus()
      }
    )

    cancelTrigger.addEventListener('click', (e) => {
      submitCountdown.abort()

      newDeleteTrigger.classList.remove('show-cancel')
      newDeleteTrigger.disabled = false
      newDeleteTrigger.innerText = 'Delete'
      newDeleteTrigger.focus()

      cancelTrigger.style.display = 'none'

      return false
    })

    return false
  })
})
