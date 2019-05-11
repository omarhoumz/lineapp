import React from 'react'

export const About = () => {
  return (
    <div
      class="modal fade"
      id="aboutLineApp"
      tabindex="-1"
      role="dialog"
      aria-labelledby="aboutLineAppTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="aboutLineAppTitle">
              About LineApp
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>This is an awsome app.</p>
            <p>
              Though it's not ready to be used yet, not even an emalpha version.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
