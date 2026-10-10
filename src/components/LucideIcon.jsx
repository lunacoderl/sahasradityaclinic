import React from 'react';
import {
  Activity, ShieldAlert, Layers, Target, Flame, Shield,
  Brain, HeartHandshake, Repeat, Hand, Zap, Crosshair,
  CircleDot, Cpu, Footprints, HeartPulse, Cross, Clock,
  Award, GraduationCap, Building2, ShieldCheck, Stethoscope,
  Sparkles, CheckCircle2, Calendar, Phone, MessageCircle,
  ArrowRight, MapPin, Mail, Info, Check, X, Menu,
  ChevronRight, ChevronDown, Home, Search, ArrowUp
} from 'lucide-react';

const iconMap = {
  Activity, ShieldAlert, Layers, Target, Flame, Shield,
  Brain, HeartHandshake, Repeat, Hand, Zap, Crosshair,
  CircleDot, Cpu, Footprints, HeartPulse, Cross, Clock,
  Award, GraduationCap, Building2, ShieldCheck, Stethoscope,
  Sparkles, CheckCircle2, Calendar, Phone, MessageCircle,
  ArrowRight, MapPin, Mail, Info, Check, X, Menu,
  ChevronRight, ChevronDown, Home, Search, ArrowUp
};

export default function LucideIcon({ name, size = 22, color = 'currentColor', className = '', ...props }) {
  const IconComponent = iconMap[name] || Activity;
  return <IconComponent size={size} color={color} className={className} {...props} />;
}
