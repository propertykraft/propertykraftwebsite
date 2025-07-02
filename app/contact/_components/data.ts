import {
  Mail,
  Phone,
  Clock,
  User,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@propertykraft.com",
    description: "Send us an email anytime",
    action: () => window.open("mailto:info@propertykraft.com", "_self"),
  },
  {
    icon: Phone,
    title: "Phone/WhatsApp",
    value: "+234 816 549 0072",
    description: "Call or message us directly",
    action: () => window.open("tel:+2348165490072", "_self"),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    value: "Chat Now",
    description: "Quick response guaranteed",
    action: () => window.open("https://wa.me/2348165490072", "_blank"),
  },
  {
    icon: MapPin,
    title: "Office Hours",
    value: "Mon-Fri, 9 AM – 6 PM",
    description: "We're here to help",
    action: () => {},
  },
];

export const responsePolicy = [
  {
    icon: CheckCircle,
    title: "Acknowledgment",
    time: "Within 2 hours",
    description: "We confirm receipt of your message",
  },
  {
    icon: CheckCircle,
    title: "First Response",
    time: "Within 24 hours",
    description: "Initial response with next steps",
  },
  {
    icon: CheckCircle,
    title: "Minor Issues",
    time: "1-3 business days",
    description: "Quick resolution for simple matters",
  },
  {
    icon: CheckCircle,
    title: "Complex Issues",
    time: "Up to 7 business days",
    description: "Thorough handling of complex requests",
  },
];
