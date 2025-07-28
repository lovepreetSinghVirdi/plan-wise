// src/utils/validators.js

// 1) Name: non‑empty
export function validateName(value) {
  if (!value.trim()) return 'Name is required';
  return '';
}

// 2) E‑mail: simple pattern + non‑empty
export function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Email is required';
 //"" inside this anything can allow before the @
 //any special character,capital and small letter but in one there is only zero or one dot is allow (?)
 //@ first any letter and digit then . and (+)then unlimite time the .com or .ca or .tech 
 const emailRegex = /^(?:"(?:\\[\x00-\x7F]|[^"\\])*"|[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)?)@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;



  if (!emailRegex.test(trimmed)) return 'Email is invalid';
  return '';
}

// 3) Phone: either +CC + 4–12 digits (total ≤ 15 digits) or 5–18 plain digits
        export function validatePhone(value) {
        const trimmed = value.trim();
        if (!trimmed) return 'Phone is required';

        // +1, then 3 digits, then 3 digits, then 4 digits, with optional space or hyphen
        const regex = /^\+[1-9][0-9]{0,2}[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
        if (regex.test(trimmed)) {
            return '';  // valid
        }
        return 'Number Must start with Country code(+1) and 10 digit long';
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
