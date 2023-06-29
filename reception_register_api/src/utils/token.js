import crypto from 'crypto';

/**
 * @return {String}
 */
export function generateKey() {
  return crypto.randomBytes(20).toString('hex');
}
