// Clinic Information Constants for Sahasraditya Physiotherapy
// Single source of truth across the application

export const CLINIC_INFO = {
  name: "Sahasraditya Physiotherapy & In Patient Rehabilitation Centre",
  shortName: "Sahasraditya Physiotherapy",
  tagline: "Restore Movement. Restore Life.",

  // Lead Practitioner
  doctor: {
    name: "Dr. D. V. Balaji N",
    title: "Physiotherapist & Rehabilitation Specialist ",
    image: "/images/doctor.jpg",
    experienceYears: "8+",
    education: [
      "Master's Degree: MS Sports & Health Sciences (Sports Medicine), Jawaharlal Nehru Technological University, Kakinada (JNTUK)",
      "Postgraduate Degree: MBA in Hospital Administration",
      "Bachelor's Degree: Bachelor of Physical Therapy (BPT), VIMS College of Physiotherapy, Dr. NTR University of Health Sciences, Vijayawada"
    ],
    verifiedExperience: [
      "KIMS (Bollineni Hospital), Rajahmundry",
      "Sarojini Physiotherapy Clinic, Kakinada",
      "Life Hospital, Anakapalli"
    ],
    hospitalExperience: "8 Years of Comprehensive In-Patient & OPD Hospital Practice in Rajahmundry & Coastal AP",
    certificationsAndTraining: [
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Neurodevelopmental Therapy (NDT / Bobath Concept)",
      "Neuro Myoskeletal Dry Needling",
      "Myofascial Release (MFR)",
      "Muscle Energy Technique (MET)",
      "Positional Release Technique (PRT)",
      "Therapeutic & Kinesiology Taping",
      "Cupping Therapy",
      "Joint Mobilization (Maitland / Mulligan) & Biomechanical Assessment"
    ],
    bio: "Dr. D. V. Balaji N is an accomplished Sports and Neuro Rehabilitation Specialist with 8 years of clinical hospital experience, including prominent hospital practice at KIMS (Bollineni Hospital) in Rajahmundry. Holding an MS in Sports & Health Sciences from JNTU Kakinada, an MBA in Hospital Administration, and a BPT from Dr. NTR University of Health Sciences, Dr. Balaji specializes in evidence-based PNF (Proprioceptive Neuromuscular Facilitation) and NDT (Neurodevelopmental Therapy) alongside advanced manual modalities to restore functional movement and long-term independence."
  },

  // Contact Information
  contact: {
    primaryPhone: "+91 94927 73733",
    primaryPhoneRaw: "+919492773733",
    secondaryPhone: "+91 99858 81892",
    secondaryPhoneRaw: "+919985881892",
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
  return `https://wa.me/919492773733?text=${encodeURIComponent(message)}`;
};
