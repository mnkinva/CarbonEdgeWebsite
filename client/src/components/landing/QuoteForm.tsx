import { useState } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  location: string;
  serviceType: string;
  material: string;
  contactMethod: string;
  description: string;
}

const serviceOptions = [
  'Mobile Welding',
  'Emergency Mobile Welding',
  'Shop Fabrication',
  'Equipment Repair',
];

const materialOptions = [
  'Steel',
  'Aluminum',
  'Stainless',
  'Not sure',
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    location: '',
    serviceType: '',
    material: '',
    contactMethod: 'Call',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Enter at least 10 digits';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Select a service type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const subject = `Quote Request - ${formData.serviceType} - ${formData.location}`;
    
    const body = `Name: ${formData.fullName}
Phone: ${formData.phone}
Location: ${formData.location}
Service Type: ${formData.serviceType}
Material: ${formData.material || 'Not specified'}
Preferred Contact: ${formData.contactMethod}

Description:
${formData.description}`;

    const mailtoLink = `mailto:carbonedgewelding@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  const inputClass = `w-full px-3 py-2.5 rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-[0.95rem] font-medium`;
  const labelClass = `block text-[0.87rem] font-semibold text-foreground mb-1.5`;
  const errorClass = `text-red-400 text-[0.8rem] mt-1 font-medium`;

  return (
    <div className="flex flex-col h-full">
      <p className="text-muted-foreground text-[0.92rem] mb-4 font-medium">
        Share job details and location. Photos help us estimate faster.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        {/* Job Location */}
        <div>
          <label htmlFor="location" className={labelClass}>
            Job Location <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City/County or Address"
            className={inputClass}
          />
          {errors.location && <p className={errorClass}>{errors.location}</p>}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className={labelClass}>
            Service Type <span className="text-red-400">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.serviceType && <p className={errorClass}>{errors.serviceType}</p>}
        </div>

        {/* Material */}
        <div>
          <label htmlFor="material" className={labelClass}>
            Material <span className="text-muted-foreground text-[0.75rem]">(optional)</span>
          </label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select material...</option>
            {materialOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className={labelClass}>
            Preferred Contact <span className="text-muted-foreground text-[0.75rem]">(optional)</span>
          </label>
          <div className="flex gap-4 mt-1">
            {['Call', 'Text', 'Email'].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer text-[0.9rem] text-foreground">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={formData.contactMethod === method}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className={labelClass}>
            Job Description <span className="text-red-400">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe the job, equipment, or repairs needed..."
            rows={3}
            className={`${inputClass} resize-none`}
          />
          {errors.description && <p className={errorClass}>{errors.description}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3 px-4 rounded-md bg-gradient-to-r from-primary to-[#4a6cf7] text-white font-semibold text-[0.95rem] hover:opacity-90 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Email Quote Request
        </button>

        {/* Post-submit note */}
        {submitted && (
          <p className="text-muted-foreground text-[0.8rem] text-center mt-2">
            If your email app doesn't open, please call/text{' '}
            <a href="tel:4346831283" className="text-primary hover:underline">
              (434) 683-1283
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
