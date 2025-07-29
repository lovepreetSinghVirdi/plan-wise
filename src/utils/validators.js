// src/utils/validators.js

import {
  EMAIL_REGEX,
  PHONE_REGEX,
  MESSAGE_REGEX,
} from '../Helpers/helpers.jsx';

// 1) Name: non‑empty
export function validateName(value) {
  if (!value.trim()) return 'Name is required';
  return '';
}

// 2) E‑mail: non‑empty + pattern
export function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Email is required';
  if (!EMAIL_REGEX.test(trimmed)) return 'Email is invalid';
  return '';
}

// 3) Phone: non‑empty + pattern
export function validatePhone(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Phone is required';
  if (!PHONE_REGEX.test(trimmed))
    return 'phone Number is not valid';
  return '';
}

// 4) Address: must start with number + space/comma, and include a Canadian postal code
export function validateAddress(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Address is required';
  return '';
}

// 5) Message: 1–50 characters, including spaces
export function validateMessage(value) {
  if (!value.trim()) return 'Message is required';
  if (!MESSAGE_REGEX.test(value))
    return 'Message must be more than 50 characters';
  return '';
}
