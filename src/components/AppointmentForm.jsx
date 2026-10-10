import React, { useState } from 'react';
import { Send, PhoneCall, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinic';

export default function AppointmentForm({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    enquiry: defaultService ? `Enquiring about ${defaultService}` : ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    // Phone validation (accepting standard 10-digit Indian mobile numbers or with +91)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    // Format pre-filled WhatsApp message
    const formattedMessage = `Hello Dr. Balaji / Sahasraditya Physiotherapy Centre,

I would like to enquire about an assessment at your clinic in Rajamahendravaram.

*Patient Name:* ${formData.name.trim()}
*Contact Phone:* ${formData.phone.trim()}
*Preferred Date:* ${formData.preferredDate || 'Earliest available'}
*Preferred Time Slot:* ${formData.preferredTime}
${formData.enquiry ? `*Enquiry / Concerns:* ${formData.enquiry.trim()}` : ''}

Please let me know if an assessment slot is available. Thank you.`;

    const whatsappLink = getWhatsAppUrl(formattedMessage);

    // Open WhatsApp in a new tab for seamless user handoff
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="card appointment-form-card"
      style={{
        backgroundColor: 'var(--warm-white)',
        border: '1px solid var(--subtle-borders)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)'
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <h3
          style={{
            fontSize: '1.4rem',
            color: 'var(--primary-navy)',
            marginBottom: '0.4rem'
          }}
        >
          Enquire About an Appointment
        </h3>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--muted-secondary-text)',
            lineHeight: 1.5
          }}
        >
          Fill in your basic contact details to connect directly with Dr. Balaji via WhatsApp or telephone to arrange an assessment.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            backgroundColor: 'var(--teal-light)',
            border: '1px solid var(--teal)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <CheckCircle2 size={24} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                WhatsApp Enquiry Initiated
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-text)', marginBottom: '0.75rem' }}>
                Your enquiry details have been forwarded to WhatsApp. If the chat window did not open automatically, please click below or call our clinic directly:
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary btn-sm"
                >
                  <Send size={15} /> Re-open WhatsApp
                </button>
                <a
                  href={`tel:${CLINIC_INFO.contact.primaryPhoneRaw}`}
                  className="btn btn-secondary btn-sm"
                >
                  <PhoneCall size={15} /> Call {CLINIC_INFO.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="appointment-name" className="form-label">
            Full Name <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="appointment-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Varma"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="form-input"
          />
          {errors.name && (
            <span id="name-error" className="form-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Contact Phone */}
        <div className="form-group">
          <label htmlFor="appointment-phone" className="form-label">
            Mobile / WhatsApp Number <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="appointment-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 99858 81892"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="form-input"
          />
          {errors.phone && (
            <span id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Two-Column Date & Time Slot */}
        <div className="grid-2-sm" style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="appointment-date" className="form-label">
              Preferred Date <span style={{ fontWeight: 400, color: 'var(--muted-secondary-text)' }}>(Optional)</span>
            </label>
            <input
              type="date"
              id="appointment-date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="form-input"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="appointment-time" className="form-label">
              Preferred Time Slot
            </label>
            <select
              id="appointment-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
              <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
              <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
            </select>
          </div>
        </div>

        {/* Short Enquiry / Treatment Concern */}
        <div className="form-group">
          <label htmlFor="appointment-enquiry" className="form-label">
            Brief Condition or Question <span style={{ fontWeight: 400, color: 'var(--muted-secondary-text)' }}>(Optional)</span>
          </label>
          <textarea
            id="appointment-enquiry"
            name="enquiry"
            rows={3}
            value={formData.enquiry}
            onChange={handleChange}
            placeholder="e.g. Knee pain after a fall, or enquiry regarding post-surgery rehabilitation..."
            className="form-textarea"
          />
          <span className="form-helper">
            Please do not include sensitive medical history or confidential records.
          </span>
        </div>

        {/* Non-confirmation Disclaimer Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            backgroundColor: 'var(--soft-ivory)',
            border: '1px solid var(--subtle-borders)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.75rem',
            marginBottom: '1.25rem',
            fontSize: '0.825rem',
            color: 'var(--charcoal-text)'
          }}
        >
          <AlertCircle size={18} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
          <span>
            <strong>Important Note:</strong> Submitting this enquiry connects you directly to our clinic staff via WhatsApp. It does not automatically guarantee or book an appointment until confirmed by the clinic.
          </span>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%', gap: '0.65rem' }}
        >
          <Send size={18} aria-hidden="true" />
          <span>Continue to WhatsApp Enquiry</span>
        </button>
      </form>
    </div>
  );
}
