import React from 'react'

export const About = () => {
  return (
    <div
      className="modal fade"
      id="aboutLineApp"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="aboutLineAppTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="aboutLineAppTitle">
              About LineApp
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>This is an awsome app.</p>
            <p>
              Though it&apos;s not <strong>ready</strong> to be used yet, not
              even an alpha version.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
