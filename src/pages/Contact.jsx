/**
 * Contact.jsx — Contact Me page.
 * Left: a panel with contact details. Right: a controlled form that
 * captures First Name, Last Name, Contact Number, Email Address and
 * Message. On submit the data is validated, logged to the console
 * (stand-in for a real backend), and the user is redirected to the Home
 * page, which reads the submitted data from router state.
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { ownerProfile } from '../data/siteContent.js';

// Starting (empty) values for every form field.
const emptyFormValues = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  emailAddress: '',
  message: '',
};

// Simple pattern checks used during validation.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-.\s]{7,20}$/;

/** Returns an object of field → error message for any invalid fields. */
function validateForm(formValues) {
  const validationErrors = {};
  if (!formValues.firstName.trim()) validationErrors.firstName = 'First name is required.';
  if (!formValues.lastName.trim()) validationErrors.lastName = 'Last name is required.';
  if (formValues.contactNumber && !phonePattern.test(formValues.contactNumber)) {
    validationErrors.contactNumber = 'Enter a valid phone number.';
  }
  if (!emailPattern.test(formValues.emailAddress)) {
    validationErrors.emailAddress = 'Enter a valid email address.';
  }
  if (formValues.message.trim().length < 10) {
    validationErrors.message = 'Message should be at least 10 characters.';
  }
  return validationErrors;
}

export default function Contact() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [formErrors, setFormErrors] = useState({});

  /** Updates a single field as the user types. */
  const handleFieldChange = (changeEvent) => {
    const { name, value } = changeEvent.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  /** Validates, captures the data, then redirects to Home. */
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const validationErrors = validateForm(formValues);
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Captured submission — replace with an API/email service call later.
    console.log('Contact form submission:', formValues);

    navigate('/', { state: { submittedContact: formValues } });
  };

  /** Helper to render a labelled input with its error message. */
  const renderField = (fieldName, labelText, inputType = 'text', isRequired = true) => (
    <div className="form-field">
      <label htmlFor={fieldName}>
        {labelText}
        {isRequired && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={fieldName}
        name={fieldName}
        type={inputType}
        value={formValues[fieldName]}
        onChange={handleFieldChange}
        aria-invalid={Boolean(formErrors[fieldName])}
      />
      {formErrors[fieldName] && <p className="field-error">{formErrors[fieldName]}</p>}
    </div>
  );

  return (
    <section>
      <PageHeader
        eyebrow="Contact Me"
        title="Let's talk"
        subtitle="Send a message and I'll get back to you within two business days."
      />

      <div className="contact-layout">
        {/* Contact information panel */}
        <aside className="contact-panel">
          <h2>Contact information</h2>
          <dl>
            <dt>Name</dt>
            <dd>{ownerProfile.legalName}</dd>
            <dt>Email</dt>
            <dd><a href={`mailto:${ownerProfile.email}`}>{ownerProfile.email}</a></dd>
            <dt>Phone</dt>
            <dd>{ownerProfile.phone}</dd>
            <dt>Location</dt>
            <dd>{ownerProfile.location}</dd>
            <dt>Online</dt>
            <dd>
              <a href={ownerProfile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              {' · '}
              <a href={ownerProfile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            </dd>
          </dl>
        </aside>

        {/* Interactive message form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            {renderField('firstName', 'First Name')}
            {renderField('lastName', 'Last Name')}
          </div>
          <div className="form-row">
            {renderField('contactNumber', 'Contact Number', 'tel', false)}
            {renderField('emailAddress', 'Email Address', 'email')}
          </div>
          <div className="form-field">
            <label htmlFor="message">Message<span aria-hidden="true"> *</span></label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formValues.message}
              onChange={handleFieldChange}
              aria-invalid={Boolean(formErrors.message)}
            />
            {formErrors.message && <p className="field-error">{formErrors.message}</p>}
          </div>
          <button type="submit" className="button primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
