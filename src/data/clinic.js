// Clinic Information Constants for Sahasraditya Physiotherapy
// Single source of truth across the application

export const CLINIC_INFO = {
  name: "Sahasraditya Physiotherapy & In Patient Rehabilitation Centre",
  shortName: "Sahasraditya Physiotherapy",
  tagline: "Restore Movement. Restore Life.",
  
  // Lead Practitioner
  doctor: {
    name: "Dr. D. V. Balaji N",
    title: "Lead Physiotherapist & Rehabilitation Specialist",
    image: "/images/doctor.jpg",
    education: [
      "Master's Degree: MS Sports & Health Sciences (Sports Medicine), Jawaharlal Nehru Technological University, Kakinada",
      "Bachelor's Degree: Bachelor of Physical Therapy (BPT), VIMS College of Physiotherapy, Dr. NTR Health University, Vijayawada"
    ],
    verifiedExperience: [
      "Life Hospital, Anakapalli",
      "Sarojini Physiotherapy Clinic, Kakinada",
      "KIMS (Bollineni), Rajahmundry"
    ],
    certificationsAndTraining: [
      "Neuro Myoskeletal Dry Needling",
      "Myofascial Release (MFR)",
      "Muscle Energy Technique (MET)",
      "Positional Release Technique (PRT)",
      "Therapeutic Taping",
      "Cupping Therapy",
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Joint Mobilization & Biomechanical Assessment"
    ],
    bio: "Dr. D. V. Balaji N is a dedicated physiotherapist with postgraduate training in Sports & Health Sciences from JNTU Kakinada and extensive clinical background at premier healthcare institutions across coastal Andhra Pradesh. His clinical practice emphasizes thorough biomechanical assessment, evidence-based manual therapy, and progressive active rehabilitation designed to restore patient mobility and independence."
  },

  // Contact Information
  contact: {
    primaryPhone: "+91 99858 81892",
    primaryPhoneRaw: "+919985881892",
    secondaryPhone: "+91 94927 73733",
    secondaryPhoneRaw: "+919492773733",
    email: "balajindv@gmail.com",
    address: {
      line1: "Ground Floor, Suvishesapuram",
      line2: "Opposite Central Jail Road, Bhaskar Nagar",
      city: "Rajamahendravaram",
      state: "Andhra Pradesh",
      pincode: "533106",
      country: "India",
      full: "Ground Floor, Suvishesapuram, opposite Central Jail Road, Bhaskar Nagar, Rajamahendravaram, Andhra Pradesh 533106, India"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sahasraditya+Physiotherapy+Suvishesapuram+Bhaskar+Nagar+Rajamahendravaram+533106"
  },

  // Trust & Core Philosophy
  trustPillars: [
    {
      title: "Personalized Rehabilitation",
      description: "Treatment plans tailored to your specific functional goals, movement limitations, and daily activities."
    },
    {
      title: "Movement-Focused Treatment",
      description: "Restoring active mobility and strengthening musculoskeletal mechanics for lasting physical independence."
    },
    {
      title: "Assessment-Led Care",
      description: "Systematic physical evaluation before initiating any manual intervention or exercise protocol."
    },
    {
      title: "Patient Education",
      description: "Clear guidance on posture, ergonomic self-care, and home exercise progressions to prevent recurrence."
    }
  ]
};

// WhatsApp Link Generator with Pre-filled Enquiry
export const getWhatsAppUrl = (customMessage) => {
  const defaultMessage = `Hello Dr. Balaji / Sahasraditya Physiotherapy Centre,

I would like to enquire about an assessment and appointment for physiotherapy at your clinic in Rajamahendravaram.

Could you please share available appointment slots?

Thank you.`;

  const message = customMessage || defaultMessage;
  return `https://wa.me/919985881892?text=${encodeURIComponent(message)}`;
};
