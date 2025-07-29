// src/utils/validators.js

import { EMAIL_REGEX } from "../Helpers/helpers";

// 1) Name: non‑empty
export function validateName(value) {
  if (!value.trim()) return 'Name is required';
  return '';
}

// 2) E‑mail: simple pattern + non‑empty
export function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Email is required';

  if (!EMAIL_REGEX.test(trimmed)) return 'Email is invalid';
  return '';
}

// 3) Phone: either +CC + 4–12 digits (total ≤ 15 digits) or 5–18 plain digits
export function validatePhone(value) {
  const normalized = value.trim().replace(/[\s\-\.\(\)]/g, '');
  if (!normalized) return 'Phone is required';

  // +CC + subscriber
  const e164  = /^\+([1-9]\d{0,2})(\d{4,12})$/;
  // plain subscriber number
  const plain = /^\d{5,18}$/;

  if (!(e164.test(normalized) || plain.test(normalized))) {
    return 'Enter either +CCxxxxxxxx (max 15 digits) or 5–18 digits';
  }
  return '';
}

// 4) Address: start with number + space/comma
export function validateAddress(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Address is required';
  if (!/^\d+[\s,]+/.test(trimmed)) {
    return 'Address must start with a street number (e.g., "123 Main St, ...")';
  }
  return '';
}

// 5) Message: > 5 words
export function validateMessage(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Message is required';
  const wordCount = trimmed.split(/\s+/).length;
  if (wordCount <= 5) {
    return 'Message must be more than 5 words';
  }
  return '';
}
