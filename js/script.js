const sign_in = document.getElementById('sign_in')
if (sign_in) {
  sign_in.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = sign_in.querySelector('.modal-title')
    const modalBodyInput = sign_in.querySelector('.modal-body input')

    modalTitle.textContent = `Sign in ${recipient}`
    modalBodyInput.value = recipient
  })
}